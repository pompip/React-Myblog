import React from 'react'
import { Card, CardContent, Button, CardActions, Typography } from '@material-ui/core'
import axios from './Http'
import {Link} from 'react-router-dom'
const styles = {
    card: {
        // background: "#555",
        marginTop: 10,

    }
}


class HomePage extends React.Component {

    constructor() {
        super();
        this.getData();
        this.state = {
            articleList: []
        }
    }


    getData = () => {
        axios.get(
            '/article/all'
        ).then(res => {
            this.setState({
                "articleList": res.data
            })
        }).catch(err => {
            alert(err)
        });
    }

    render() {
        return (<div>
            {this.state.articleList.map(
                (value, index) => {
                    return (<Card style={styles.card} key={index}>

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

        </div>)
    }
}

export default HomePage