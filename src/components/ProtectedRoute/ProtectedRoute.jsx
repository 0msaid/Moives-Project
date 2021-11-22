import React from 'react'
import { Redirect, Route } from 'react-router';

export default function ProtectedRoute(props) {

    if(localStorage.getItem('userToken')){

        if( props.context){
            return (
            <props.context>
               <Route path={props.path}> <props.component /> </Route> 
           </props.context>
         )
      }
      
     return(<Route path={props.path}> <props.component /> </Route> )
    }
    else{
      return ( <Redirect to='/login' />)
    }
   
}
