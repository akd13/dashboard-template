import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {Graph} from "../../components/Graph.js";
import HeatMap from "../../components/HeatMap.jsx"
import {TwoLevelPieChart} from "../../components/Pie.jsx"


import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {Select} from "../../components/Neighbourhood/Select";
import { style } from "variables/Variables.jsx";
import { bar_data, pie_data, neighbourhood_1_occupancy,neighbourhood_1_percentage_occupancy,neighbourhood_1_change } from "variables/mockData.js";

import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
    legendOccupancy,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import {MostPopular} from "../../components/SeatUsage/MostPopular";
import {LeastPopular} from "../../components/SeatUsage/LeastPopular";


const yLabels_1 = new Array(10).fill(0).map((_, i) => `${i+1}`);
const xLabels_1 = [' ',' '];
const data_1 = new Array(yLabels_1.length)
    .fill(0)
    .map(() => new Array(xLabels_1.length).fill(0).map(() => Math.floor(Math.random() * 100)));


class Dashboard extends Component {
  state = {
    team: 1,
    date: 1,
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  toggleTeam = (event) => {
    this.setState({ team: event.target.value});
  }

  toggleDate = (event) => {
    this.setState({ date: event.target.value});
  }

  render() {
      let date_value;
      this.state.date===1 ? date_value = '7 days':date_value = '30 days'


    return (
        <div ref="mainPanel">
            <Header {...this.props} />
            <h2 style={{textAlign:'center'}}>Choice Seating Utilization Metrics</h2>
            <Select toggleTeam = {this.toggleTeam} toggleDate={this.toggleDate}/>
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-users" />}
                statsText="Total Seats"
                statsValue="20"
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-user text-success" />}
                statsText="Average Occupancy"
                statsValue={neighbourhood_1_occupancy[this.state.date-1]}
                // statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-add-user" />}
                statsText="Percentage Occupancy"
                statsValue={neighbourhood_1_percentage_occupancy[this.state.date-1]}
                // statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-refresh-2" />}
                statsText={"Change over "+ date_value}
                statsValue={neighbourhood_1_change[this.state.date-1]}
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
          </Row>

            <Row>
                <Col md={6}>
                    <Card
                        title="Seating Aggregate"
                        category="Neighbourhood 1"
                        content={
                          <div>
                            <Graph data={bar_data[this.state.date]}/>
                          </div>
                        }
                        legend={
                            <div className="legend">{this.createLegend(legendBar)}</div>
                        }
                    />
                </Col>
                <Col md={6}>
                    <Card
                        title="Neighbourhood Usage Statistics"
                        content={
                            <div>
                                <TwoLevelPieChart data={pie_data[this.state.date]}/>
                            </div>
                        }
                    />
                </Col>
            </Row>
          <Row>
              <Col md={6}>
                  <Card
                      title="Most Popular Seats"
                      category="Neighbourhood 1"
                      content={
                          <div >
                                  <MostPopular date={this.state.date}/>
                          </div>
                      }
                  />
              </Col>
              <Col md={6}>
                  <Card
                      title="Least Popular Seats"
                      category="Neighbourhood 1"
                      content={
                          <div>
                                  <LeastPopular date={this.state.date} />
                          </div>
                      }
                  />
              </Col>
          </Row>
            <Row>
            <Col md={12}>
              <Card
                id="chartHours"
                title="Average Occupancy over Office Hours"
                category="9:00AM - 6:00PM"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales[this.state.date-1]}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendOccupancy)}</div>
                }
              />
            </Col>
          </Row>
            <Row>
                <Col md={12}>
                    <Card
                        title="Neighbourhood Seat Map"
                        category="20 seats"
                        content={
                        <div>
                            <div className='float-left'>
                        <HeatMap
                                xLabels={xLabels_1}
                                yLabels={yLabels_1}
                                data={data_1} />
                            </div>
                        </div> }
                    />
                </Col>
            </Row>
        </Grid>
      </div>
            <Footer />
        </div>
    );
  }
}

export default Dashboard;
