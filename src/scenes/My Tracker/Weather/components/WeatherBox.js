import React from "react";
import "./WeatherBox.css";

export default class WeatherBox extends React.Component {
  getDay = (date) => {
    let weekday = new Array(7);
    weekday[6] = "شنبه";
    weekday[0] = "یکشنبه";
    weekday[1] = "دوشنبه";
    weekday[2] = "سه شنبه";
    weekday[3] = "چهارشنبه";
    weekday[4] = "پنج شنبه";
    weekday[5] = "جمعه";

    return weekday[new Date(date).getDay()];
  };

  render(props) {
    return (
      <div className="weather-box">
        <h1>{this.props.date ? this.getDay(this.props.date) : ""}</h1>
        <img
          src={
            this.props.icon
              ? require(`../images/${this.props.icon}.svg`)
              : require("../images/01d.svg")
          }
          alt="sun"
        />
        <span className="temp">{Math.round(this.props.temp - 273.15)}°C</span>
      </div>
    );
  }
}
