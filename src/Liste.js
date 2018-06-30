import React, { Component } from 'react';
import Eintrag from './Eintrag';

class Liste extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liste: [
                { id: 1, titel: 'Auto waschen', erledigt: false },
                { id: 2, titel: 'Koffer auspacken', erledigt: true },
                { id: 3, titel: 'Emails beantworten', erledigt: false },
            ]
        }
    }

    eintragClickHandler = (eintrag) => {
        this.setState(prevState => ({
            liste: prevState.liste.map(
                prevEintrag => prevEintrag.id === eintrag.id ?
                    { ...prevEintrag, erledigt: !prevEintrag.erledigt } : prevEintrag
            )
        }))
    }

    componentDidMount() {
        console.log('Hallo - Liste wurde gemounted');
    }

    componentWillUnmount() {
        console.log('Hallo - Ich werde jetzt ungemounted');
    }

    render() {
        return (<div><ol>
            {this.state.liste.map(daten => <Eintrag key={daten.id} todo={daten} eintragClickHandler={() => this.eintragClickHandler(daten)} />)}
        </ol></div>)
    }
}

export default Liste;