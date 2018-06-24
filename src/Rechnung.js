import React, { Component } from 'react'

class Rechnung extends Component {
    render() {
        return (
            <p className="App-intro">
                Ein kleines Rechenbeispiel: {this.props.zahlA} + {this.props.zahlB} = {this.props.zahlA + this.props.zahlB}
            </p>
        )
    }
}

export default Rechnung