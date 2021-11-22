import React,{ useContext } from 'react';
import { MoviesContext } from './../../MoviesContext';



export default function Tv() {

    let {TrindingTv} = useContext(MoviesContext);
    let imgSrc ="https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className='row'>
        <div className="col-md-4">
            <div className='bord w-25'></div>
        <h2>trinding tv <br/>
        to watch <br/> Right Now</h2>
        <p className='text-muted'>trinding tv watch <br/>now and engio</p>
        <div className='bord'></div>

        </div>
           {TrindingTv.map((tv ,index)=> <div className='col-md-2'> 
          <div className='tv'>
              <img src={imgSrc + tv.poster_path} alt={tv.name} className='w-100' />
              <h3 className='h5 my-2 text-center'>{tv.name}</h3>
          </div>
           </div>)}
            
        </div> 
          
        </>
    )
}
