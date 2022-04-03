import QuestaoModel from "../model/questao"
import RespostasModel from "../model/respostas"
import Questionario from "../componentes/Questionario"
import styles from "../styles/questao.module.css"
import { useEffect, useState } from "react"

export default function Home() {
  
  const questaoMock = new QuestaoModel(1, "Melhor cor para Fredson?", [
        RespostasModel.errada('Vermeha'),
        RespostasModel.errada('Verde'),
        RespostasModel.certa('Preta'),
        RespostasModel.errada('Rosa'),
  ])

 
  const BASE_URL = 'http://localhost:3000/api'
  const [idsQuestoes, setIdCarregados] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  
  
  async function carregaIds(){

    const resp = await fetch (`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    
    setIdCarregados(idsQuestoes)
  }

  async function carregaQuestao(id: number){
  
    const resp = await fetch (`${BASE_URL}/questoes/${id}`)
    const json = await resp.json()

    const NovaQuestao = QuestaoModel.criarUsandoObjeto(json)

    setQuestao(NovaQuestao) 
    
  }

  useEffect(()=>{
    carregaIds()
  },[])
  

  useEffect(()=>{
    idsQuestoes.length > 0 && carregaQuestao(idsQuestoes[0])
  },[idsQuestoes])

  function questaoRespondida(questao: QuestaoModel){

  }

  function  irPraProximaPasso (){

  }


  return (

    
    <div className={styles.questao}>
     
        <Questionario 
          questao={questao}
          ultima={false}
          questaoRespondida={questaoRespondida}
          irPraProximaPasso = {irPraProximaPasso}
        />
      
    </div>
  )
}
