import React from "react";
import Fade from "react-reveal/Fade";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ButtonBase, Button } from "@material-ui/core";
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
    width: "325px",
    display: "grid",
    gridTemplateRows: "200px auto 100px",
    borderRadius: 15,
    margin: "0 25px",
  },
  heroButton: {
    position: "relative",
    width: "100%",
    height: "200px",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    clipPath: "circle(463.5% at 24% -530%)",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // objectPosition: "0 0",
  },

  cardContent: {
    padding: "0 15px",
    display: "flex",
    flexDirection: "column",
  },

  serveOpTitle: {
    margin: "5px 0",
  },

  serveOpSubTitle: {
    margin: 0,
  },

  cardDescription: {
    margin: "10px 0",
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

const ServeOpCardGrid = ({ opportunities, firstSearch }) => {
  const classes = useStyles();
  return opportunities.length > 0 ? (
    <div className="serveOp serveOp-card-grid">
      {opportunities.map((item) => (
        <Fade bottom key={item.id} className={classes.addCardMargin}>
          <Card className={classes.servOpCard} elevation={5}>
            <ButtonBase className={classes.heroButton}>
              <img
                className={classes.heroImage}
                src={item.uagb_featured_image_src.medium_large[0]}
                alt={item.cover_title}
              />
            </ButtonBase>
            <div className={classes.cardContent}>
              <h3 className={classes.serveOpTitle}>{item.full_title}</h3>

              <h4 className={classes.serveOpSubTitle}>
                {item.location} &#8226; {item.time}
              </h4>
              <p className={classes.cardDescription}>{item.description}</p>
            </div>

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
      <IconContext.Provider
        value={{ size: "6.5em", color: "rgba(51, 51, 51, 0.1)" }}
      >
        <FaSearch />
      </IconContext.Provider>
      {(firstSearch && (
        <div>
          <h5>Use the field above to search.</h5>
          <p>You can search by country, city, ministry area, or keyword.</p>
        </div>
      )) || (
        <div>
          <h5>Your search produced no results.</h5>
          <p>Try using a differnt term.</p>
        </div>
      )}
    </div>
  );
};

export default ServeOpCardGrid;
