import QuestaoModel from "../model/questao"
/*import RespostasModel from "../model/respostas"*/
import Questionario from "../componentes/Questionario"
import styles from "../styles/questao.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Home() {
  //mock de teste
  /*const questaoMock = new QuestaoModel(1, "Melhor cor para Fredson?", [
        RespostasModel.errada('Vermeha'),
        RespostasModel.errada('Verde'),
        RespostasModel.certa('Preta'),
        RespostasModel.errada('Rosa'),
  ])*/

 
  const BASE_URL = 'https://projetoquiz.vercel.app/api'

  const router = useRouter()
  const [idsQuestoes, setIdCarregados] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostaQuestao, setResp] = useState<number>(0)
  
  
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


     
      const acertou = questao.acertou
      setQuestao(questao)
      setResp(respostaQuestao + (acertou ? 1 : 0))
      
      
      console.log( respostaQuestao + (acertou ? 1 : 0))
  } 

  function irPraProximoquestao(proxId: number){
    carregaQuestao(proxId)
  }

  function finalizar(){
    router.push({

      pathname: "/resultados",
      query:{
        total: idsQuestoes.length,
        certas: respostaQuestao
      }

    })
  }
  function idProximaQuestao(){
    /// pega o indice d eacorod com o id especifico 
    if(questao){
      const proxIndice = idsQuestoes.indexOf(questao.id) + 1
      return idsQuestoes[proxIndice]
    }
    
  }
  function  irPraProximaPasso (){

    const proxID = idProximaQuestao()

    proxID ? irPraProximoquestao(proxID) : finalizar()

  }


  return questao ? (
    

  <div className={styles.questao}>

              <Questionario 
                questao={questao}
                ultima={irPraProximaPasso === undefined}
                questaoRespondida={questaoRespondida}
                irPraProximaPasso = {irPraProximaPasso}
              />

  </div>
  ): false
}
