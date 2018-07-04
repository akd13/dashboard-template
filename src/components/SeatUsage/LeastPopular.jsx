import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

export class LeastPopular extends Component {
    handleCheckbox = event => {
        const target = event.target;
        console.log(event.target);
        this.setState({
            [target.name]: target.checked
        });
    };
    render() {
        const seats = [
            "HUWE23",
            "FIU534",
            "3453FE",
            "234DFV", "243FFR",
        ];

        const occupancy = [
            "47%",
            "39%",
            "20%",
            "14%",
            "0%",
        ];
        var tasks = [];

        for (var i = 0; i < seats.length-1; i++) {
            tasks.push(
                <li className="list-group-item">{i+1}. {seats[i]} ({occupancy[i]})</li>
            );
        }
        tasks.push(
            <li className="list-group-item list-group-item-danger">5. {seats[seats.length-1]} ({occupancy[seats.length-1]})</li>
        );
        return <ol className="list-group">{tasks}</ol>;
    }
}

export default LeastPopular;
