import React, { Component } from 'react';
import { Countries } from './countries/Countries';
import { decisions } from '../customer-specific/Decisions';

export class Main extends Component {

  componentDidMount() {}

  logIn() {
    decisions.setCustomer(2);
    console.log('log in');
  }

  render() {
    const id = decisions.get('CUSTOMER_ID', '[default id]');
    const footer = decisions.get('COUNTRIES_FOOTER', null);

    return (
        <div>
          <h1>Customer ID: {id}</h1>
          <Countries footer={footer}/>
        </div>
    );
  }
}
