import React, { Component } from 'react';
import "./Eintrag.css";

class Eintrag extends Component {
    render() {
        return (<li className={this.props.todo.erledigt ? "Eintrag Erledigt" : "Eintrag"}>{this.props.todo.titel}</li>);
    }
}

export default Eintrag;