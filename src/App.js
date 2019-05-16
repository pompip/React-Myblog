import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './Navigation';
import MarkdownEditer from './MarkdownEditer'
import Side from './Side'
import HomePage from './HomePage'
import Detail from './Detail'

import Game from './Game'

import { Layout } from 'antd'

import { Provider } from 'react-redux';
import store from './store'



class App extends Component {
  render() {
    const {
      Header, Footer, Sider, Content,
    } = Layout;
    return (
      <Provider store={store}>


        <BrowserRouter >
          <Layout >
            <Layout>
              <Header style={{ background: "#fff" }}>
                <Navigation />
              </Header>
              <Content>
              <Route path="/detail/:id" component={Detail} />
                <Route path="/game" component={Game} />
                <Route exact path='/' component={HomePage} />
                <Route path='/markdown' component={MarkdownEditer} />
              </Content>
              <Footer>Footer</Footer>
            </Layout>
            <Sider style={{ background: "#fff" }} breakpoint="lg"
              collapsedWidth="0">
              <Side />
            </Sider>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
