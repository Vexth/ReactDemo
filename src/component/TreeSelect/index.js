import React, { Component } from 'react';

import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;

const treeData = [{
    label: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
        label: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
    }, {
        label: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
    }],
}, {
    label: 'Node2',
    value: '0-1',
    key: '0-1',
}];

export default class Tree extends Component {
    state = {
        value: undefined,
    }
    onChange = (value) => {
        console.log(arguments);
        this.setState({ value });
    }
    render() {
        return (
            <div>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="parent 1" title="parent 1" key="0-1">
                        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                            <TreeNode value="leaf1" title="my leaf" key="random" />
                            <TreeNode value="leaf2" title="your leaf" key="random1" />
                        </TreeNode>
                        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>

                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    multiple
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="parent 1" title="parent 1" key="0-1">
                        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                            <TreeNode value="leaf1" title="my leaf" key="random" />
                            <TreeNode value="leaf2" title="your leaf" key="random1" />
                        </TreeNode>
                        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>

                <TreeSelect
                    style={{ width: 300 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    placeholder="Please select"
                    treeDefaultExpandAll
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
