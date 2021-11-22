import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export let MoviesContext = createContext(0);

export function MoviesContextProvider(props) {
  let [TrindingMoives, setTrindingMoives] = useState([]);
  let [TrindingTv, setTrindingTv] = useState([]);
  let [TrindingPerson, setTrindingPerson] = useState([]);
 


  async function getTrindingtypemedia(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );

    callback(data.results.slice(0, 16));
  }

  useEffect(() => {
    getTrindingtypemedia("movie", setTrindingMoives);
    getTrindingtypemedia("tv", setTrindingTv);
    getTrindingtypemedia("person", setTrindingPerson);
  }, []);

  return (
    <MoviesContext.Provider
      value={{ TrindingMoives, TrindingTv, TrindingPerson }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
