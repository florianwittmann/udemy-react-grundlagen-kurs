import React, { Component } from 'react'

class Rechnung extends Component {

    constructor() {
        super();
        this.state = { zahlB: 60 }
    }

    render() {
        return (
            <p className="App-intro">
                Ein kleines Rechenbeispiel: {this.props.zahlA} + {this.state.zahlB} = {this.props.zahlA + this.state.zahlB}
            </p>
        )
    }
}

export default Rechnung