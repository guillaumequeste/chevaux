import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class Accueil2014 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Accueil 2014 Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/2014"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="accueil2013">
                    <div className="titreAccueil">
                        <Bounce top>
                            <img src={require("../../img/2014/casaque2014.png")} alt="casaque2014" className="casaqueAccueil"/>
                            <h5 className="annee">2014</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/compo2014" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premier_partant_trot" className="rubrique">
                            <h6 className="titreRubrique">1er partant au trot</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premier_gagnant_trot" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant au trot</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premiere_place_dieppe" className="rubrique">
                            <h6 className="titreRubrique">1ère place à Dieppe</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premier_gagnant_dieppe" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant à Dieppe</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premier_gagnant_vincennes" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant à Vincennes</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/auteur2014" className="rubrique">
                            <h6 className="titreRubrique">Auteur</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/baldi_star" className="rubrique">
                            <h6 className="titreRubrique">Baldi Star</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/borsalino_du_jal" className="rubrique">
                            <h6 className="titreRubrique">Borsalino du Jal</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/claudia_eria" className="rubrique">
                            <h6 className="titreRubrique">Claudia Eria</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/kilava" className="rubrique">
                            <h6 className="titreRubrique">Kilava</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/magic_miles" className="rubrique">
                            <h6 className="titreRubrique">Magic Miles</h6>
                        </NavLink>
                    </Fade>
                    
                    <Fade right>
                        <NavLink to="/unrefundable2014" className="rubrique">
                            <h6 className="titreRubrique">Unrefundable</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Accueil2014