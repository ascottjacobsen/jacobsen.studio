import React, { Component } from "react";
import styles from "./CountryTitle.module.css";
import { Card } from "@material-ui/core";

class CountryTitle extends Component {
  constructor() {
    super();
    this.state = { positionX: "", positionY: "" };
  }
  componentDidMount() {
    this.setState({
      positionX:
        window.innerWidth - this.props.positionX > this.container.offsetWidth
          ? this.props.positionX
          : this.props.positionX - this.container.offsetWidth - 10,
      positionY:
        window.innerHeight - this.props.positionY > this.container.offsetHeight
          ? this.props.positionY
          : this.props.positionY - this.container.offsetHeight - 10,
    });
  }

  render() {
    return (
      <div
        ref={(el) => (this.container = el)}
        z-index="9999"
        style={{
          // display: "flex",
          // alignContent: "flex-end",
          // color: "#fff",
          // background: "#434343",
          position: "fixed",
          left: this.state.positionX,
          top: this.state.positionY,
          // borderRadius: "5px",
          // boxShadow: "box-shadow: 0px 0px 63px 1px rgba(0,0,0,0.21)",
        }}
      >
        <Card elevation={1}>
          <h4 className={styles.country_title_h4}>
            {this.props.title.replace("_", " ")}
          </h4>
        </Card>
      </div>
    );
  }
}

export default CountryTitle;
