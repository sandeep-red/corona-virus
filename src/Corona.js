import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import CoronaTable from './CoronaTable'
import CoronaSearch from './CoronaSearch'
import Button from './Buttonn'
import Scroll from './Scroll'
function Corona() {
    const [istable,settable]=useState(false)
    const [data, setdata] = useState([])
    const [filtereddata, setfiltereddata] = useState([])
    useEffect(()=>{
        Axios.get("https://coronavirus.m.pipedream.net/").then(res=>{
            setdata(res.data.rawData) 
            setfiltereddata(res.data.rawData)
            
    }
    ).catch(err=> console.log(err))
    }
    ,[])
    const submithandler=()=>{
        console.log("corona alert")
        console.log(data)
        if(data){
        settable(true)
        console.log(data)
        }
        
    }

    const change=(e)=>{
       let newdata={}
        newdata=data.filter((a,i)=>{
            if(a['Country/Region'].toLowerCase().includes(e.target.value)||a['Province/State'].toLowerCase().includes(e.target.value)){
                return a
            }
        })
        console.log(newdata)
        setfiltereddata(newdata)
    }
    return (
       !istable?<div><marquee behavior="scroll" direction="left" style={{color:"yellow",marginTop:"30px"}}>*****Warning : Dont go outside bitches......*****</marquee>
       <Button submithandler={submithandler}/></div>:<div><CoronaSearch change={change}/><Scroll><CoronaTable data={filtereddata}/></Scroll></div>
      
    )
}


export default Corona
