import React, { Component } from 'react';

import Bread from '../Bread';

export default class Page1 extends Component {
    state = {}
    render() {
        return (
            <div>
                <Bread items={this.props.match} />
                Hello,Page1!
            </div>
        )
    }
}