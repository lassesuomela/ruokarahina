import React, { useEffect, useState } from 'react'
import StatsDisplay from "./StatsDisplay";
import HealthBar from "./HealthBar";

export default function BothStats(props) {

    const [redHp, setRedHp] = useState(props.redStats.hp)
    const [blueHp, setBlueHp] = useState(props.blueStats.hp)

    const [winner, setWinner] = useState("")

    useEffect(() => {
        Fight(props.blueStats, props.redStats)
    }, [])

    const Fight = (blueStats, redStats) => {

        let blueFightDuration = 0.0
        let redFightDuration = 0.0

        let redCurrentHp = redStats.hp
        let blueCurrentHp = blueStats.hp

        const blueTimer = setInterval(() => {
            blueFightDuration += 0.1

            if(Math.floor(blueFightDuration * 10) / 10 - parseFloat(blueStats.attackDelay) === 0.0){

                redCurrentHp -= blueStats.attack

                setRedHp(redCurrentHp)

                blueFightDuration = 0

                if(redCurrentHp <= 0){
                    redCurrentHp = 0
                    setRedHp(redCurrentHp)
                    clearInterval(blueTimer)
                    clearInterval(redTimer)

                    setWinner(blueStats.name)
                }
            }

        }, 100)

        const redTimer = setInterval(() => {
            redFightDuration += 0.1

            if(Math.floor(redFightDuration * 10) / 10 - parseFloat(redStats.attackDelay) === 0.0){

                blueCurrentHp -= redStats.attack

                setBlueHp(blueCurrentHp)
                
                redFightDuration = 0
                
                if(blueCurrentHp <= 0){
                    blueCurrentHp = 0
                    setBlueHp(blueCurrentHp)
                    clearInterval(blueTimer)
                    clearInterval(redTimer)

                    setWinner(redStats.name)
                }
            }

        }, 100)
    }
    
    return (
        <>
            <HealthBar value={blueHp / props.blueStats.hp * 100}/>


            <div className="d-flex justify-content-center p-4">


                <StatsDisplay stats={props.blueStats}/>

                <div className="align-self-end d-grid">
                    <p className="p-3 material-symbols-outlined" title="Health">favorite</p>
                    <p className="p-3 material-symbols-outlined" title="Attack">swords</p>
                    <p className="p-3 material-symbols-outlined" title="Defence">shield</p>
                    <p className="p-3 material-symbols-outlined" title="Attack delay">timer</p>
                </div>

                <StatsDisplay stats={props.redStats}/>
            </div>

            <HealthBar value={redHp / props.redStats.hp * 100}/>

            {
                winner !== "" ? 
                    <div className="text-center p-4">
                        <h3>Voittaja on {winner}</h3>
                    </div>
                : ""
            }
        </>
    )
}
