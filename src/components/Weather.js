import React from "react";
import { useWeather } from "../hooks";
const Weather = () => {
  const [latitude, errorMessage] = useWeather();
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (latitude) {
    content = <h1>Weather Display</h1>;
  } else {
    content = <div>Loading...</div>;
  }
  return <div>{content}</div>;
};

export default Weather;
