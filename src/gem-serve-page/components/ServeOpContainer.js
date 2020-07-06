import React, { Component } from "react";
import styles from "./ServeOpContainer.module.css";
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
    this.setState({
      searchValue: e.target.value,
    });
  }

  componentDidMount() {
    console.log(`styles: ${styles.what}`);
  }

  render() {
    const {
      search,
      title,
      opportunities,
      closeServeOpContainer,
      searchOn,
    } = this.props;

    let filteredOpportunities = [];
    if (this.state.searchValue.length > 0) {
      filteredOpportunities = opportunities.filter((eachItem) => {
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
      <div id="serve-op-container" className={styles.serve_op_container}>
        <div className={styles.serveOp_container_header}>
          <div className="serveOp serveOp-title-row">
            {search ? (
              <input
                type="text"
                placeholder="enter your search query"
                onChange={(e) => this.handleSearch(e)}
              ></input>
            ) : (
              <h2 className={styles.serve_op_title}>
                {title
                  .replace(/sports-music-art/g, "Sports, Music & Art")
                  .replace(/gem-uk/g, "GEM UK")
                  .replace(/-|_/g, " ")}
              </h2>
            )}
          </div>
          <ContainerCloser
            closeFunctions={() => {
              searchOn(false);
              closeServeOpContainer(
                document.getElementById("serve-op-container")
              );
            }}
          />
        </div>
        <div className={styles.serveOp_card_grid_container}>
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
