import React, { Component } from "react";
import Headline from "./components/Headline";
import Avatar from "./components/Avatar";
import HeadlineBox from "./components/HeadlineBox";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <HeadlineBox />
        </Layout>
      </>
    );
  }
}

export default App;
