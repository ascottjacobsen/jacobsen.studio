import React, { Component } from "react";
import { FaGlobeEurope, FaCity, FaSearch, FaDotCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

class NavTray extends Component {
  render() {
    const {
      switchToSpheresOrCountries,
      loadOpportunitiesCountriesOrSpheres,
      focusCitiesVisible,
      showFocusCities,
      search,
      searchOn,
    } = this.props;

    return (
      <div className="nav-tray">
        <button
          className={`btn ${
            loadOpportunitiesCountriesOrSpheres === "countries" && !search
              ? "active"
              : ""
          }`}
          value="countries"
          onClick={switchToSpheresOrCountries}
        >
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            <FaGlobeEurope />
          </IconContext.Provider>
        </button>
        <button
          className={`btn${
            loadOpportunitiesCountriesOrSpheres === "spheres" && !search
              ? " active"
              : ""
          }`}
          value="spheres"
          onClick={switchToSpheresOrCountries}
        >
          {" "}
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            {" "}
            <FaDotCircle />
          </IconContext.Provider>
        </button>
        <button
          className={`btn ${
            focusCitiesVisible &&
            loadOpportunitiesCountriesOrSpheres === "countries"
              ? "active"
              : ""
          }`}
          onClick={showFocusCities}
        >
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            {" "}
            <FaCity />
          </IconContext.Provider>
        </button>
        <button
          className={`btn ${search ? "active" : ""}`}
          onClick={() => searchOn(true)}
        >
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            {" "}
            <FaSearch />
          </IconContext.Provider>
        </button>
      </div>
    );
  }
}

export default NavTray;
