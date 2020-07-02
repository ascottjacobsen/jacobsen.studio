import React from "react";
import Fade from "react-reveal/Fade";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ButtonBase, Button } from "@material-ui/core";
import styles from "./ServeOpCardGrid.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
  heroButton: {
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 15,
  },
  actionButton: {
    backgroundColor: "#86aa49",
    borderRadius: 5,
  },
});

const ServeOpCardGrid = ({ opportunities }) => {
  const classes = useStyles();
  return opportunities.length > 0 ? (
    <div className="serveOp serveOp-card-grid">
      {opportunities.map((item) => (
        <Fade bottom key={item.id}>
          <div className="ServeOp serveOp-card">
            <ButtonBase className={classes.heroButton}>
              <img
                src={item.uagb_featured_image_src.medium_large[0]}
                alt={item.cover_title}
              />
            </ButtonBase>

            <div className="title-container">
              <h3 className="fade-in">{item.full_title}</h3>
            </div>

            <h4 className="fade-in">
              {item.location} | {item.time}
            </h4>
            <p className="fade-in">{item.description}</p>
            <Button
              variant="contained"
              className={classes.actionButton}
              target="_blank"
            >
              Learn More
            </Button>
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
};

export default ServeOpCardGrid;
