import React, { Component } from "react";
import {Button, ButtonGroup} from "@material-ui/core";

import sortingOrderStates from '../home/home'

export class SortAndFilter extends Component {
  render() {

    return(
      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.setItem('sortOrder', sortingOrderStates.CUISINE_TYPE);
              this.setState({
                sortOrderState: sortingOrderStates.CUISINE_TYPE
              });
            }}
            color="inherit"
          >Cuisine Type</Button>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.setItem('sortOrder', sortingOrderStates.DIET_TYPE);
              this.setState({
                sortOrderState: sortingOrderStates.DIET_TYPE
              });
            }}
            color="inherit"
          >Diet Type</Button>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.setItem('sortOrder', sortingOrderStates.CALORIES);
              this.setState({
                sortOrderState: sortingOrderStates.CALORIES
              });
            }}
            color="inherit"
          >Calories</Button>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.setItem('sortOrder', sortingOrderStates.PRICE.ASCENDING);
              this.setState({
                sortOrderState: sortingOrderStates.PRICE.ASCENDING
              });
            }}
            color="inherit"
          >Price Ascending</Button>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.setItem('sortOrder', sortingOrderStates.PRICE.DESCENDING);
              this.setState({
                sortOrderState: sortingOrderStates.PRICE.DESCENDING
              });
            }}
            color="inherit"
          >Price Descending</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default SortAndFilter;