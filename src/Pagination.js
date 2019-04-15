import React from 'react'
import { Button  } from 'antd';

const Pagination =(props)=>{
    let arr = [];
    for (let i=0;i<props.num;i++){
        arr.push(i);
    }


    return(
    
            <div style={{marginTop:10}}>
        
        {
            arr.map((item,index)=>{
                return (<Button color="primary" variant={props.current===index?"contained":"outlined"} key={index} onClick={()=>{props.handleOnClick(index)}}>{item+1}</Button>);
            })
        }
        </div>
  
    )
}
export default Pagination;