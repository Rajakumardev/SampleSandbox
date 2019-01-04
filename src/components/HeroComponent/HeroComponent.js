import React from "react";
import ReactDOM from "react-dom";
import learn from "../../assets/svgs/learn.svg";
import "./HeroComponent.css";
export default class HeroComponent extends React.Component {
  render() {
    return (
      <div className="hero">
        <img src={learn} width="100%" height="200" />
      </div>
    );
  }
}
