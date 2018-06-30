import React, { Component } from "react";
import Eintrag from "./Eintrag";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: []
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

  render() {
    return (
      <div>
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
