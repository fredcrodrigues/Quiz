import { useRouter } from "next/router"
import Estatistica from "../componentes/Estatistica"
import Botao from "../componentes/Botao"
import styles from "../styles/Resultado.module.css"
export default function Resultados(){
    const router = useRouter()


    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)
    return(
        <div className={styles.resultados}>
            <h1>Resultados</h1>
            <div style={{display: 'flex'}}>

                <Estatistica texto="Perguntas" valor={total} corFundo="#9cd2a4" corFonte="#000"/>
                <Estatistica texto="Certas" corFonte="#000" valor={certas}/>
                <Estatistica texto="Percentual" valor={`${percentual}%`} corFonte="#000" corFundo="#DE6A33"/>
            </div>

            <Botao href="/" texto="Tentar Novamente"/>
            
        </div>
    )
}