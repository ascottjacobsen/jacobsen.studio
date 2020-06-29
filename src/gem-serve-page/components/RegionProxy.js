import React, { Component } from "react";
import { SvgProxy } from "react-svgmt";
import CountryTitle from "./CountryTitle";

class RegionProxy extends Component {
  constructor() {
    super();
    this.state = {
      hoverTitle: false,
      hoverTitleX: "",
      hoverTitleY: "",
      hoverTitleName: "",
    };
    this.showHoverTitle = this.showHoverTitle.bind(this);
    this.clearHoverTitle = this.clearHoverTitle.bind(this);
  }

  showHoverTitle = (e, region) => {
    this.setState({
      hoverTitleX: e.clientX + 10,
      hoverTitleY: e.clientY + 10,
      hoverTitleName: region,
      hoverTitle: true,
    });
    // document.getElementById(e.target.id).setAttribute("fill", "#86aa49");
  };

  clearHoverTitle = () => {
    this.setState({
      hoverTitle: false,
      hoverTitleX: "",
      hoverTitleY: "",
      hoverTitleName: "",
    });
  };
  render() {
    let countryAndRegionArray = [];
    this.props.countriesWithOpportunities.map(country => {
      countryAndRegionArray.push({ name: country, byRegion: false });
    });
    this.props.regionsWithOpportunities.map(region => {
      countryAndRegionArray.push({ name: region, byRegion: true });
    });
    return countryAndRegionArray.map(area => (
      <div key={`${area.name}-title-container`}>
        {this.state.hoverTitle ? (
          <CountryTitle
            key={`${area.name}-title`}
            positionX={this.state.hoverTitleX}
            positionY={this.state.hoverTitleY}
            title={this.state.hoverTitleName}
          ></CountryTitle>
        ) : null}
        <SvgProxy
          key={area.name}
          selector={`#${area.name.toString()}`}
          class="has-opportunities"
          stroke="#fff"
          //   fill="#4d4d4d"
          onclick={e =>
            this.props.handleMapClick(e, area.byRegion ? "region" : "country")
          }
          onMouseEnter={e => this.showHoverTitle(e, area.name)}
          onMouseLeave={() => this.clearHoverTitle()}
        ></SvgProxy>
      </div>
    ));
  }
}

export default RegionProxy;
