import React from 'react';
import './App.css';
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Footer from './components/Footer'
import Helmet from './components/Helmet'
import { Link } from 'react-router-dom'

const App = () => (
  <>
    <Helmet title={"Accueil Chevaux"}
              link={"http://chevaux.guillaumequeste.fr"} />
    <Header />
    <HeaderMobile />
    <Footer />
    <div className="app">
      <div className="ligne">
        <Link to="/2013" className="case">
          <div className="ecurie">
            <img src={require("./img/2013/casaque2013.png")} alt="casaque2013" className="casaque"/>
            <p className="nomEcurie">2013</p>
          </div>
        </Link>
        <Link to="/2014" className="case case2014">
          <div className="ecurie">
            <img src={require("./img/2014/casaque2014.png")} alt="casaque2014" className="casaque"/>
            <p className="nomEcurie">2014</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/2015" className="case">
          <div className="ecurie">
            <img src={require("./img/2015/casaque2015.png")} alt="casaque2015" className="casaque"/>
            <p className="nomEcurie">2015</p>
          </div>
        </Link>
        <Link to="/club" className="case caseClub">
          <div className="ecurie">
            <img src={require("./img/club/casaqueClub.png")} alt="casaqueClub" className="casaque"/>
            <p className="nomEcurie">Club</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/xxl" className="case caseXXL">
          <div className="ecurie">
            <img src={require("./img/xxl/casaqueXXL.png")} alt="casaqueXXL" className="casaque"/>
            <p className="nomEcurie">XXL</p>
          </div>
        </Link>
        <Link to="/top" className="case caseTop">
          <div className="ecurie">
            <img src={require("./img/top/casaqueTop.png")} alt="casaqueTop" className="casaque"/>
            <p className="nomEcurie">Top</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/lady_wrung" className="case">
          <div className="ecurie">
            <img src={require("./img/lady/casaqueLady.png")} alt="casaqueLady" className="casaque"/>
            <p className="nomEcurie">Lady Wrung</p>
          </div>
        </Link>
        <Link to="/jo_way_de_nappes" className="case">
          <div className="ecurie">
          <img src={require("./img/jo/casaqueJo.png")} alt="casaqueJo" className="casaque"/>
            <p className="nomEcurie">Jo Way de Nappes</p>
          </div>
        </Link>
      </div>
  </div>
  </>
)

export default App;