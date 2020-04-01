import React from 'react'
import './Corona.css'

function Select({sorter}) {
    return (
        <div style={{justifyContent:"flex-end",display:"flex",marginRight:"20px"}}>
        <label style={{color:"white",fontSize:"1.7vw",marginTop:'0.7vw',marginRight:"0.4vw"}} htmlFor="sort">Sort by:</label>
            <select className='select-css' id='select' onClick={sorter}>
                <option value='cases'>by cases</option>
                <option value='death'>by deaths</option>
                <option value='name'>by name</option> 
            </select>
        </div>
    )
}

export default Select
