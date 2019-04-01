import showdown from 'showdown'
import React from 'react'
import './markdown-style.css'

class MarkdownParser extends React.Component {
    constructor(props) {
        super(props)
        this.converter = new showdown.Converter();
        this.converter.setOption('tables', true);
        this.converter.setFlavor('github');
    }



    render() {

        var html = this.converter.makeHtml(this.props.content)
        return (
            <div dangerouslySetInnerHTML={{ __html: html }} className="markdown-body"></div>
        )
    }
}

export default MarkdownParser;