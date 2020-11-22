import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class AccueilTop extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Accueil Top Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/top"} />
                <Header />
                <HeaderMobile />
                <Footer ecurieTop={true}/>
                <div className="accueil2013">
                    <div className="titreAccueil">
                        <Bounce top>
                            <img src={require("../../img/top/casaqueTop.png")} alt="casaqueTop" className="casaqueAccueil"/>
                            <h5 className="annee">Top</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/compoTop" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default AccueilTop