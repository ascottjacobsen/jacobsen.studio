import React, { Component } from "react";
import ServeOpSphere from "./ServeOpSphere";
import { SvgLoader } from "react-svgmt";
import { europeMap } from "./EuropeMap.js";

import { css } from "@emotion/core";
import { PulseLoader } from "react-spinners";
import { handleMapOrSphereClick } from "./functions";

import "../css/App.css";
import "../css/Map.css";
import "../css/Sphere.css";
import RegionProxy from "./RegionProxy";

const override = css`
  display: block;
  justify-content: center;
`;

class MapAndSphereGrid extends Component {
  handleMapClick = (e, type) => {
    let element = type === "region" ? e.target.parentElement.id : e.target.id;
    handleMapOrSphereClick(type, element, this.props.getOpportunities);
  };

  render() {
    const {
      loadOpportunitiesCountriesOrSpheres,
      countriesWithOpportunities,
      regionsWithOpportunities,
      spheresWithOpportunities,
      getOpportunities,
    } = this.props;
    if (loadOpportunitiesCountriesOrSpheres === `countries`) {
      if (countriesWithOpportunities.length > 0) {
        return (
          <div className="map-and-sphere-grid">
            <div className="serveOp-map-container">
              <SvgLoader svgXML={europeMap}>
                <RegionProxy
                  countriesWithOpportunities={countriesWithOpportunities}
                  regionsWithOpportunities={regionsWithOpportunities}
                  handleMapClick={this.handleMapClick}
                />
              </SvgLoader>
            </div>
          </div>
        );
      } else {
        return (
          <div className="map-and-sphere-grid">
            <div className="loader-container">
              <PulseLoader
                css={override}
                size={15}
                //size={"150px"} this also works
                color={"#86aa49"}
                loading={true}
              />
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="map-and-sphere-grid">
          <ServeOpSphere
            spheresWithOpportunities={spheresWithOpportunities}
            getOpportunities={getOpportunities}
          />
        </div>
      );
    }
  }
}

export default MapAndSphereGrid;
