import React, { Component } from "react";

import "../css/Sphere.css";
import { SvgLoader, SvgProxy } from "react-svgmt/dist";
import { spheres } from "./Spheres.js";
import { selectifyArray, handleMapOrSphereClick } from "./functions";

class ServeOpSphere extends Component {
  handleSphereClick = (e, type) => {
    let element = this.props.spheresWithOpportunities.includes(e.target.id)
      ? e.target.id
      : e.target.parentElement.id;
    handleMapOrSphereClick(type, element, this.props.getOpportunities);
  };
  render() {
    console.log(selectifyArray(this.props.spheresWithOpportunities));
    return (
      <SvgLoader svgXML={spheres}>
        <SvgProxy
          selector={selectifyArray(this.props.spheresWithOpportunities)}
          class="has-opportunities"
          onClick={e => this.handleSphereClick(e, "sphere")}
        />
      </SvgLoader>
    );
  }
}

export default ServeOpSphere;
