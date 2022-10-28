import React, { useEffect } from 'react'

export default function HealthBar(props) {

    useEffect(() => {

    }, [])
    
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width:props.currentHp + "%"}}></div>
        </div>
    )
}
