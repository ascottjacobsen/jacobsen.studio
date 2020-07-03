import React from "react";
import Fade from "react-reveal/Fade";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ButtonBase, Button } from "@material-ui/core";
import styles from "./ServeOpCardGrid.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },

  addCardMargin: {
    margin: "0 25px",
  },

  servOpCard: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "200px 56px 32px auto 80px",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 15,
  },
  heroButton: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    clipPath: "circle(544.5% at 34% -640%)",
  },

  curve: {
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
    backgroundColor: "pink",
  },

  serveOpTitle: {
    marginTop: "10px",
    fontSize: "1rem",
  },

  actionButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  actionButton: {
    backgroundColor: "#86aa49",
    borderRadius: 10,
    height: "max-content",
    padding: "16px 24px",
    fontFamily: "poppins",
  },
});

const ServeOpCardGrid = ({ opportunities }) => {
  const classes = useStyles();
  console.log(opportunities);
  return opportunities.length > 0 ? (
    <div className="serveOp serveOp-card-grid">
      {opportunities.map((item) => (
        <Fade bottom key={item.id} className={classes.addCardMargin}>
          <Card className={classes.servOpCard} elevation={10}>
            <ButtonBase className={classes.heroButton}>
              <img
                src={item.uagb_featured_image_src.medium_large[0]}
                alt={item.cover_title}
              />
            </ButtonBase>

            <h3 className={classes.serveOpTitle}>{item.full_title}</h3>

            <h4 className="fade-in">
              {item.location} | {item.time}
            </h4>
            <p className="fade-in">{item.description}</p>
            <div className={classes.actionButtonContainer}>
              <Button
                size="large"
                variant="contained"
                className={classes.actionButton}
                target={"_blank"}
                onClick={() => window.open(item.link)}
              >
                Learn More
              </Button>
            </div>
          </Card>
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
