import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class Accueil2013 extends Component {
  
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
                            <img src={require("../../img/2013/casaque2013.png")} alt="casaque2013" className="casaqueAccueil"/>
                            <h5 className="annee">2013</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <NavLink to="/compo2013" className="rubrique">
                            <h6 className="titreRubrique">Compo</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er partant (galop)</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant (galop)</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er gagnant à Longchamp</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er blacktype</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">1er partant dans un Quinté</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Bénodet</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Falcolina</h6>
                        </NavLink>
                    </Fade>
                    <Fade right>
                        <NavLink to="/" className="rubrique">
                            <h6 className="titreRubrique">Pan di Stelle</h6>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Accueil2013