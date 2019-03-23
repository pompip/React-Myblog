import React from 'react'
import { Card, CardContent, Button, CardActions, Typography } from '@material-ui/core'
const styles = {
    card: {
        background: "#555",

    }
}


class Main extends React.Component {

 

    render() {

        const bull = "hello world"
        return (<div>
            <Card style={styles.card} >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
        </Typography>
                    <Typography variant="h5" component="h2">
                        be
          {bull}
                        nev
          {bull}o{bull}
                        lent
        </Typography>
                    <Typography color="textSecondary">
                        adjective
        </Typography>
                    <Typography component="p">
                        well meaning and kindly.
          <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>)
    }
}

export default Main;