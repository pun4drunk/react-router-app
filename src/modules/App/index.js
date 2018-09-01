import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = props => (
  <div className="body">
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </div>
);

export default App;
