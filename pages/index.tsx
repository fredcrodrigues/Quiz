import QuestaoModel from "../model/questao"
import RespostasModel from "../model/respostas"
import Questao from "../componentes/Questao"

export default function Home() {
  
  const questaoTest = new QuestaoModel(1, "Melhor cor para Fredson?", [
        RespostasModel.errada('Vermeha'),
        RespostasModel.errada('Verde'),
        RespostasModel.certa('Preta'),
        RespostasModel.errada('Rosa'),
  ])
  
  
  return (
    <div>
     
     <Questao valor={questaoTest}/>

    </div>
  )
}
