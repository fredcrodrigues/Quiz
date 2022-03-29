import RespostasModel from "../model/respostas"
import styles from "../styles/Resposta.module.css"


interface RespostaTnterface{
    valor: RespostasModel,
    indice: number, 
    corLetra: string,
    letra: string
}

export default function Resposta(props: RespostaTnterface){
    const resposta = props.valor
    return(

        <div className={styles.resposta}>
            <div className={styles.conteudoResposta}>
                <div className={styles.frente}>

                    <div style={{backgroundColor: props.corLetra}} className={styles.letra}>

                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>

                  

                </div>

            </div>
            
        </div>
    )
}