import React, { Component } from 'react';

import { Button } from 'antd';

import Bread from '../Bread';

import { Get, Post } from '../../server';

export default class But extends Component {
    state = {  }
    get = () => {
        Get();
    }

    post = () => {
        Post();
    }
    render() {
        return (
            <div>
                <Bread items={this.props.match} />
                
                <Button onClick={this.get} type="primary">Primary</Button>
                <Button onClick={this.post}>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}