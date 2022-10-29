import React, { useEffect, useState } from 'react'
import StatsDisplay from "./StatsDisplay";

export default function BothStats(props) {

    const [redHp, setRedHp] = useState(props.redStats.hp)
    const [blueHp, setBlueHp] = useState(props.blueStats.hp)

    const [winner, setWinner] = useState("")

    const [logs, setLogs] = useState([])

    useEffect(() => {
        Fight(props.blueStats, props.redStats) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Fight = (blueStats, redStats) => {

        let blueFightDuration = 0.0
        let redFightDuration = 0.0

        let redCurrentHp = redStats.hp
        let blueCurrentHp = blueStats.hp

        const blueTimer = setInterval(() => {
            blueFightDuration += 0.1

            if(Math.floor(blueFightDuration * 10) / 10 - parseFloat(blueStats.attackDelay) === 0.0){

                redCurrentHp -= blueStats.attack - blueStats.attack * (redStats.defence / 100)

                setRedHp(redCurrentHp)

                blueFightDuration = 0

                setLogs(logs => [...logs, `${blueStats.name.split(',')[0]} löi ${redStats.name.split(',')[0]}a ja teki ${(blueStats.attack - blueStats.attack * (redStats.defence / 100)).toFixed(1)} (${blueStats.attack} - ${blueStats.attack} * ${(redStats.defence / 100).toFixed(3)}) vahinkoa. ${redStats.name.split(',')[0]}lle jäi ${redCurrentHp.toFixed(1)} HP:ta`])

                if(redCurrentHp <= 0){
                    redCurrentHp = 0
                    setRedHp(redCurrentHp)
                    clearInterval(blueTimer)
                    clearInterval(redTimer)

                    setLogs(logs => [...logs, `${blueStats.name.split(',')[0]} voitti (${blueCurrentHp.toFixed(1)}) HP`])
                    setWinner(blueStats.name)
                }
            }

        }, 100)

        const redTimer = setInterval(() => {
            redFightDuration += 0.1

            if(Math.floor(redFightDuration * 10) / 10 - parseFloat(redStats.attackDelay) === 0.0){

                blueCurrentHp -= redStats.attack - redStats.attack * (blueStats.defence / 100)

                setBlueHp(blueCurrentHp)
                
                redFightDuration = 0

                setLogs(logs => [...logs, `${redStats.name.split(',')[0]} löi ${blueStats.name.split(',')[0]}a ja teki ${(redStats.attack - redStats.attack * (blueStats.defence / 100)).toFixed(1)} (${redStats.attack} - ${redStats.attack} * ${(blueStats.defence / 100).toFixed(3)}) vahinkoa. ${blueStats.name.split(',')[0]}lle jäi ${blueCurrentHp.toFixed(1)} HP:ta`])
                
                if(blueCurrentHp <= 0){
                    blueCurrentHp = 0
                    setBlueHp(blueCurrentHp)
                    clearInterval(blueTimer)
                    clearInterval(redTimer)

                    setLogs(logs => [...logs, `${redStats.name.split(',')[0]} voitti (${redCurrentHp.toFixed(1)}) HP`])
                    setWinner(redStats.name)
                }
            }

        }, 100)
    }
    
    return (
        <>
            {
                winner !== "" ? 
                    <div className="text-center">
                        <h3>Voittaja on {winner}!</h3>
                    </div>
                : ""
            }
            <div className="d-flex justify-content-center p-4">

                <StatsDisplay stats={props.blueStats} hp={blueHp / props.blueStats.hp * 100} isBlue={true} />

                <div className="align-self-end d-grid">
                    <p className="p-3 material-symbols-outlined" title="Health">favorite</p>
                    <p className="p-3 material-symbols-outlined" title="Attack">swords</p>
                    <p className="p-3 material-symbols-outlined" title="Defence">shield</p>
                    <p className="p-3 material-symbols-outlined" title="Attack delay">timer</p>
                </div>

                <StatsDisplay stats={props.redStats} hp={redHp / props.redStats.hp * 100}/>
            </div>


            <details>
                <summary>Lokit</summary>

                {
                    logs.map(log => (
                        <p>{log}</p>
                    ))
                }
            </details>
        </>
    )
}
