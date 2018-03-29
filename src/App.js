import React, { Component } from 'react';
import './App.css';
import { decisions } from './customer-specific/Decisions';
import { Main } from './core/Main';
import { Input, Button, Row, Col, Spin } from 'antd';
import '../node_modules/antd/dist/antd.min.css';

/**
 * use webpack
 * how anything can be changed anywhere.
 * how testable it is? (not perfect ofc)
 * how does it impact eg. redux?
 */
class App extends Component {
  consturctor() {
    this.name = '';
  }

  componentWillMount() {
    this.setState({
      isLoading: false,
      isLoggedIn: false
    });
  }

  handelNameChange = (evt) => {
    this.name = evt.target.value;
    console.log(this.name);
  }

  logIn = () => {
    if (this.name === '1' || this.name === '2') {
      decisions.setCustomer(parseInt(this.name, 10)).then(()=> {
          this.setState({ isLoggedIn: true })
      });
      this.setState({ isLoading: true });
    } else {
      alert('allowed names are: 1, 2');
    }
  }

  render() {
    return (
      <div className="App">
      {
        this.state.isLoggedIn ?
        <Main/> :
          <Row style={{ marginTop: '4em' }}>
            <Col span={8}></Col>
            <Col span={8}>
              <Row>
                <Col span={8} style={{textAlign: 'right'}}>Name:</Col>
                <Col span={16}><Input placeholder="Username" onChange={this.handelNameChange} style={{marginLeft: '1em'}}/></Col>
              </Row>
              <Row style={{marginTop: '0.2em'}}>
                <Col span={8} style={{textAlign: 'right'}}>Password:</Col>
                <Col span={16}><Input placeholder="Password" type="password" style={{marginLeft: '1em'}}/></Col>
              </Row>
              <Button onClick={this.logIn} style={{marginTop: '1em'}}>Log in</Button>
              { this.state.isLoading ?
                <Spin/>
                : null
              }
            </Col>
            <Col span={8}></Col>
          </Row> 
      }
      </div>
    );
  }
}

export default App;
