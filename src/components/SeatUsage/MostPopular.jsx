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
    const seats = [
      "5COH5I",
      "5HUHI1",
      "243324",
      "GGIE24", "IURWI3",
    ];

    const occupancy = [
        "97%",
        "97%",
        "97%",
        "96%",
        "96%",
      ];
    var tasks = [];
      tasks.push(
          <li className="list-group-item list-group-item-success">1. {seats[0]} ({occupancy[0]})</li>
      );
    for (var i = 1; i < seats.length; i++) {
      tasks.push(
          <li className="list-group-item">{i+1}. {seats[i]} ({occupancy[i]})</li>
      );
    }
    return <ol className="list-group">{tasks}</ol>;
  }
}

export default MostPopular;
