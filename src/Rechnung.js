import React, { Component } from "react";

class Rechnung extends Component {
  constructor() {
    super();
    this.state = { zahlB: 60 };
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          Ein kleines Rechenbeispiel: {this.props.zahlA} + {this.state.zahlB} ={" "}
          {this.props.zahlA + this.state.zahlB}
        </p>
        <button onClick={this.erhoeheUmZehn}>+ 10</button>
      </div>
    );
  }

  erhoeheUmZehn = () => {
    this.setState(prevState => ({ zahlB: prevState.zahlB + 10 }));
  };
}

export default Rechnung;
