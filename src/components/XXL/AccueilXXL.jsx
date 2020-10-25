import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class AccueilXXL extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://chevaux.guillaumequeste.fr"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="accueil2013">
                    <div className="titreAccueil">
                        <Bounce top>
                            <img src={require("../../img/xxl/casaqueXXL.png")} alt="casaqueXXL" className="casaqueAccueil"/>
                            <h5 className="annee">XXL</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/compoXXL" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premiere_victoire_obstacle" className="rubrique">
                            <h6 className="titreRubrique">1ère victoire en obstacle</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premiere_victoire_auteuil" className="rubrique">
                            <h6 className="titreRubrique">1ère victoire à Auteuil</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/journee_deux_victoires" className="rubrique">
                            <h6 className="titreRubrique">Journée à 2 victoires</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premier_quinte_obstacle" className="rubrique">
                            <h6 className="titreRubrique">1er Quinté en obstacle</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/belle_promesse" className="rubrique">
                            <h6 className="titreRubrique">Belle Promesse</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default AccueilXXL