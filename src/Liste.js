import React, { Component } from 'react';
import Eintrag from './Eintrag';

class Liste extends Component {

    render() {
        return (<div><ol>
            <Eintrag />
            <Eintrag />
            <Eintrag />
            <Eintrag />
        </ol></div>)
    }
}

export default Liste;