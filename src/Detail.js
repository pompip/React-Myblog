import React from 'react'
import Http from './Http';
import { Card, CardContent } from '@material-ui/core';

class Detail extends React.Component{

    constructor(props){
        super(props)
        let id = props.match.params.id 
        this.getData(id);
    }

 state ={
    article:{}
}

 getData= (id)=>{
    Http.get("/article/"+id).then(res=>{
        this.setState({article:res.data})
    }).catch(err=>{
        console.log(err)
    })
};

 render() {
   
    const article = this.state.article;
    return (
        <Card>
            <CardContent >
                <h3 >{article.title}</h3>
                <div >{article.updateTimestamp}</div>
                <div  >{article.content}</div>
                <div>hello world</div>
            </CardContent>
        </Card >
    )
}
}
export default Detail;