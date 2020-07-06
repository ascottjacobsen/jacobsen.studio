import React from "react";
import ServeOpContainer from "./ServeOpContainer";
import MapAndSphereGrid from "./MapAndSphereGrid";
import styles from "./AppWindow.module.css";

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

  return (
    <div className={styles.app_window}>
      {(loadOpportunities && (
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
