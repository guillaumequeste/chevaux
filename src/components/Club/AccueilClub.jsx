import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class AccueilClub extends Component {
  
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
                            <img src={require("../../img/casaqueClub.png")} alt="casaqueClub" className="casaqueAccueil"/>
                            <h5 className="annee">Club</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er Q+ à Longchamp</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1ère journée avec 2 victoires</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Eclipse Somolli</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Cayo Coco</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Diva du Dancing</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Cristal Pierji</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Drakkar Delo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Domino de Larré</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Al Rassoul</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Saam</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Loquen</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default AccueilClub