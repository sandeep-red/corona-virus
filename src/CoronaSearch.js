import React from 'react'

function CoronaSearch({change}) {
    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <input type="text" name="search" id="search" placeholder="search" onChange={change}/>
        </div>
    )
}

export default CoronaSearch
