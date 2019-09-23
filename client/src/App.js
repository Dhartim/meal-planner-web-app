import React, { Component } from 'react';
import AppRouter from "./routes";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <AppRouter />
      </div>
    )
  };
}

export default App;
