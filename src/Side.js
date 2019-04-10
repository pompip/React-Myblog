import React from 'react'
import { Avatar, Typography, Link, Card, CardContent } from '@material-ui/core';

const libName = ["showdown.js", "bootstrap4", "jquery"]
const sideStyle ={
    position:"sticky",
    top:"3em"
}

function Side(props) {
    const avatarSrc = "http://java.asuscomm.com:9000/api/static/img/zxq.jpg"
    const githubSrc = "https://guides.github.com/features/mastering-markdown/"
    return (
        <Card style ={sideStyle}>
            <CardContent>
                <Avatar src={avatarSrc} />
                <div style={{flow:"left"}}>
                    <Typography variant="h5">关于我...</Typography>
                    <Typography variant="body1">本人太丑...
                        头像是老婆...
                    作为程序员，最值得夸赞的成就是取到现在的老婆</Typography>
                </div>
                <Typography variant="h5">一些链接</Typography>
                <Typography variant="body1"><Link href={githubSrc}>GitHub Flavored Markdown</Link></Typography>

                <Typography variant="h5">开源库</Typography>

                {libName.map((item, index) => {
                    return (<Typography variant="body1" key={index}>{item}</Typography>)
                })}
            </CardContent>
        </Card>
    );
}

export default Side;