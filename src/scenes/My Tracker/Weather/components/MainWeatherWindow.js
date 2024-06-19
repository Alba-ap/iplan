import React from "react";
import "./MainWeatherWindow.css";

export default class MainWeatherWindow extends React.Component {
  render(props) {
    const Title = this.props.city ? null : (
      <>
        <h5 className="title">امروز آب و هوا چطوره؟</h5>

        <img
          src="/chars/thinking.png"
          style={{ marginBottom: "4rem", marginRight: "3rem" }}
        />
      </>
    );

    return (
      <div className="main">
        <div className="inner-main">
          {Title}
          <img
            src={
              this.props.data
                ? require(`../images/${this.props.data.icon}.svg`)
                : require("../images/01d.svg")
            }
            alt="sun"
            style={{
              visibility: this.props.city ? "visible" : "hidden",
              opacity: this.props.city ? "1" : "0",
            }}
          />

          <div
            className="today"
            style={{
              visibility: this.props.city ? "visible" : "hidden",
              opacity: this.props.city ? "1" : "0",
            }}
          >
            <span style={{ marginTop: "2rem" }}>امروز</span>
            <h1 style={{ marginRight: "2rem", color: "black" }}>
              {this.props.city}
            </h1>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "3rem", color: "black" }}>دمای هوا:</p>
              <p style={{ marginRight: "1rem", color: "black" }}>
                {this.props.data
                  ? Math.round(this.props.data.temp - 273.15)
                  : 0}
                °C
              </p>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
