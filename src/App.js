import React from 'react';
import './CSS/App.css';
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Helmet from './components/Helmet'
import { Link } from 'react-router-dom'

const App = () => (
  <>
    <Helmet title={"Accueil Chevaux"}
              link={"http://chevaux.guillaumequeste.fr"} />
    <Header />
    <HeaderMobile />

    <div className="app">
      <div className="ligne">
        <Link to="/kaleotic" className="case">
          <div className="ecurie">
            <img src={require("./img/kaleotic/casaqueKaleotic.png")} alt="casaqueKaleotic" className="casaque"/>
            <p className="nomEcurie">Kaleotic</p>
          </div>
        </Link>
        <Link to="/lady_wrung" className="case">
          <div className="ecurie">
            <img src={require("./img/lady/casaqueLady.png")} alt="casaqueLady" className="casaque"/>
            <p className="nomEcurie">Lady Wrung</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
      <Link to="/xxl" className="case">
          <div className="ecurie">
            <img src={require("./img/xxl/casaqueXXL.png")} alt="casaqueXXL" className="casaque"/>
            <p className="nomEcurie">XXL</p>
          </div>
        </Link>
        <Link to="/top" className="case">
          <div className="ecurie">
            <img src={require("./img/top/casaqueTop.png")} alt="casaqueTop" className="casaque"/>
            <p className="nomEcurie">Top</p>
          </div>
        </Link>
      </div>
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
        <Link to="/club" className="case">
          <div className="ecurie">
            <img src={require("./img/club/casaqueClub.png")} alt="casaqueClub" className="casaque"/>
            <p className="nomEcurie">Club</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/jo_way" className="case">
          <div className="ecurie">
          <img src={require("./img/jo/casaqueJo.png")} alt="casaqueJo" className="casaque"/>
            <p className="nomEcurie">Jo Way</p>
          </div>
        </Link>
      </div>
    </div>

    <div className="app2">
      <div className="ligne2">
        <Link to="/kaleotic" className="case2">
          <div className="ecurie">
            <img src={require("./img/kaleotic/casaqueKaleotic.png")} alt="casaqueKaleotic" className="casaque"/>
            <p className="nomEcurie">Kaleotic</p>
          </div>
        </Link>
        <Link to="/lady_wrung" className="case2">
          <div className="ecurie">
            <img src={require("./img/lady/casaqueLady.png")} alt="casaqueLady" className="casaque"/>
            <p className="nomEcurie">Lady Wrung</p>
          </div>
        </Link>
        <Link to="/xxl" className="case2">
          <div className="ecurie">
            <img src={require("./img/xxl/casaqueXXL.png")} alt="casaqueXXL" className="casaque"/>
            <p className="nomEcurie">XXL</p>
          </div>
        </Link>
        <Link to="/jo_way" className="case2">
          <div className="ecurie">
          <img src={require("./img/jo/casaqueJo.png")} alt="casaqueJo" className="casaque"/>
            <p className="nomEcurie">Jo Way</p>
          </div>
        </Link>
        <Link to="/top" className="case2">
          <div className="ecurie">
            <img src={require("./img/top/casaqueTop.png")} alt="casaqueTop" className="casaque"/>
            <p className="nomEcurie">Top</p>
          </div>
        </Link>
      </div>
      <div className="ligne2">
        <Link to="/club" className="case2">
          <div className="ecurie">
            <img src={require("./img/club/casaqueClub.png")} alt="casaqueClub" className="casaque"/>
            <p className="nomEcurie">Club</p>
          </div>
        </Link>
        <Link to="/2015" className="case2">
          <div className="ecurie">
            <img src={require("./img/2015/casaque2015.png")} alt="casaque2015" className="casaque"/>
            <p className="nomEcurie">2015</p>
          </div>
        </Link>
        <Link to="/2014" className="case2 case2014">
          <div className="ecurie">
            <img src={require("./img/2014/casaque2014.png")} alt="casaque2014" className="casaque"/>
            <p className="nomEcurie">2014</p>
          </div>
        </Link>
        <Link to="/2013" className="case2">
          <div className="ecurie">
            <img src={require("./img/2013/casaque2013.png")} alt="casaque2013" className="casaque"/>
            <p className="nomEcurie">2013</p>
          </div>
        </Link>
      </div>
    </div>
    
  </>
)

export default App;