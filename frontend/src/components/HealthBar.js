import React from 'react'

export default function HealthBar(props) {
    
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width:props.value + "%"}}></div>
        </div>
    )
}
