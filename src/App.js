import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Helmet from './components/Helmet'
import { Link } from 'react-router-dom'

const App = () => (
  <>
    <Helmet title={"Accueil Découverte de la Normandie et du Littoral"}
              link={"http://chevaux.guillaumequeste.fr"} />
    <Header />
    <Footer />
    <div className="app">
      <div className="ligne">
        <Link to="/2013" className="case">
          <div className="ecurie">
            <img src={require("./img/casaque2013.png")} alt="casaque2013" className="casaque"/>
            <p className="nomEcurie">2013</p>
          </div>
        </Link>
        <Link to="/2014" className="case">
          <div className="ecurie">
            <img src={require("./img/casaque2014.png")} alt="casaque2014" className="casaque"/>
            <p className="nomEcurie">2014</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/2015" className="case">
          <div className="ecurie">
            <img src={require("./img/casaque2015.png")} alt="casaque2015" className="casaque"/>
            <p className="nomEcurie">2015</p>
          </div>
        </Link>
        <Link to="/club" className="case">
          <div className="ecurie">
            <img src={require("./img/casaqueClub.png")} alt="casaqueClub" className="casaque"/>
            <p className="nomEcurie">Club</p>
          </div>
        </Link>
      </div>
  </div>
  </>
)

export default App;