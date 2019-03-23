import React from 'react'
import { relative } from 'path';
class Footer extends React.Component{

    render(){
        return (
            <div style={{bottom:0,top:'auto',position:"fixed"}}>
                i am footer!!!
            </div>
        )
    }
}
export default Footer;