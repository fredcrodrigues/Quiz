import QuestaoModel from "../model/questao"
import styles from "../styles/Questionario.module.css"
import Questao from "../componentes/Questao"
import Botao from "../componentes/Botao"

interface Questionario{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximaPasso: () => void
}

export default function Questionario(props){

    function respostaFornecida(indice: number){
        if(props.questao.naorespondida){
                props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    return(
       
            <div className={styles.questionario}>
                    
                    {props.questao ?

                        <Questao
                            valor={props.questao}
                            tempoPraresposta={6}
                            respostaFornecida={respostaFornecida}
                            tempoEsgotado={props.irPraProximaPasso}/>
                    : false 
                    }
          
                     <Botao onClick={props.irPraProximaPasso} texto={props.ultima ? "Finalizar" : "Próximo"}/> 
            </div>
            
           
        
    )
}