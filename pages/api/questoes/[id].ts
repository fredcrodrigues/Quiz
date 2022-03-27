import questoes from "../bancodequestoes"

export default function perguntas(req, resp){
  
  const idSelecionado  = +req.query.id

  const questaoEncontrada = questoes.filter(questao => questao.id === idSelecionado)

  if(questaoEncontrada.length === 1){
    const questaoSelecionada = questaoEncontrada[0].embaralharRespostas()
    // teste para revelar a resposta
    const obj = questaoSelecionada.responderCom(0).paraObjeto()
    resp.status(200).json(obj)
  }else{
    resp.status(204).send()
  }
  

  
 

}