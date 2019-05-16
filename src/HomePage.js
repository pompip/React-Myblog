import React from 'react'

import Pagination from './Pagination'
import { connect } from 'react-redux'

import ArticleList from './home/ArticleList';

import { Route } from 'react-router-dom'
import * as actionCreater from './store/actionCreater'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <ArticleList />
                <div onClick={this.props.doClick}>{this.props.hello} hello1</div>
                <Pagination />
            </div>)
    }
    componentDidMount() {
        this.props.getData(0);
    }

}

const mapStateToProps = (state) => {
    return {
        hello: state.test,
        num: state.total,
        current: state.current
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        doClick: () => {
            dispatch(actionCreater.hello())
        },
        getData: (pageNum) => {
            dispatch(actionCreater.getArticleList(pageNum))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(HomePage);