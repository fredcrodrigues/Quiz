import styles from "../styles/Temporizador.module.css"
import {CountdownCircleTimer} from "react-countdown-circle-timer"

interface Tempo{
    durancao:number
    tempoEsgotado: () => void
}


export default function Temporizador(props: Tempo){

    return(
        <div className={styles.temporizador}>

            <CountdownCircleTimer
                isPlaying
                size={120}
                duration={props.durancao}
                onComplete={props.tempoEsgotado}
                colors={[ '#BCE596', '#F78801', '#ED827A']}
                colorsTime={[0.33, 0.33, 0.33]}
             
                
            >
            {({remainingTime}) => remainingTime}
        </CountdownCircleTimer>

        </div>
    )

}