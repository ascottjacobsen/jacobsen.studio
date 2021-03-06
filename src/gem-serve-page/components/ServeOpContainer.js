import React, { Component } from "react";
import styles from "./ServeOpContainer.module.css";
import ContainerCloser from "./ContainerCloser";
import ServeOpCardGrid from "./ServeOpCardGrid";
import InnerWrap from "../../components/InnerWrap";

class ServeOpContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      firstSearch: true,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchValue: e.target.value,
      firstSearch: false,
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
        <div>
          <InnerWrap>
            <div className={styles.serveOp_container_header}>
              {search ? (
                <input
                  className={styles.search_input}
                  type="text"
                  placeholder="search here"
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
              <ContainerCloser
                closeFunctions={() => {
                  searchOn(false);
                  closeServeOpContainer(
                    document.getElementById("serve-op-container")
                  );
                }}
              />
            </div>
          </InnerWrap>
        </div>
        <div className={styles.serveOp_card_grid_container}>
          <ServeOpCardGrid
            opportunities={search ? filteredOpportunities : opportunities}
            firstSearch={this.state.firstSearch}
          />
          <div className="serveOp serveOp-card-grid-buffer"></div>
          <div className="serveOp serveOp-card-grid-footer"></div>
        </div>
      </div>
    );
  }
}

export default ServeOpContainer;
