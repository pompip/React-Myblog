import React from 'react'
import { TextField, Paper, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import MarkdownParser from './MarkdownParser';
import Http from './Http';

class MarkdownEditer extends React.Component {

    styles = {
        width: "100%",
    }

    state = {
        open: false,
        inputContent: ""
    }
    handleTextChange = (event) => {
        this.setState({
            inputContent: event.target.value
        })
    }
    handleButtonClick = () => {
        this.setState({
            open: true,
        })
    }
    handleDialogClose = () => {
        this.setState({
            open: false,
        })
    }

    handleSaveClick = (event) => {
        this.saveMarkdown()
    }

    saveMarkdown = () => {
        Http.post("/article/save", 
            'content='+ this.state.inputContent,
        )
            .then((res) => {

            }).catch((err) => {
                alert(err)
            });
    }
    render() {

        return (
            <Paper>
                <div >
                    
                    <Button onClick={this.handleButtonClick}>预览</Button>
                    <Button onClick={this.saveMarkdown}>保存</Button>
                </div>
                <TextField multiline variant="outlined" rows="30" style={this.styles} onChange={this.handleTextChange}></TextField>
                <Dialog scroll="paper" fullWidth open={this.state.open} onClose={this.handleDialogClose}>
                    <DialogTitle>预览:</DialogTitle>
                    <DialogContent>
                        <DialogContentText><MarkdownParser content={this.state.inputContent} /></DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSaveClick}>保存</Button>
                        <Button onClick={this.handleDialogClose}>取消</Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        )
    }
}

export default MarkdownEditer;