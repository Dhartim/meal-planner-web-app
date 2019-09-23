import React, { Component } from 'react';
import {Button} from "react-bootstrap";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    console.log("welcome home");
    return(
      <div>
        WELCOME HOME
        <Button>
          ;kajfk
        </Button>
      </div>
    );
  }
}
export default Home;