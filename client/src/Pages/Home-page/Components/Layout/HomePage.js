import React, { Component } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import Post from "../Container/Post";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
