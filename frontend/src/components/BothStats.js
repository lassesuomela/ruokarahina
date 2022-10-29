import React, { useEffect, useState } from 'react'
import StatsDisplay from "./StatsDisplay";

export default function BothStats(props) {

    const [redHp, setRedHp] = useState(props.redStats.hp)
    const [blueHp, setBlueHp] = useState(props.blueStats.hp)

    const [winner, setWinner] = useState("")

    const [logs, setLogs] = useState([])

    useEffect(() => {

        const Fight = (blueStats, redStats) => {

            let fightDuration = 0.0

            let redCurrentHp = redStats.hp
            let blueCurrentHp = blueStats.hp

            setLogs(logs => [...logs, `[${fightDuration}s] Taistelu alkaa.`])

            const fightTimer = setInterval(() => {
                fightDuration += 0.1

                if(Math.floor(fightDuration * 10) % (blueStats.attackDelay * 10) / 10 === 0){
                    redCurrentHp -= blueStats.attack - blueStats.attack * (redStats.defence / 100)

                    setRedHp(redCurrentHp)

                    setLogs(logs => [...logs, `[${Math.floor(fightDuration * 10) / 10}s] ${blueStats.name} löi ja teki ${(blueStats.attack - blueStats.attack * (redStats.defence / 100)).toFixed(1)} (${blueStats.attack} - ${blueStats.attack} * ${(redStats.defence / 100).toFixed(3)}) vahinkoa. ${redStats.name}lle jäi ${redCurrentHp.toFixed(1)} HP:ta.`])

                    if(redCurrentHp <= 0){
                        redCurrentHp = 0
                        setRedHp(redCurrentHp)
                        clearInterval(fightTimer)

                        setLogs(logs => [...logs, `[${Math.floor(fightDuration * 10) / 10}s] ${blueStats.name} voitti!`])
                        setWinner(blueStats.name)
                    }
                }else if(Math.floor(fightDuration * 10) % (redStats.attackDelay * 10) / 10 === 0){

                    blueCurrentHp -= redStats.attack - redStats.attack * (blueStats.defence / 100)

                    setBlueHp(blueCurrentHp)

                    setLogs(logs => [...logs, `[${Math.floor(fightDuration * 10) / 10}s] ${redStats.name} löi ja teki ${(redStats.attack - redStats.attack * (blueStats.defence / 100)).toFixed(1)} (${redStats.attack} - ${redStats.attack} * ${(blueStats.defence / 100).toFixed(3)}) vahinkoa. ${blueStats.name}lle jäi ${blueCurrentHp.toFixed(1)} HP:ta.`])
                    
                    if(blueCurrentHp <= 0){
                        blueCurrentHp = 0
                        setBlueHp(blueCurrentHp)
                        clearInterval(fightTimer)

                        setLogs(logs => [...logs, `[${Math.floor(fightDuration * 10) / 10}s] ${redStats.name} voitti!`])
                        setWinner(redStats.name)
                    }
                }
            }, 100)
        }

        if(winner === "")
            Fight(props.blueStats, props.redStats) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    
    return (
        <>
            {
                winner !== "" ? 
                    <div className="text-center">
                        <h3>Voittaja on {winner}!</h3>
                    </div>
                : ""
            }
            <div className="d-flex justify-content-center pt-3">

                <StatsDisplay stats={props.blueStats} hp={blueHp / props.blueStats.hp * 100} isBlue={true} />

                <div className="align-self-end d-grid">
                    <p className="p-3 material-symbols-outlined" title="Health">favorite</p>
                    <p className="p-3 material-symbols-outlined" title="Attack">swords</p>
                    <p className="p-3 material-symbols-outlined" title="Defence">shield</p>
                    <p className="p-3 material-symbols-outlined" title="Attack delay">timer</p>
                </div>

                <StatsDisplay stats={props.redStats} hp={redHp / props.redStats.hp * 100}/>
            </div>

            <div className="d-flex justify-content-center">

                <details className="d-flex justify-content-start">
                    <summary className="text-center pb-4">Lokit</summary>

                    {
                        logs.map((log, index) => (
                            <p key={index}>{log}</p>
                        ))
                    }
                    
                </details>
            </div>
        </>
    )
}
