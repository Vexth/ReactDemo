import React, { Component } from 'react';

import { DatePicker } from 'antd';

import Bread from '../Bread';

export default class Page2 extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Bread items={this.props.match} />
                hello, Page2!!!<br />
                <DatePicker />
            </div>
        );
    }
}