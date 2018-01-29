import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout, Icon } from 'antd';
const { Sider } = Layout;

import Nav from '../component/nav'
import Conter from '../component';

import { Helloworld } from '../server';

export default class GetRouter extends Component {
    state = { collapsed: false, }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {

        // Helloworld().then(res => console.log(res))
        return (
            <Router>
                <Layout style={{ background: '#fff' }}>
                    <Nav item={this.state.collapsed} />
                    <Conter item={this}/>
                </Layout>
            </Router>
        );
    }
}