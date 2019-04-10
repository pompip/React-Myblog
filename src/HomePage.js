import React from 'react'
import { Card, CardContent, Button, CardActions, Typography } from '@material-ui/core'
import axios from './Http'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
const styles = {
    card: {
        // background: "#555",
        marginTop: 10,

    }
}

const articleListData = {};

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.getData(0);
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
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {value.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {value.createTimestamp}
                                </Typography>
                                <Typography component="p">
                                    {value.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to={`/detail/${value.id}`} > More</Button>
                            </CardActions>
                        </Card>);
                }
            )}
            <Pagination num={this.state.total} current={this.state.current} handleOnClick={this.handleOnClick} />

        </div>)
    }
}

export default HomePage