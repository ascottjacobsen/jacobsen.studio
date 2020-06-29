import React, { Component } from "react";
import HeadlineBox from "./components/HeadlineBox";
import Layout from "./components/Layout";
import ServeApp from "./gem-serve-page/components/ServeApp";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <HeadlineBox />

          <div className="app-container">
            <ServeApp></ServeApp>
          </div>
        </Layout>
      </>
    );
  }
}

export default App;
