import React, { Component } from 'react';

export class Clock extends Component {

    componentWillMount() {
        this.setState({seconds: 820 });
        setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
        }, 1000);
    }

    render() {
        return <small style={{fontStyle: 'italic'}} title="seconds since last update">{this.state.seconds} s</small>
    }
}