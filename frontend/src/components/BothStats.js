import React from 'react'
import StatsDisplay from "./StatsDisplay";

export default function BothStats(props) {

    return (
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
    )
}
