import React from 'react'
import MarkdownParser from './MarkdownParser';
import Http from './Http';
import {Button,Input,Modal } from 'antd'

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
        const {TextArea} = Input;
        return (
            <div>
                <div >
                    
                    <Button onClick={this.handleButtonClick}>预览</Button>
                    <Button onClick={this.saveMarkdown}>保存</Button>
                </div>
                <TextArea multiline variant="outlined" rows="30" style={this.styles} onChange={this.handleTextChange}></TextArea>
                <Modal scroll="paper" 
                fullWidth 
                visible={this.state.open} 
                onClose={this.handleDialogClose}
                title={'预览:'}
                footer={[
                    <Button onClick={this.handleSaveClick}>保存</Button>,
                    <Button onClick={this.handleDialogClose}>取消</Button>
                ]}
                >
                    <MarkdownParser content={this.state.inputContent} />
                    
                  
           
                </Modal>
            </div>
        )
    }
}

export default MarkdownEditer;