import React from 'react';

function Scroll(props){
    return(
        <div style = {{overflowY: 'scroll', height: '80vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll