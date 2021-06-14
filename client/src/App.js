import './App.css';
import { Route } from 'react-router-dom'
import  Nav from './components/Nav/Nav';
import  LandingPage from './components/LandingPage/LandingPage';
import  Home from './components/Home/Home';
import  GameDetail from './components/GameDetail/GameDetail';
import  React from 'react';
import { Fragment } from 'react';


const App = () => { 
  return (
    <Fragment>
      <Route exact path='/' component={LandingPage}/>
      <Route path={['/home', '/videogame/:id', '/create']}>
        <Nav/>
      </Route>
      <Route  path='/home' component={Home}/>
      <Route  path='/videogame/:id' component={GameDetail}/>
      
    </Fragment>
  );
}

export default App;
