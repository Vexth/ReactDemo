import React, { Component } from 'react';

import HelloMessage from './home';
import Bread from '../Bread';

export default class Hello extends Component {
    state = {
        list: ['JavaScript', 'Java', 'Node', 'Python']
    }
    list = () => {
        let list = ['JavaScript', 'Java', 'Node', 'Python']
        return list
    }
    render() {
        return (
            <div>
                <Bread items={this.props.match}/>
                Hello,React!
                <HelloMessage items={this.list()}/>
            </div>
        )
    }
}