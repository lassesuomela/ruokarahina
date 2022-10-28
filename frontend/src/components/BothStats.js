import React from 'react'
import StatsDisplay from "./StatsDisplay";

export default function BothStats(props) {

    return (
        <div>
            <StatsDisplay stats={props.blueStats}/>
            <StatsDisplay stats={props.redStats}/>
        </div>
    )
}
