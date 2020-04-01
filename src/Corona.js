import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import CoronaTable from './CoronaTable'
import CoronaSearch from './CoronaSearch'
import Scroll from './Scroll'
import './Corona.css'
import Particlejs from './Particlejs'
import Select from './Select'
import { trackPromise} from 'react-promise-tracker';
import Spinner from './Spinner'
import Loader from "react-loader-spinner";

function Corona() {
    const [istable,settable]=useState(false)
    const [data, setdata] = useState([])
    const [filtereddata, setfiltereddata] = useState([])
    const [loader,setloader]=useState(false)
    let total=0
    useEffect(()=>{
        trackPromise(fetch("https://shenoy-covid19-api.herokuapp.com/count").then(res=>{
            //  console.log(res)
             return res.json()}
    ).then(reesdata=>{setdata(reesdata)
    setfiltereddata(reesdata)
    setloader(true)
       }))
    //     Axios.get("https://shenoy-covid19-api.herokuapp.com/").then(res=>{
    //         console.log(res)
    //         setdata(res.data.rawData) 
    //         setfiltereddata(res.data.rawData)
            
    // }
    // ).catch(err=> console.log(err))
    }
    ,[])
    
    const submithandler=()=>{
        console.log("corona alert")
       
        if(data){
        settable(true)
        
        }
        
    }


    const sorter=(event)=>{
        console.log(event.target.value)
        if(data){
            if(event.target.value==='death'){
            let byDeath=data.slice(0)
            byDeath.sort((a,b)=>{
                if(a.totalDeaths&&b.totalDeaths)
                return parseInt(b.totalDeaths.replace(',',''))-parseInt(a.totalDeaths.replace(',',''))
            })
            
            setfiltereddata(byDeath)
            // console.log('deaathhhhhh')
        }
        else if(event.target.value==='cases'){
            let byCases=data.slice(0)
            byCases.sort((a,b)=>{
                if(a.totalCases&&b.totalCases)
                return parseInt(b.totalCases.replace(',',''))-parseInt(a.totalCases.replace(',',''))
                return 
            })
            setfiltereddata(byCases)
            
        }
        else if(event.target.value==='name'){
            let byName=data.slice(0)
            byName.sort((a,b)=>{
                if(a.country&&b.country){
                let place1=a.country.toLowerCase()
                let place2=b.country.toLowerCase()
                return place2<place1 ? 1 : place2>place1 ?-1:0
                }
                return
            })
            setfiltereddata(byName)
            
        }
        // else if(event.target.value==='distance'){
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition((pos)=>{
        //             console.log(pos.coords.latitude,pos.coords.longitude)
        //         });
        //       } 
        // }
        }
    }

    const change=(e)=>{
       let newdata={}
        newdata=data.filter((a,i)=>{
            if(a['country'].toLowerCase().includes((e.target.value).toLowerCase())){
                return a
            }
            return 
        })
        console.log(newdata)
        setfiltereddata(newdata)
        return
    }
   
    return (
       !istable?<><div className="index"><marquee scrollamount="8" behavior="scroll" direction="left" style={{color:"white",marginTop:"30px",fontSize:"1.5vw"}}>*****Warning : Dont go out bitches......*****</marquee>
       <h1 className="h" style={{marginTop:'12vw'}}>COVID-19 Stats</h1></div>
       <div className="index"> {loader?<div className="buttonHolder"><button className="butt" type="submit" onClick={submithandler}>click here</button></div>: <div className="spinner"><Loader type="ThreeDots" color="#2BAD60" height={100} width={100} /></div>}
       <Particlejs />
       </div></>:
       <div><CoronaSearch change={change} data={data}/><Select sorter={sorter}/><Scroll><CoronaTable data={filtereddata}/></Scroll></div>
       
    )
}


export default Corona
