import React from 'react'

export default function StatsDisplay(props) {
  return (
    <div>
        <p>{props.stats.name}</p>
        <p>HP: {props.stats.hp || "n/a"}</p>
        <p>ATTACK: {props.stats.attack || "n/a"}</p>
        <p>DEFENCE: {props.stats.defence || "n/a"}</p>
        <p>ATTACK DELAY: {props.stats.attackDelay || "n/a"}</p>

    </div>
  )
}
