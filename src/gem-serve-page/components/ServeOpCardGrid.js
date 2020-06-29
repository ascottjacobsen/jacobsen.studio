import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

class ServeOpCardGrid extends Component {
  render() {
    return this.props.opportunities.length > 0 ? (
      <div className="serveOp serveOp-card-grid">
        {this.props.opportunities.map(item => (
          <Fade bottom key={item.id}>
            <div className="ServeOp serveOp-card">
              <div className="fade-in opp-hero">
                <img
                  src={item.uagb_featured_image_src.medium_large[0]}
                  alt={item.cover_title}
                />
              </div>
              <div className="title-container">
                <h3 className="fade-in">{item.full_title}</h3>
              </div>

              <h4 className="fade-in">
                {item.location} | {item.time}
              </h4>
              <p className="fade-in">{item.description}</p>
              <button className="btn btn-success fade-in" target="_blank">
                Learn More
              </button>
            </div>
          </Fade>
        ))}
      </div>
    ) : (
      <div className="serveOp serveOp-no-results">
        <IconContext.Provider value={{ size: "6.5em", color: "#888" }}>
          <FaSearch />
        </IconContext.Provider>
        <h5>Your search produced no results.</h5>
        <p>Try using a differnt term.</p>
      </div>
    );
  }
}

export default ServeOpCardGrid;
