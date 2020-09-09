import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class Accueil2014 extends Component {
  
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
                            <img src={require("../../img/casaque2014.png")} alt="casaque2014" className="casaqueAccueil"/>
                            <h5 className="annee">2014</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er partant au trot</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant au trot</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant à Vincennes</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er partant à Dieppe</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1ère place à Dieppe</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant à Dieppe</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Kilava</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Borsalino du Jal</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Claudia Eria</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Magic Miles</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Baldi Star</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Unrefundable</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Auteur</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Accueil2014