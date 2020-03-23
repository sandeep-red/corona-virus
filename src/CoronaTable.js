import React from 'react';
import Card from './Card';

function CoronaTable({data}) {   
    let s=0
    data.map((a,i)=>{
        s=s+parseInt(a['Deaths'])
        return null
    })
    console.log(s)
    let d=data[0]
    console.log(d)
    if(d)
    console.log(d['Last Update'])
        // s=data.map((a,i)=>{
        //    return parseInt(a['Deaths'])
            
        // })
        
        // console.log(s.reduce((value,total)=>{
        //         return value+total
        // },0))
        // console.log(s)
    return(
        <div>
        {
            data.map((a,i)=>{
                return(
                    <Card key = {i}
                        country = {data[i]['Country/Region']} 
                        region = {data[i]['Province/State']}
                        cases = {data[i]['Confirmed']} 
                        deaths = {data[i]['Deaths']} 
                        latitude = {data[i]['Latitude']}
                        longitude = {data[i]['Longitude']}
                     />
                ); 
            })
        }
        </div>
    );
}
export default CoronaTable
