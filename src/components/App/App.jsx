
import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import Navbar from './../Navbar/Navbar';
import Home from './../Home/Home';
import Moives from './../Moives/Moives';
import Tv from '../Tv/Tv';
import Register from './../Register/Register';
import Notfound from './../Notfound/Notfound';

import Login from './../Login/Login';
 import Actors from './../Actors/Actors';
import jwtDecode from 'jwt-decode';
import { useState,useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MoviesContextProvider } from '../../MoviesContext';
import MoivesDetalies from './../MoivesDetalies/MoivesDetalies';



function App() {


let history = useHistory();

let [loginUser, setloginUser] = useState(null);

function getUserInfo () {
  let endecodedToken = localStorage.getItem('userToken');
  let userData = jwtDecode(endecodedToken);
  setloginUser(userData);
}

useEffect(() => {
  if (localStorage.getItem('userToken')){
    getUserInfo ();
  }
  
}, []);


function logout () {
  localStorage.removeItem('userToken');
  setloginUser(null);
  history.push('/login');
}


  return (
    <div>
     <Navbar loginUser={loginUser} logout={logout} />

    
     
  <div className='container'>
  <Switch>
      <ProtectedRoute path='/moives' component={Moives} context={MoviesContextProvider} />
       <ProtectedRoute path='/Tv' component={Tv} context={MoviesContextProvider} />
          <ProtectedRoute path='/home' component={Home} context={MoviesContextProvider} />
       <ProtectedRoute path='/Actors' component={Actors} context={MoviesContextProvider} /> 
       <ProtectedRoute path='/MoivesDetalies/:id' component={MoivesDetalies} context={MoviesContextProvider} />  

       
       <Route path="/login" render={(props)=> <Login {...props} getUserInfo={getUserInfo} />}/>
       <Route path="/register" render={(props)=> <Register {...props}/>}/>
       <Redirect from='/' exact to='/home'/>
       <Route path='*'> <Notfound/> </Route>  
       </Switch>
  </div>
     

     

    </div>
  );
}

export default App;
