import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class Accueil2015 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil 2015 Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/2015"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueil2013">
          <div className="titreAccueil">
            <Bounce top>
              <img
                src={require("../../img/2015/casaque2015.png")}
                alt="casaque2015"
                className="casaqueAccueil"
              />
              <h5 className="annee">2015</h5>
            </Bounce>
          </div>
          <Fade right>
            <NavLink to="/compo2015" className="rubrique">
              <h6 className="titreRubrique">Compo</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/auteur2015" className="rubrique border-white">
              <h6 className="titreRubrique">Auteur</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/cristal_pierji2015" className="rubrique border-white">
              <h6 className="titreRubrique">Cristal Pierji</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/drakkar_delo2015" className="rubrique border-white">
              <h6 className="titreRubrique">Drakkar Delo</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/unrefundable2015" className="rubrique border-white">
              <h6 className="titreRubrique">Unrefundable</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/valley_kid" className="rubrique border-white">
              <h6 className="titreRubrique">Valley Kid</h6>
            </NavLink>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Accueil2015;
