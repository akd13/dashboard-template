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

        for (var i = 0; i < seats[this.props.date-1].length-1; i++) {
            tasks.push(
                <li className="list-group-item">{i+1}. {seats[this.props.date-1][i]} ({occupancy[this.props.date-1][i]})</li>
            );
        }
        tasks.push(
            <li className="list-group-item list-group-item-danger">5. {seats[this.props.date-1][seats[this.props.date-1].length-1]}
            ({occupancy[this.props.date-1][seats[this.props.date-1].length-1]})</li>
        );
        return <ol className="list-group">{tasks}</ol>;
    }
}

export default LeastPopular;
