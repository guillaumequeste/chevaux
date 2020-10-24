import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
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
                <HeaderMobile />
                <Footer />
                <div className="accueil2013">
                    <div className="titreAccueil">
                        <Bounce top>
                            <img src={require("../../img/club/casaqueClub.png")} alt="casaqueClub" className="casaqueAccueil"/>
                            <h5 className="annee">Club</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/compoClub" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premiere_victoire_quinte" className="rubrique">
                            <h6 className="titreRubrique">1ère victoire dans un Qinté+</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/premiere_journee_2_victoires" className="rubrique">
                            <h6 className="titreRubrique">1ère journée avec 2 victoires</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/al_rassoul" className="rubrique">
                            <h6 className="titreRubrique">Al Rassoul</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/cayo_coco" className="rubrique">
                            <h6 className="titreRubrique">Cayo Coco</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/cristal_pierji_club" className="rubrique">
                            <h6 className="titreRubrique">Cristal Pierji</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/diva_du_dancing" className="rubrique">
                            <h6 className="titreRubrique">Diva du Dancing</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/domino_de_larre" className="rubrique">
                            <h6 className="titreRubrique">Domino de Larré</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/drakkar_delo_club" className="rubrique">
                            <h6 className="titreRubrique">Drakkar Delo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/eclipse_somolli" className="rubrique">
                            <h6 className="titreRubrique">Eclipse Somolli</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/loquen" className="rubrique">
                            <h6 className="titreRubrique">Loquen</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/saam" className="rubrique">
                            <h6 className="titreRubrique">Saam</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default AccueilClub