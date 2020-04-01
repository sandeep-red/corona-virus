import React from 'react'

function CoronaSearch({change,data}) {
    let total=0
    data.map((e)=>{
        
        if(e['totalDeaths']){
            total+=parseInt(e['totalDeaths'].replace(',',''))
            
        }
        return null
    })
   
    return (
        <div style={{textAlign:"center",marginTop:"0px"}}>
            <input type="text" name="search" id="search" placeholder="search" onChange={change}/>
            <marquee scrollamount="10" behavior="scroll" direction="left" style={{color:"red",marginTop:"5px",fontSize:"20px"}}>*******************************death toll is {total}*******************************</marquee>
        </div>
    )
}

export default CoronaSearch
