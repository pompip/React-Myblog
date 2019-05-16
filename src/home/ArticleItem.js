import React from 'react'
import {Card,Button,Typography} from 'antd'
import {Link} from 'react-router-dom'
export default (props) => {
    var value = props.article;
    return <Card>
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
    </Card>
}