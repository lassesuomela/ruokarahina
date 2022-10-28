import React from 'react'

export default function StatsDisplay(props) {
  return (
    <div className="text-center">
      <p className="p-3 text-capitalize border-secondary border-bottom border-2">{props.stats.name}</p>
      <p className="p-3">{props.stats.hp || "n/a"}</p>
      <p className="p-3">{props.stats.attack || "n/a"}</p>
      <p className="p-3">{props.stats.defence || "n/a"}</p>
      <p className="p-3">{props.stats.attackDelay || "n/a"}s</p>
    </div>
  )
}
