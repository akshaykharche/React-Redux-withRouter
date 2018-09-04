import React from 'react';
//import { Switch, Route } from 'react-router-dom';
import ContactDetails from './components/ContactDetails';
import DisplayContactDetails from './components/DisplayContactDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = () => (

    <Router>
        <Switch>
            <Route exact path='/' component={ContactDetails}></Route>
            <Route exact path='/contacts/:fname' component={DisplayContactDetails}></Route>
        </Switch>
    </Router>

);




export default Main;



