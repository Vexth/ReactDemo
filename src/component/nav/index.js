import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
const { Sider } = Layout;

import NavList from './nav';

import { MUES } from '../../router/mues';

export default class Nav extends Component {
    state = { }
    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                collapsed={this.props.item}
                style={{ background: '#fff' }}
                trigger={null}
                collapsible
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
                <div className="logo">
                    <h3>Vexth</h3>
                </div>
                <NavList items={MUES} />
            </Sider>
        );
    }
}