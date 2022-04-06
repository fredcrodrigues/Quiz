import styles from "../styles/Resposta.module.css"
import QuestaoModel from "../model/questao"
import Pergunta from "../componentes/Pergunta"
import Resposta from "../componentes/Resposta"
import Temporizador from "./Temporizador"

const letras =  [
    {valor: "A", cor:"#6A5ACD"},
    {valor: "B", cor:"#008000"},
    {valor: "C", cor:"#D2691E"},
    {valor: "D", cor:"#DC143C"},
    {valor: "E", cor:"#FF4500"}

]
interface QuestaoProps{
    valor: QuestaoModel
    tempoPraresposta?: number
    respostaFornecida:(indice : number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps){

   const questao =  props.valor
   
   function rederizarRespotas(){
        return questao.respostas.map((resposta, i) => {
         
            return( <Resposta key={`${questao.id}${i}`}
                    valor={resposta} 
                    indice={i} 
                    letra={letras[i].valor}
                    corLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                    />
            )
                
        })
   }

    return(
        <div className={styles.questao}>
        
           <Pergunta texto={questao.pergunta} />
           <Temporizador key={questao.id} durancao={props.tempoPraresposta ?? 10} tempoEsgotado={props.tempoEsgotado}/>
           {rederizarRespotas()}
        </div>
    )
}