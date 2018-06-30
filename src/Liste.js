import React, { Component } from "react";
import Eintrag from "./Eintrag";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: [],
      neuerEintrag: ""
    };
  }

  eintragClickHandler = eintrag => {
    this.setState(prevState => ({
      liste: prevState.liste.map(
        prevEintrag =>
          prevEintrag.id === eintrag.id
            ? { ...prevEintrag, erledigt: !prevEintrag.erledigt }
            : prevEintrag
      )
    }));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json =>
        json.map(eintrag => ({
          titel: eintrag.title,
          erledigt: eintrag.completed,
          id: eintrag.id
        }))
      )
      .then(liste => this.setState({ liste: liste }));
    console.log("Hallo - Liste wurde gemounted");
  }

  componentWillUnmount() {
    console.log("Hallo - Ich werde jetzt ungemounted");
  }

  handleChange = event => {
    this.setState({ neuerEintrag: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const eintrag = {
      titel: this.state.neuerEintrag,
      erledigt: false,
      id: this.state.liste.length + 1
    };
    this.setState({ liste: [eintrag, ...this.state.liste], neuerEintrag: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Neuer Eintrag:{" "}
            <input
              type="text"
              value={this.state.neuerEintrag}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Hinzufügen" />
        </form>
        <ol>
          {this.state.liste.map(daten => (
            <Eintrag
              key={daten.id}
              todo={daten}
              eintragClickHandler={() => this.eintragClickHandler(daten)}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default Liste;
