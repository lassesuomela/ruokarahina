import React from 'react'

export default function HealthBar(props) {
    
    return (
        <div className="progress">
            <div className={"progress-bar-striped progress-bar-animated " + (props.isBlue ? "bg-primary" : "bg-danger")} role="progressbar" style={{width:props.value + "%"}}></div>
        </div>
    )
}
