  
import React, { useEffect,useState } from 'react';
import 'tachyons';
import Axios from 'axios';

function Card(props){
    // const [url, seturl] = useState('')
    // useEffect(()=>{
    //     Axios.get(`https://restcountries.eu/rest/v2/name/${props.country}`).then(res=>{
    //         seturl(res.flag)
    //         console.log(res.flag)
    //     })
    // })
    
    return(
        <div className = 'tc dib br3 pa3 ma1 grow' id="card">
            {/* <img alt="blah" src={url}></img> */}
           <h1 style={{fontSize:"3vw"}}>{props.country.toUpperCase()}</h1>
           <a href={`https://www.google.com/maps/place/${props.country}`} target='_blank' rel="noopener noreferrer" style={{Color:"yellow"}}>see in map</a>
           <h4>Confirmed cases: {props.cases}</h4>
           <h4>Deaths: {props.deaths}</h4>
          
        </div>
    )
}

export default Card;
