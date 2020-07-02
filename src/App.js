import React, { Component } from "react";
import HeadlineBox from "./components/HeadlineBox";
import Layout from "./components/Layout";
import ServeApp from "./gem-serve-page/components/ServeApp";
import SectionContainer from "./components/SectionContainer";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <HeadlineBox />
          <SectionContainer
            sectionTitle="GEM Serving Page"
            sectionDescription="I built this application for Greater Europe Mission UK to make it easier to find mission opportunities across Europe. It consists first of an SVG map which I modified to reduce file size, and an application built with React.js"
          >
            <ServeApp />
          </SectionContainer>
        </Layout>
      </>
    );
  }
}

export default App;
