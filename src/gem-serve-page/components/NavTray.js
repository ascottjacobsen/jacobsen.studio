import React, { Component } from "react";
import { FaGlobeEurope, FaSearch, FaDotCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import NavButton from "./NavButton";

class NavTray extends Component {
  render() {
    const {
      switchToSpheresOrCountries,
      loadOpportunitiesCountriesOrSpheres,
      search,
      searchOn,
    } = this.props;

    return (
      <div className="nav-tray">
        <NavButton
          buttonClassName={`btn ${
            loadOpportunitiesCountriesOrSpheres === "countries" && !search
              ? "active"
              : ""
          }`}
          buttonValue="countries"
          buttonFunction={(e) => switchToSpheresOrCountries("countries")}
        >
          {" "}
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            <FaGlobeEurope />
          </IconContext.Provider>
        </NavButton>

        <NavButton
          buttonClassName={`btn ${
            loadOpportunitiesCountriesOrSpheres === "spheres" && !search
              ? "active"
              : ""
          }`}
          buttonValue="spheres"
          buttonFunction={(e) => switchToSpheresOrCountries("spheres")}
        >
          {" "}
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            <FaDotCircle />
          </IconContext.Provider>
        </NavButton>

        <NavButton
          buttonClassName={`btn ${search ? "active" : ""}`}
          buttonValue="search"
          buttonFunction={() => searchOn(true)}
        >
          {" "}
          <IconContext.Provider
            value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
          >
            {" "}
            <FaSearch />
          </IconContext.Provider>
        </NavButton>
      </div>
    );
  }
}

export default NavTray;
