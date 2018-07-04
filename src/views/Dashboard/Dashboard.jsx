import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {Graph} from "../../components/Graph";
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


class Dashboard extends Component {
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
  render() {
    return (
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
                statsValue="17.7"
                // statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-add-user" />}
                statsText="Percentage"
                statsValue="88.5%"
                // statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-refresh-2" />}
                statsText="Change"
                statsValue="-0.8%"
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
                                <Graph/>

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
                                <ChartistGraph data={dataPie} type="Pie" />
                            </div>
                        }
                        legend={
                            <div className="legend">{this.createLegend(legendPie)}</div>
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
                                  <MostPopular />
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
                                  <LeastPopular />
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
                      data={dataSales}
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
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
