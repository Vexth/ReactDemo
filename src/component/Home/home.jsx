import React, { Component } from 'react';

const HelloMessage = (list) => (
    <ul>
        {
           [...list.items].map((result, index) => (<li key={ index }>{ result }</li>))
        }
    </ul>
)

export default HelloMessage;