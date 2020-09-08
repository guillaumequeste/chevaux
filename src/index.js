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

import Contact from './components/Contact'
import NotFound from './components/NotFound'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/2013' component={Accueil2013}/>
        
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
