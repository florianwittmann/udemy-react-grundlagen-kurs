import React, { Component } from 'react';

class Eintrag extends Component {
    render() {
        return (<li>{this.props.todo.titel}</li>);
    }
}

export default Eintrag;