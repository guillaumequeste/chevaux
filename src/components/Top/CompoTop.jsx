import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class CompoTop extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://chevaux.guillaumequeste.fr"} />
                <Header />
                <Footer />
                <div className="accueil2013">
                    <div className="titreAccueil">
                        <Bounce top>
                            <img src={require("../../img/top/casaqueTop.jpg")} alt="casaqueTop" className="casaqueAccueil"/>
                            <h5 className="annee">Compo Top</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/top/compo/highlands01.jpg")} alt="highlands_d_allier" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Highlands d'Allier</h3>
                                <h6 className="discipline">obstacle</h6>
                                <p className="pInfos">chez Camille et Philippe Peltier</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/top/compo/kingdor01.jpg")} alt="kingdor" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Kingdor</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">chez Carina Fey</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default CompoTop