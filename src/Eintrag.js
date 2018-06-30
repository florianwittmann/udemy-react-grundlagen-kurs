import React, { Component } from 'react';
import "./Eintrag.css";

const Eintrag = ({ todo }) => (<li className={todo.erledigt ? "Eintrag Erledigt" : "Eintrag"}>{todo.titel}</li>);

export default Eintrag;