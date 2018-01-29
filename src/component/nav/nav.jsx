import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const SubMenuItem = (result) => (
    <SubMenu key={result.key} title={<span><Icon type={result.Icon} />{result.title}</span>}>
        {
            result.sub.map(res => !res.sub ? MenuItem(res) : SubMenuItem(res))
        }
    </SubMenu>
);

const MenuItem = (result) => (
    <Menu.Item key={result.key}>
        <Link to={result.path}>
            <Icon type={result.Icon} />
            <span className="nav-text">{result.title}</span>
        </Link>
    </Menu.Item>
)

const NavList = (list) => (
    <Menu
        mode="inline"
        defaultSelectedKeys={['sub1']}
        // defaultOpenKeys={['1']}
        style={{ height: '100%' }}
    >
        {
            [...list.items].map((result) => {
                return !result.sub ? MenuItem(result) : SubMenuItem(result)
            })
        }
    </Menu>
);

export default NavList;