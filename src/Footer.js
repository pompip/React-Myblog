import React from 'react'

const footerStyle ={
    bottom:-1000,
    position:"sticky"
}

const Footer =()=>{
    return(
        <div style={footerStyle}>
        i am footer!!!
        <a href={'http://baidu.com'}>baidu</a>
        </div>
    )
}

export default Footer;