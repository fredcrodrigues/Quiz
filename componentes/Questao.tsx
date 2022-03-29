import styles from "../styles/Resposta.module.css"
import QuestaoModel from "../model/questao"
import Pergunta from "../componentes/Pergunta"
import Resposta from "../componentes/Resposta"


interface QuestaoProps{
    valor: QuestaoModel
}

export default function Questao(props: QuestaoProps){

   const questao =  props.valor
   
   function rederizarRespotas(){
        return questao.respostas.map((resposta, i) => {
            return( <Resposta key={i}
                    valor={resposta} 
                    indice={i} 
                    letra="A" 
                    corLetra="#f2c866"/>
            )
                
        })
   }

    return(
        <div className={styles.questao}>
           <Pergunta texto={questao.pergunta}/>
           {rederizarRespotas()}
        </div>
    )
}