import React, { Component } from "react";
import "../css/App.css";

import ServeOpContainer from "./ServeOpContainer";
import WheretoContainer from "./WhereToContainer";
import MapAndSphereGrid from "./MapAndSphereGrid";
import NavTray from "./NavTray";

/* Quick Config */
//Set number of API reults
const resultsToReturn = 100;

// Region and Country names use '_' as separators i.e. 'United_Kingdom' and 'Southern_Europe'
// Spheres use '-' as separators such as 'business-as-mission'

class App extends Component {
  constructor() {
    super();
    this.state = {
      servingOpportunities: [],
      loadOpportunities: false,
      loadWhereTo: true,
      loadOpportunitiesCountriesOrSpheres: `countries`,
      focusCitiesVisible: false,
      countriesWithOpportunities: {
        byCountry: [],
        byRegion: [],
      },
      regionsWithOpportunities: [],
      spheresWithOpportunities: [],
      currentOpportunity: "",
      currentOpportunityList: [],
      search: false,
    };
    this.closeServeOpContainer = this.closeServeOpContainer.bind(this);
    this.switchToSpheresOrCountries = this.switchToSpheresOrCountries.bind(
      this
    );
    this.getOpportunities = this.getOpportunities.bind(this);
    this.searchOn = this.searchOn.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://gemission.org.uk/wp-json/wp/v2/serving_opportunity/?per_page=${resultsToReturn}`
    )
      .then((response) => response.json())
      .then((result) => {
        let countries = this.setupAvailableCountries(result);
        let spheres = this.setupAvailableSpheres(result);
        this.setState({
          servingOpportunities: result.filter((opportunity) => {
            let {
              title,
              full_title,
              featured_media,
              country,
              sphere,
              location,
              time,
              description,
            } = opportunity;
            return (
              title.rendered.length > 0 &&
              full_title.length > 0 &&
              featured_media != 0 &&
              country.length > 0 &&
              location.length > 0 &&
              sphere.length > 0 &&
              time.length > 0 &&
              description.length > 0
            );
          }),
          countriesWithOpportunities: countries,
          spheresWithOpportunities: spheres,
        });
      });
    document.addEventListener("keydown", this.escToClose, false);
  }

  escToClose = (e) => {
    if (e.keyCode === 27 && this.state.loadOpportunities === true) {
      this.closeServeOpContainer(document.getElementById("serve-op-container"));
    }
  };

  setupAvailableCountries = (data) => {
    let countries = {
      byCountry: [],
      byRegion: [],
    };
    data.map((item) => {
      if (item.search_by_region === "0") {
        if (!countries.byCountry.includes(item.country[0])) {
          return countries.byCountry.push(item.country[0]);
        } else {
          return [];
        }
      } else {
        if (
          !countries.byRegion.includes(item.region[0]) &&
          item.region[0] !== undefined
        ) {
          return countries.byRegion.push(item.region[0]);
        } else {
          return [];
        }
      }
    });
    return countries;
  };

  setupAvailableSpheres = (data) => {
    let spheres = [];
    data.map((item) => {
      if (!spheres.includes(item.sphere[0]) && item.sphere[0] !== undefined) {
        spheres.push(item.sphere[0]);
      }
    });
    return spheres;
  };

  searchOn = (boolean = true) =>
    this.setState({
      loadOpportunities: boolean,
      search: boolean,
    });

  switchToSpheresOrCountries = (e) => {
    this.searchOn(false);
    if (e.target.value !== this.state.loadOpportunitiesCountriesOrSpheres) {
      this.setState({ loadOpportunitiesCountriesOrSpheres: e.target.value });
    }
  };

  showFocusCities = () =>
    this.setState({ focusCitiesVisible: !this.state.focusCitiesVisible });

  closeServeOpContainer = function (elementToHide) {
    elementToHide.classList.add("serveOp-hide-test");
    setTimeout(() => {
      this.setState({ loadOpportunities: false });
    }, 500);

    this.setState({
      loadOpportunities: false,
    });
  };

  getOpportunities = (type, area) => {
    const setFilter = (data) => {
      if (data === `countries`) {
        return `country`;
      } else if (data === `regions`) {
        return `region`;
      } else if (data === "spheres") {
        return `sphere`;
      } else {
        return data;
      }
    };

    const opportunitiesList = this.state.servingOpportunities.filter(
      (item) => item[`${setFilter(type)}`][0] === area
    );
    this.setState({
      currentOpportunity: area,
      currentOpportunityList: opportunitiesList,
      loadOpportunities: true,
    });
  };

  render() {
    if (this.state.loadOpportunities) {
      return (
        <div className="serveOp-app-flex">
          <NavTray
            switchToSpheresOrCountries={this.switchToSpheresOrCountries}
            loadOpportunitiesCountriesOrSpheres={
              this.state.loadOpportunitiesCountriesOrSpheres
            }
            focusCitiesVisible={this.state.focusCitiesVisible}
            showFocusCities={this.showFocusCities}
            search={this.state.search}
            searchOn={this.searchOn}
          />
          <ServeOpContainer
            search={this.state.search}
            opportunities={
              this.state.search
                ? this.state.servingOpportunities
                : this.state.currentOpportunityList
            }
            loadBySpheres={this.state.loadOpportunitiesCountriesOrSpheres}
            title={this.state.currentOpportunity}
            closeServeOpContainer={this.closeServeOpContainer}
            searchOn={this.searchOn}
            transform={"transform-origin: 50px 50px;"}
          />
        </div>
      );
    } else {
      return (
        <div className="serveOp-app-flex">
          {this.state.loadWhereTo && (
            <WheretoContainer
              closeFunctions={() => this.setState({ loadWhereTo: false })}
              serveOpType={this.state.loadOpportunitiesCountriesOrSpheres}
            />
          )}

          <NavTray
            switchToSpheresOrCountries={this.switchToSpheresOrCountries}
            loadOpportunitiesCountriesOrSpheres={
              this.state.loadOpportunitiesCountriesOrSpheres
            }
            focusCitiesVisible={this.state.focusCitiesVisible}
            showFocusCities={this.showFocusCities}
            searchOn={this.searchOn}
          />
          <MapAndSphereGrid
            loadOpportunitiesCountriesOrSpheres={
              this.state.loadOpportunitiesCountriesOrSpheres
            }
            focusCitiesVisible={this.state.focusCitiesVisible}
            countriesWithOpportunities={
              this.state.countriesWithOpportunities.byCountry
            }
            regionsWithOpportunities={
              this.state.countriesWithOpportunities.byRegion
            }
            spheresWithOpportunities={this.state.spheresWithOpportunities}
            getOpportunities={this.getOpportunities}
          />
        </div>
      );
    }
  }
}

export default App;
