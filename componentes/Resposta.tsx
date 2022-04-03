import RespostasModel from "../model/respostas"
import styles from "../styles/Resposta.module.css"




interface RespostaTnterface{
    valor: RespostasModel,
    indice: number, 
    corLetra: string,
    letra: string,
    respostaFornecida:(indice: number) => void
}

export default function Resposta(props: RespostaTnterface){
    const resposta = props.valor 
  
    return(

        <div className={styles.resposta}>
            <div className={styles.conteudoResposta} onClick={() => props.respostaFornecida(props.indice)} >
                
               { !resposta.revelada? 
               
                (
                    
                
                <div className={styles.frente}>

                        <div style={{backgroundColor: props.corLetra}} className={styles.letra}>
                            {props.letra}
                        </div>
                        <div className={styles.valor}>
                            {resposta.valor}
                        </div>
                    </div>)
                    :
                    (
                     
                    <div className={styles.verso}>
                        {resposta.certa? (
                            <div className={styles.certa}>
                                A resposta informada é...
                                <div className={styles.valor}>
                                    {resposta.valor}
                                </div>
                            </div>)
                            : 
                            (<div className={styles.errada}>
                                
                                A resposta informada está errada...
                                <div className={styles.valor}>
                                    {resposta.valor}
                                </div>
                            </div>
                            )}
                        </div>)}
                        
                  

                

            </div>
            
        </div>
    )
}