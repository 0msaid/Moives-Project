import React,{ useContext } from 'react';

import { MoviesContext } from './../../MoviesContext';
import { Link } from 'react-router-dom';



export default function Moives() {

   
    let {TrindingMoives} = useContext(MoviesContext);
    let imgSrc ="https://image.tmdb.org/t/p/w500";
    return (
        <>
             <div className='row'>
        <div className="col-md-4">
            <div className='bord w-25'></div>
        <h2>trinding movies <br/>
        to watch <br/> Right Now</h2>
        <p className='text-muted'>trinding movies watch <br/>now and engio</p>
        <div className='bord'></div>

        </div>
           {TrindingMoives.map((movie ,index)=> <div className='col-md-2'> 
          <div className='movie'>
          <Link to={`/MoivesDetalies/ ${movie.id}`} >
                   <img src={imgSrc + movie.poster_path} alt={movie.title} className='w-100' />
               </Link>
              <h3 className='h5 my-2 text-center'>{movie.title}</h3>
             

          </div>
           </div>)}
            
        </div>
          
        </>
    )
}
