import React,{ useContext } from 'react';
import { MoviesContext } from './../../MoviesContext';



export default function Actors() {

    let {TrindingPerson} = useContext(MoviesContext);
    let imgSrc ="https://image.tmdb.org/t/p/w500";
    return (
        <>
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
          
        </>
    )
}
