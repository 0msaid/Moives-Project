import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoivesDetalies() {
  let { id } = useParams();

  const [moivesObjct, setmoivesObjct] = useState([]);

  let imgSrc = "https://image.tmdb.org/t/p/w500";
  async function getMoivesDetalies() {
    var { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`
    );
    setmoivesObjct(data);
   console.log(data);
  }

  useEffect(() => {
    getMoivesDetalies();
  });

  return (
    <div className="row">
    

          <div className="col-md-4 m-auto">
             
        <img
          src={imgSrc + moivesObjct.poster_path}
          alt={moivesObjct.title}
          className=" w-100"
        />
        <h1 className="h5 my-2 text-center"> title: {moivesObjct.title}</h1>
        <h3 className="h5 my-2 text-center">id: {moivesObjct.id}</h3>
        <h3 className="h5 my-2 text-center">
          vote_average: {moivesObjct.vote_average}
        </h3>
        <h3 className="h5 my-2 text-center">
          original_languagee: {moivesObjct.original_language}
         </h3>
         <h3 className="h5 my-2 text-center">
         release_date: {moivesObjct.release_date}
         </h3> 
      </div>
    </div>
  );
}
