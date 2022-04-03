import styles from "../styles/pergunta.module.css"
interface PerguntaInterface{
    texto:  string
}
export default function Pergunta(props: PerguntaInterface){
   
    return (

        <div>
        
            <h1>{props.texto}</h1>
        </div>
    )
}