import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class AccueilHippodromes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="divHippodromes">
            
            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-white">
                    <h6 className="titreRubrique">Liste</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/belgique" className="rubrique border-black">
                    <h6 className="titreRubrique">Belgique</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/nord" className="rubrique border-black">
                    <h6 className="titreRubrique">Nord</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/basse_normandie" className="rubrique border-black">
                    <h6 className="titreRubrique">Basse-Normandie</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/ile_de_france_haute_normandie" className="rubrique border-black">
                    <h6 className="titreRubrique">Ile-de-France & Haute-Normandie</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Est</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Ouest</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Anjou-Maine-Centre-Ouest</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Centre-Est</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Sud-Ouest</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Sud-Est</h6>
                </NavLink>
            </Fade>

            <Fade right>
                <NavLink to="/compo2013" className="rubrique border-black">
                    <h6 className="titreRubrique">Corse</h6>
                </NavLink>
            </Fade>
        </div>
      </div>
    );
  }
}

export default AccueilHippodromes;
