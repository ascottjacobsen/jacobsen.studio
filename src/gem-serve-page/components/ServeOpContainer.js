import React, { Component } from "react";
import ContainerCloser from "./ContainerCloser";

import ServeOpCardGrid from "./ServeOpCardGrid";

class ServeOpContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    console.log(this.state.searchValue);
    this.setState({
      searchValue: e.target.value,
    });
  }
  render() {
    const {
      search,
      title,
      opportunities,
      closeServeOpContainer,
      searchOn,
    } = this.props;

    opportunities.map(each => {
      console.log(each.location.length);
    });
    let filteredOpportunities = [];
    if (this.state.searchValue.length > 0) {
      filteredOpportunities = opportunities.filter(eachItem => {
        return (
          eachItem.country[0]
            .toLowerCase()
            .replace(/-|_/g, " ")
            .includes(this.state.searchValue.toLowerCase()) ||
          eachItem.location
            .toLowerCase()
            .replace(/-|_/g, " ")
            .includes(this.state.searchValue.toLowerCase()) ||
          eachItem.full_title
            .toLowerCase()
            .replace(/-|_/g, " ")
            .includes(this.state.searchValue.toLowerCase()) ||
          eachItem.description
            .toLowerCase()
            .replace(/-|_/g, " ")
            .includes(this.state.searchValue.toLowerCase())
        );
      });
    }

    return (
      <div id="serve-op-container" className="serveOp serveOp-container">
        <div className="serveOp serveOp-container-header">
          <ContainerCloser
            closeFunctions={() => {
              searchOn(false);
              closeServeOpContainer(
                document.getElementById("serve-op-container")
              );
            }}
          />
          <div className="serveOp serveOp-title-row">
            {search ? (
              <input
                type="text"
                placeholder="enter your search query"
                onChange={e => this.handleSearch(e)}
              ></input>
            ) : (
              <h2 className="serveOp serveOp-container-title">
                {title
                  .replace(/sports-music-art/g, "Sports, Music & Art")
                  .replace(/gem-uk/g, "GEM UK")
                  .replace(/-|_/g, " ")}
              </h2>
            )}
          </div>
        </div>
        <div className="serveOp serveOp-card-grid-container">
          <ServeOpCardGrid
            opportunities={search ? filteredOpportunities : opportunities}
          />
          <div className="serveOp serveOp-card-grid-buffer"></div>
          <div className="serveOp serveOp-card-grid-footer"></div>
        </div>
      </div>
    );
  }
}

export default ServeOpContainer;
