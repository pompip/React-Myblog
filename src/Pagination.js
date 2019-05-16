import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import {connect } from 'react-redux'
import * as actionCreater from './store/actionCreater'

const Pagination = (props) => {
    let arr = [];
    for (let i = 0; i < props.num; i++) {
        arr.push(i);
    }
    
    return (
        <div style={{ marginTop: 10 }}>{
            arr.map((item, index) => {
                return (
                    <Button key={index} color="primary" variant={props.current === index ? "contained" : "outlined"}
                            onClick={() => { props.getData(index) }}
                     >
                     {item + 1}
                    </Button>
                )
             
            })
        }
        </div>

    )
}

const mapState = (state)=>{
    return{
        num: state.total,
        current: state.current
    }
}

const mapDispath = (dispatch)=>{
    return {
        getData: (pageNum) => {
            dispatch(actionCreater.getArticleList(pageNum))
        }
    }
}
export default connect(mapState,mapDispath)(Pagination);