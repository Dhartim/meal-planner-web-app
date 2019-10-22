import React from 'react';

import './modal.css';

const modal = props => {
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__tabs">{props.tabs}</section>
    <section className="modal__form">{props.children}</section>
  </div>
}