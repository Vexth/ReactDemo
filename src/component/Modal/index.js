import React, { Component } from 'react';

import { Modal, Button, Input, InputNumber } from 'antd';

export default class Mod extends React.Component {
    state = { visible: false, value: 0 }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    onChange = (e) => {
        this.setState({
            value: e,
        });
    }
    render() {
        return (
            <div>
                <Input placeholder="Basic usage" value={this.state.value} />
                <br />
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>{this.state.value}</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}