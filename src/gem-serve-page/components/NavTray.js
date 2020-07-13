import React, { Component, createRef } from "react";
import { FaGlobeEurope, FaSearch, FaDotCircle } from "react-icons/fa";
import NavButton from "./NavButton";
import styles from "./NavTray.module.css";
import styled from "styled-components";
import { keyframes } from "styled-components";

function slideIn(pixels) {
  const slide = keyframes`
    0% {
      width: 200%;
      height: 50%;
      transform: translate(${pixels}px, 50%);
    }

    90% { 
      transform: translate(0,0)

    }

    100% {
      width: 100%;
      height: 100%;
    }
  `;
  return slide;
}

const SpecialDiv = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  height: 100%;
  width: 100%;
  border-radius: 100%;
  position: absolute;
  animation: ${(props) => slideIn(props.highlightStart)} 0.12s ease;
`;

class NavTray extends Component {
  constructor() {
    super();
    this.highlight = createRef();
    this.state = {
      currentHighlightPosition: 0,
      positionDelta: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, whatToSwitchTo) {
    this.updateHighlightPositions(e);
    whatToSwitchTo === "search"
      ? this.props.searchOn(true)
      : this.props.switchToSpheresOrCountries(whatToSwitchTo);
  }

  updateHighlightPositions = (e) => {
    //get position of button we are switching to:
    let targetPosition =
      e.target.nodeName === "SPAN"
        ? e.target.offsetParent.getBoundingClientRect().x
        : e.target.getBoundingClientRect().x;

    //subtract new position from the previous one:
    let delta = this.state.currentHighlightPosition - targetPosition;

    //set the new highlight position to the clicked location
    this.setState({
      currentHighlightPosition: targetPosition,
      positionDelta: delta,
    });

    return this.state;
  };

  componentDidMount() {
    this.setState({
      currentHighlightPosition: this.highlight.current.getBoundingClientRect()
        .x,
    });
  }

  render() {
    const {
      // switchToSpheresOrCountries,
      loadOpportunitiesCountriesOrSpheres,
      search,
    } = this.props;

    const activeButton = search
      ? "search"
      : loadOpportunitiesCountriesOrSpheres === "countries"
      ? "countries"
      : "spheres";

    return (
      <div className={styles.nav_tray}>
        <div className="nav-tray">
          <NavButton
            activeButton={activeButton}
            buttonValue="countries"
            buttonFunction={this.handleChange}
          >
            <FaGlobeEurope className={styles.click_pass_through} />
            {activeButton === "countries" && (
              <div ref={this.highlight} className={styles.highlight}>
                <SpecialDiv
                  backgroundColor={"#B673B0"}
                  highlightStart={this.state.positionDelta}
                ></SpecialDiv>
              </div>
            )}
          </NavButton>

          <NavButton
            activeButton={activeButton}
            buttonValue="spheres"
            buttonFunction={this.handleChange}
          >
            <FaDotCircle className={styles.click_pass_through} />
            {activeButton === "spheres" && (
              <div ref={this.highlight} className={styles.highlight}>
                <div ref={this.highlight} className={styles.highlight}>
                  <SpecialDiv
                    backgroundColor={"#B673B0"}
                    highlightStart={this.state.positionDelta}
                  ></SpecialDiv>
                </div>
              </div>
            )}
          </NavButton>

          <NavButton
            activeButton={activeButton}
            buttonValue="search"
            buttonFunction={this.handleChange}
          >
            <FaSearch />
            {activeButton === "search" && (
              <div ref={this.highlight} className={styles.highlight}>
                <div ref={this.highlight} className={styles.highlight}>
                  <SpecialDiv
                    backgroundColor={"#B673B0"}
                    highlightStart={this.state.positionDelta}
                  ></SpecialDiv>
                </div>
              </div>
            )}
          </NavButton>
        </div>
      </div>
    );
  }
}

export default NavTray;
