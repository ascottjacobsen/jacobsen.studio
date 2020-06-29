import React, { Component } from "react";
import ContainerCloser from "./ContainerCloser";

class WheretoContainer extends Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  updateWindowWidth = () => this.setState({ width: window.innerWidth });

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render() {
    const { serveOpType, closeFunctions } = this.props;
    const serveOpText =
      serveOpType === "countries" ? "country" : "ministry sphere";
    const serveOpAlternative =
      serveOpType === "countries" ? "ministry sphere" : "country";
    const buttonLocation =
      this.state.width >= 768 ? "on the left" : "at the bottom";
    return (
      <div className="where-to-container">
        <ContainerCloser closeFunctions={() => closeFunctions()} />
        <h2>Where To?</h2>
        <p>Select a {serveOpText} to see how you could be a part of GEM.</p>
        <p>
          You can also click the buttons {buttonLocation} to search by{" "}
          {serveOpAlternative}, view opportunities in our Focus Cities, or
          search.
        </p>
        <p>
          If you can't find anything,{" "}
          <a href="https://gemission.org.uk/contact-us/?subject=looking-for-ways-to-serve">
            contact us
          </a>{" "}
          and let us know how we can help you serve the Church in Europe!
        </p>
      </div>
    );
  }
}

export default WheretoContainer;
