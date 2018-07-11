import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

export class MostPopular extends Component {
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
      const seats_1 = [
          "HUWE23",
          "FIU534",
          "3453FE",
          "234DFV",
          "243FFR",
      ];

      const occupancy_1 = [
          "47%",
          "39%",
          "20%",
          "14%",
          "0%",
      ];

      const seats_2 = [
          "HELLO",
          "THIS",
          "IS",
          "RANDOM",
          "PLSCHANGE",
      ];

      const occupancy_2 = [
          "43%",
          "38%",
          "20%",
          "9%",
          "0%",
      ];

      const seats = [
          seats_1,
          seats_2
      ]

      const occupancy = [
          occupancy_1,
          occupancy_2
      ]

      var tasks = [];
      tasks.push(
          <li className="list-group-item list-group-item-success">1. {seats[this.props.date-1][0]} ({occupancy[this.props.date-1][0]})</li>
      );
      for (var i = 1; i < seats[this.props.date-1].length; i++) {
          tasks.push(
              <li className="list-group-item">{i+1}. {seats[this.props.date-1][i]} ({occupancy[this.props.date-1][i]})</li>
          );
      }

      return <ol className="list-group">{tasks}</ol>;
  }
}

export default MostPopular;
