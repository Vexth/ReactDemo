import React, { Component } from 'react';

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

import Bread from '../Bread';

const steps = [{
    title: '第一步',
    content: '第一步',
}, {
    title: '第二步',
    content: '第二步',
}, {
    title: '第三步',
    content: '第三步',
}];

export default class Ste extends Component {

    state = {
        current: 0,
    }
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <Bread items={this.props.match} />
                <br />
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[this.state.current].content}</div>
                <div className="steps-action">
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('提交成功!')}>Done</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    }
                </div>
            </div>
        );
    }
}
