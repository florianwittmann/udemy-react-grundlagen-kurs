import React, { Component } from 'react';
import "./Eintrag.css";

class Eintrag extends Component {
    render() {
        return (<li className="Eintrag">{this.props.todo.titel}</li>);
    }
}

export default Eintrag;