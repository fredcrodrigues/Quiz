import QuestaoModel from "../model/questao"

interface QuestaoProps{
    valor: QuestaoModel
}

export default function Questao(props: QuestaoProps){

   const questao =  props.valor
   
    return(
        <div>
            <h1>Teste</h1>
        </div>
    )
}