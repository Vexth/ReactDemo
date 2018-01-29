import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout, Icon, Breadcrumb, Avatar, Popover, Button } from 'antd';
const { Header, Footer, Content } = Layout;

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

import But from './Button';
import Pag from './Pagination'
import Ste from './Steps'
import Cas from './Cascader'
import Tab from './Table'
import Tree from './TreeSelect'
import Mod from './Modal'

import { update, remove } from '../server'

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
export default class Conter extends Component {
    state = {};
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.props.item.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.item.toggle}
                    />

                    <Popover content={content} title="Title" trigger="click">
                        <Button>
                        </Button>
                    </Popover>
                    <Button onClick={remove}>删除</Button><Button onClick={update}>修改</Button>
                    <Avatar style={{ margin: '15px 24px 0 0', float: 'right' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/page3/home1" component={Home} />
                            <Route exact path="/page3/home2" component={Home} />
                            <Route path="/page1" component={Page1} />
                            <Route path="/page2" component={Page2} />
                            
                            <Route path="/Button" component={But} />
                            <Route path="/Pagination" component={Pag} />
                            <Route path="/Steps" component={Ste} />
                            <Route path="/Cascader" component={Cas} />
                            <Route path="/Table" component={Tab} />
                            <Route path="/TreeSelect" component={Tree} />
                            <Route path="/Modal" component={Mod} />
                            
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    ©2018 Created by Vexth
                </Footer>
            </Layout>
        );
    }
}
