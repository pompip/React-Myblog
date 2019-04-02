import React from 'react'
import { Link } from '@material-ui/core';

const footerStyle ={
    bottom:-1000,
    position:"sticky"
}

const Footer =()=>{
    return(
        <div style={footerStyle}>
        i am footer!!!
        <Link href={'http://baidu.com'}>baidu</Link>
        </div>
    )
}

export default Footer;