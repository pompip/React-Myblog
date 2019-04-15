import React from 'react'
import Http from './Http';
import { Card } from 'antd';
import MarkdownParser from './MarkdownParser';

class Detail extends React.Component {

    constructor(props) {
        super(props)
        let id = props.match.params.id
        this.getData(id);
    }

    state = {
        article: {}
    }

    getData = (id) => {
        Http.get("/article/detail/" + id).then(res => {
            this.setState({ article: res.data })
        }).catch(err => {
            console.log(err)
        })
    };

    render() {
        const article = this.state.article;
        return (
            <Card>

                <h3 >{article.title}</h3>
                <div >{article.updateTimestamp}</div>
                <MarkdownParser content={article.content} />

            </Card >
        )
    }
}
export default Detail;