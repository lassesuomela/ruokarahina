import React from 'react'
import HealthBar from "./HealthBar";

export default function StatsDisplay(props) {
  return (
    <>
      <div className="text-center">

        <HealthBar value={props.hp} isBlue={props.isBlue}/>

        <p className="p-3 text-capitalize border-secondary border-bottom border-2">{props.stats.name.split(",")[0]}</p>
        <p className="p-3">{props.stats.hp || "n/a"}</p>
        <p className="p-3">{props.stats.attack || "n/a"}</p>
        <p className="p-3">{props.stats.defence || "n/a"}</p>
        <p className="p-3">{props.stats.attackDelay || "n/a"}s</p>
      </div>
    </>
  )
}
