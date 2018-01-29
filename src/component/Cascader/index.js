import React, { Component } from 'react';
import { Cascader } from 'antd';

import Bread from '../Bread';

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
            }, {
                value: 'xiasha',
                label: 'Xia Sha',
                disabled: true,
            }],
        }],
    }, 
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua men',
            }],
        }],
    }
];

function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
}

export default class Cas extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Bread items={this.props.match} />
                <Cascader
                    options={options}
                    onChange={onChange}
                    placeholder="Please select"
                    showSearch
                />
            </div>
        );
    }
}