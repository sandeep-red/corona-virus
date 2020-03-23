  
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
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow'>
            {/* <img alt="blah" src={url}></img> */}
           <h1>{props.region}({props.country})</h1>
           <a href={`https://www.google.com/maps/search/${props.latitude},${props.longitude}?sa=X&ved=2ahUKEwjljtTl3K3oAhUm73MBHcF9CWoQ8gEwAHoECBkQAQ`} style={{Color:"yellow"}}>see in map</a>
           <h2>Confirmed cases: {props.cases}</h2>
           <h4>Deaths: {props.deaths}</h4>
        </div>
    )
}

export default Card;
