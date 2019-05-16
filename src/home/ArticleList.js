import React from 'react'
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';
import * as actionCreater from '../store/actionCreater'
const liStyle = {
    listStyle: "none",
}
const ulStyle = {
    margin: "0px",
    padding: "0px"
}
class ArticleList extends React.Component {

    render  () {
        let { list } = this.props;
    
        return <ul style={ulStyle}>{
            list.map(
                (value, index) => {
                    return <li style={liStyle} key={index}>{<ArticleItem article={value} />}   </li>
                }
            )
        }
        </ul>
    }

}
const mapStateToProps = (state) => {
    return {
        list: state.articleList
    }
}
const mapDispath = (dispatch) => {
    return {
        getData: (pageNum) => {
            dispatch(actionCreater.getArticleList(pageNum))
        }
    }
}
export default connect(mapStateToProps, mapDispath)(ArticleList)