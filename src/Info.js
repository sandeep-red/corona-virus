import React from 'react';
import './Corona.css'

function Info({data}) {
    console.log(data)
    let key=Object.keys(data)
    return (
        <div className = "infobox">
            <div className="innerinfo">
              <list className="list">{
                    key.map((e)=>{
                        return <ul>{e.toUpperCase()} : {data[e].toUpperCase()}</ul>
                        
                    })
                }
                </list>
            </div>
        </div>
    )
}

export default Info
