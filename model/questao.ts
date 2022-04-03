import { embaralhar } from "../functions/arrays"
import RespostasModel from "./respostas"

export default class QuestaoModel{

    #id:number  //type private of atributes
    #pergunta: string
    #respostas: RespostasModel[]
    #acertou: boolean
   // #respondida: boolean


   constructor(id: number, pergunta: string, respostas: RespostasModel[], acertou = false){
        this.#id = id
        this.#pergunta = pergunta
        this.#respostas = respostas
        this.#acertou = acertou

   }
   

   get id(){
       return this.#id
   }

   get pergunta(){
       return this.#pergunta
   }

   get respostas(){
    return this.#respostas
    }
    get acertou(){
        return this.#acertou
    }

    get naorespondida(){
       
        return !this.respondida
 
     }


    get respondida(){
       for(let resposta of this.#respostas){
           if(resposta.revelada) return true
       }
       return false

    }

   
    responderCom(indice: number) : QuestaoModel{
   
        const acertou = this.#respostas[indice]?.certa 
        const respostas = this.#respostas.map((resposta,i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.#id, this.#pergunta, respostas, acertou)

    }

    embaralharRespostas(){
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel( this.#id, this.#pergunta, respostasEmbaralhadas, this.#acertou)
    }
    
    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel{
        const resposta = obj.respostas.map(resp => RespostasModel.criarUsandoObjeto(resp))
        
        return new QuestaoModel(obj.id, obj.pergunta, resposta , obj.acertou)
    }

    paraObjeto(){
        return {
            id: this.#id,//type private of atributes
            pergunta: this.#pergunta,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
            acertou:  this.#acertou,
            repondida: this.respondida
           
        }
          
       
    }
}