
import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from './../../MoviesContext';



export default function Home() {


    let {TrindingMoives,TrindingTv, TrindingPerson} = useContext(MoviesContext);
 
    let imgSrc ="https://image.tmdb.org/t/p/w500";
    return (<>
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
        <div className='row'>
        <div className="col-md-4">
            <div className='bord w-25'></div>
        <h2>trinding person <br/>
        to watch <br/> Right Now</h2>
        <p className='text-muted'>trinding person watch <br/>now and engio</p>
        <div className='bord'></div>

        </div>
           {TrindingPerson.map((person ,index)=> <div className='col-md-2'> 
          <div className='person'>
              <img src={imgSrc + person.profile_path} alt={person.name} className='w-100' />
              <h3 className='h5 my-2 text-center'>{person.name}</h3>
          </div>
           </div>)}
            
        </div>
    </>)
}
