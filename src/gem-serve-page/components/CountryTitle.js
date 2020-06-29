import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

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
      <Zoom duration={200}>
        <div
          ref={el => (this.container = el)}
          position="fixed"
          z-index="9999"
          style={{
            dispay: "flex",
            alignContent: "flex-end",
            color: "#fff",
            background: "#434343",
            position: "absolute",
            left: this.state.positionX,
            top: this.state.positionY,
            borderRadius: "5px",
            padding: "10px",
            // boxShadow: "box-shadow: 0px 0px 63px 1px rgba(0,0,0,0.21)",
          }}
        >
          <h4>{this.props.title.replace("_", " ")}</h4>
        </div>
      </Zoom>
    );
  }
}

export default CountryTitle;
