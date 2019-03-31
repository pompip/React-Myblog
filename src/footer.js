import React from 'react'
import { Link } from '@material-ui/core';

class Footer extends React.Component{

    render(){
        return (
            <div style={{bottom:0,top:'auto',position:"fixed"}}>
                i am footer!!!
                <Link href={'http://baidu.com'}>baidu</Link>
            </div>
        )
    }
}
export default Footer;