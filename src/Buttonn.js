import React from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'

function Buttonn({submithandler}) {
    return (
        <div className="button">
        <button className="butt" type="submit" onClick={submithandler}>click here</button> <br/><br/>
        for live updates on corona
    </div>
    )
}

export default Buttonn
