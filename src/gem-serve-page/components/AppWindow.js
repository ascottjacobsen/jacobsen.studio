import React from "react";
import ServeOpContainer from "./ServeOpContainer";
import MapAndSphereGrid from "./MapAndSphereGrid";
import { PulseLoader } from "react-spinners";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "@emotion/core";

const useStyles = makeStyles({
  appWindow: {
    display: "flex",
    overflow: "scroll",
    height: (props) => props.height,
  },
});

const override = css`
  display: inline-block;
  justify-content: center;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
`;

const AppWindow = (props) => {
  const {
    search,
    loadOpportunities,
    opportunities,
    loadBySpheres,
    title,
    closeServeOpContainer,
    searchOn,
    transform,
    loadOpportunitiesCountriesOrSpheres,
    focusCitiesVisible,
    countriesWithOpportunities,
    regionsWithOpportunities,
    spheresWithOpportunities,
    getOpportunities,
  } = props;

  //change size of app window based on whether it is showing the map or opportunity results
  const classes = useStyles({ height: loadOpportunities ? 510 : 450 });
  const dataLoaded = true && countriesWithOpportunities.length > 0;

  return (
    <div className={classes.appWindow}>
      {(!dataLoaded && (
        <PulseLoader
          css={override}
          size={15}
          //size={"150px"} this also works
          color={"#86aa49"}
          loading={true}
        />
      )) ||
        (loadOpportunities && (
          <ServeOpContainer
            search={search}
            opportunities={opportunities}
            loadBySpheres={loadBySpheres}
            title={title}
            closeServeOpContainer={closeServeOpContainer}
            searchOn={searchOn}
            transform={transform}
          />
        )) || (
          <MapAndSphereGrid
            loadOpportunitiesCountriesOrSpheres={
              loadOpportunitiesCountriesOrSpheres
            }
            focusCitiesVisible={focusCitiesVisible}
            countriesWithOpportunities={countriesWithOpportunities}
            regionsWithOpportunities={regionsWithOpportunities}
            spheresWithOpportunities={spheresWithOpportunities}
            getOpportunities={getOpportunities}
          />
        )}
    </div>
  );
};

export default AppWindow;
