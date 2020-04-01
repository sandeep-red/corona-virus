import React,{useState} from 'react';
import Card from './Card';
import './Corona.css';
import Info from './Info'
import Modal from 'react-bootstrap/Modal'
function CoronaTable({data}) {   
    
    let s=0

    const [extraData, setData] = useState([]);
    // const [extra, setExtra] = useState(false);
    const [show, setShow] = useState(false);
    // const keys=Object.keys(data[0])
    // data.map((a,i)=>{
    //     s=s+parseInt(a['Deaths'])
    //     return null
    // })
    // console.log(s)
    // let d=data[0]
    // console.log(d)
    // if(d)
    // console.log(keys)
        // s=data.map((a,i)=>{
        //    return parseInt(a['Deaths'])
            
        // })
        
        // console.log(s.reduce((value,total)=>{
        //         return value+total
       
        let key
         
      key=Object.keys(data[0])
      
    return(
        <div className="cardarea">
        {
            data.map((a,i)=>{
                return(
                   <button value={a} key = {i} onClick={()=>{
                        setData(a);
                        // setExtra(true);
                        setShow(true)
                    }}><Card key = {i}
                        country = {data[i]['country']} 
                        cases = {data[i]['totalCases']} 
                        deaths = {data[i]['totalDeaths']}
                     /></button>                
    
     
                ); 
            })
        }
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        
        <list className="list">{
           
                    key.map((e)=>{
                        
                        if(e&&extraData[e])
                        return <ul >{e.toUpperCase()} : {extraData[e].toUpperCase()}</ul>
                        
                    })
                }
                </list>
        </Modal.Body>
      </Modal>
        </div>
    );  
    }
    

export default CoronaTable
