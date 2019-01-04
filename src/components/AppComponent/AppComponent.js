import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import HeroComponent from "../HeroComponent/HeroComponent";

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <HeroComponent />
      </div>
    );
  }
}
