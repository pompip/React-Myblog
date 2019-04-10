import React, { Fragment } from 'react'

class Game extends React.Component {
    render() {
        return (
            <Fragment>
        
            <div>
                <Square value={1}></Square>
                <Square value={1}></Square>
                <Square value={1}></Square>
            </div>
            <div>
                <Square value={1}></Square>
                <Square value={1}></Square>
                <Square value={1}></Square>
            </div>
            <div>
                <Square value={1}></Square>
                <Square value={1}></Square>
                <Square value={1}></Square>
            </div>
            </Fragment>
          
        )
    }
}

class Square extends React.Component {

    state ={
        value:" "
    }
    render() {
        return <button style={{width:50,height:50}} onClick={()=>{
            this.setState({value:"X"})
        }}>{this.state.value}</button>
    }
}

export default Game;