import React, { Component } from 'react';

import { Pagination } from 'antd';

import Bread from '../Bread';

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

function showTotal(total) {
    return `Total ${total} items`;
}

export default class Pag extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Bread items={this.props.match} />
                <br />
                <Pagination defaultCurrent={1} total={50} />
                <br />
                <Pagination defaultCurrent={6} total={500} />
                <br />
                <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
                <br />
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <br />
                <Pagination size="small" total={50} />
                <br />
                <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                <br />
                <Pagination size="small" total={50} showTotal={showTotal} />
                <br />
                <Pagination
                    total={85}
                    showTotal={total => `Total ${total} items`}
                    pageSize={20}
                    defaultCurrent={1}
                />
                <br />
                <Pagination
                    total={85}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    pageSize={20}
                    defaultCurrent={1}
                />
            </div>
        );
    }
}