import React from 'react'
import { Button, RootRef } from '@material-ui/core';

const Pagination =(props)=>{
    let arr = [];
    for (let i=0;i<props.num;i++){
        arr.push(i);
    }


    return(
        <RootRef>
            <div style={{marginTop:10}}></div>
        
        {
            arr.map((item,index)=>{
                return (<Button color="primary" variant={props.current===index?"contained":"outlined"} key={index} onClick={()=>{props.handleOnClick(index)}}>{item+1}</Button>);
            })
        }
        </RootRef >
    )
}
export default Pagination;