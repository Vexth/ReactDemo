import React, { Component } from 'react';

import { Icon, Breadcrumb } from 'antd';

export default class Bread extends Component {
    state = {  }
    ArrFilter = () => {
        let arr = [...(new Set(this.props.items.path.split('/')))];
        return arr.filter(function (ele, idx, arr) {
            return idx !== 0;
        })
    }
    render() {
        let arr = this.ArrFilter();
        return (
            <Breadcrumb>
                {
                    arr[0] === undefined ? (<Breadcrumb.Item>Home</Breadcrumb.Item>) : arr.map((res, key) => (<Breadcrumb.Item key={key}>{res ? res : "Home"}</Breadcrumb.Item>))
                }
            </Breadcrumb>
        );
    }
}
