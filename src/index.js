import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Accueil2013 from './components/2013/Accueil2013'
import Accueil2014 from './components/2014/Accueil2014'
import Accueil2015 from './components/2015/Accueil2015'
import AccueilClub from './components/Club/AccueilClub'

import Compo2013 from './components/2013/Compo2013'

import Compo2014 from './components/2014/Compo2014'

import Compo2015 from './components/2015/Compo2015'

import CompoClub from './components/Club/CompoClub'

import Contact from './components/Contact'
import NotFound from './components/NotFound'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/2013' component={Accueil2013}/>
            <Route path='/2014' component={Accueil2014}/>
            <Route path='/2015' component={Accueil2015}/>
            <Route path='/club' component={AccueilClub}/>

            <Route path='/compo2013' component={Compo2013}/>

            <Route path='/compo2014' component={Compo2014}/>

            <Route path='/compo2015' component={Compo2015}/>

            <Route path='/compoClub' component={CompoClub}/>
        
            <Route path='/contact' component={Contact}/>
            <Route path='/notfound' component={NotFound}/>
            <Redirect to="/notfound" />
        </Switch>
    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
