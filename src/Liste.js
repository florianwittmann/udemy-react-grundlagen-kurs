import React, { Component } from 'react';
import Eintrag from './Eintrag';

class Liste extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liste: [
                { titel: 'Auto waschen', erledigt: false },
                { titel: 'Koffer auspacken', erledigt: true },
                { titel: 'Emails beantworten', erledigt: false },
            ]
        }
    }
    render() {
        return (<div><ol>
            {this.state.liste.map(daten => <Eintrag todo={daten} />)}
        </ol></div>)
    }
}

export default Liste;