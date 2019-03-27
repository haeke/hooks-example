import { useState, useEffect } from "react";
import jsonPlaceholder from "../api/jsonPlaceholder";

// If you use an object inside of the useState function - a new object will always be returned. That will cause a re-render infinitely if you use the useEffect function and you're checking it against the object in useState.

export const useResources = resource => {
  const [resources, setResources] = useState([]);
  const fetchResource = async resource => {
    try {
      let response = await jsonPlaceholder(`${resource}`);
      setResources(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // function that we use when we want to get access to lifecycle methods - componentDidMount and componentDidUpdate.
  // to take advantage of the componentDidUpdate add the resource prop inside of the second parameter of useEffect.
  useEffect(
    () => {
      fetchResource(resource);
    },
    [resource]
  );

  return resources;
};

export const useWeather = () => {
  const [latitude, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);
  return [latitude, errorMessage];
};
