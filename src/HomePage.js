import React from 'react'
import axios from './Http'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import {connect} from 'react-redux'

import { Card, Typography, Button } from 'antd'
const styles = {
    card: {
        // background: "#555",
        // margin: 20,
        // padding:10,
        // maxWidth:1000,

    }
}

const articleListData = {};

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            articleList: [],
            total: 0,
            current: 0,
        }
    }


    getData = (pageNum) => {
        axios.get("/article/page/" + pageNum)
            .then(res => {
                articleListData.articleList = res.data.content;
                this.setState({
                    articleList: res.data.content,
                    total: res.data.total,
                    current: res.data.current,
                })
            }).catch(err => {
                alert(err)
            });
    }

    handleOnClick = (pageNum) => {
        this.getData(pageNum)
    }
    render() {
        return (<div>
            {this.state.articleList.map(
                (value, index) => {
                    return (
                        <Card style={styles.card} key={index}>
                            <Typography variant="h5" component="h2">
                                {value.title}
                            </Typography>
                            <Typography color="textSecondary">
                                {value.createTimestamp}
                            </Typography>
                            <Typography component="p">
                                {value.content}
                            </Typography>
                            <Link to={`/detail/${value.id}`} > <Button type="dashed" > More</Button></Link>
                        </Card>);
                }
            )}
            <Pagination num={this.state.total} current={this.state.current} handleOnClick={this.handleOnClick} />

        </div>)
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.getData(0);
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
}



export default connect(null,null)(HomePage);