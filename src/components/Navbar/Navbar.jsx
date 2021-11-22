import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../imges/logo-dark.webp'


export default function Navbar(props) {
  
    return (
        <div>
            <nav className='d-flex justify-content-between p-3'>
                <ul className="list-unstyled d-flex">
                    
                    <li className='px-1 '><NavLink to="/home">  
                    <img src={logo} className='w-100' alt="logo"/>
                    </NavLink></li>

                   {
                       props.loginUser?<>

                    <li className='px-2'><NavLink to="/home"> Home </NavLink></li>
                    <li className='px-2'><NavLink to="/moives"> Moives </NavLink></li>
                    <li className='px-2'><NavLink to="/Tv"> Tv </NavLink></li>
                    <li className='px-2'><NavLink to="/Actors"> Actors </NavLink></li>
                    
                            
                       </>:''
                   }                    

                </ul>
              
                <ul className="list-unstyled d-flex">
                   

                    {
                         props.loginUser?<>
                    <li onClick={props.logout} className='px-2'>Logout</li>
                     </> : <>
                     <li className='px-2'><NavLink to="login"> Login </NavLink></li>
                    <li className='px-2'><NavLink to="/register">Register</NavLink></li>
                     </>
                    }
                 
                </ul>
            </nav>
        </div>
    )
}
