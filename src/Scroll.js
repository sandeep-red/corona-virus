import React from 'react';

function Scroll(props){
    return(
        <div style = {{overflowY: 'scroll', border: '0.5px solid black', height: '90vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll