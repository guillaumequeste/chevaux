import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class AccueilXXL extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil XXL Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/xxl"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueil2013">
          <div className="titreAccueil">
            <Bounce top>
              <img
                src={require("../../img/xxl/casaqueXXL.png")}
                alt="casaqueXXL"
                className="casaqueAccueil"
              />
              <h5 className="annee">XXL</h5>
            </Bounce>
          </div>
          <Fade right>
            <NavLink to="/compoXXL" className="rubrique">
              <h6 className="titreRubrique">Compo</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/premiere_victoire_obstacle" className="rubrique border-black">
              <h6 className="titreRubrique">1ère victoire en obstacle</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/premiere_victoire_auteuil" className="rubrique border-black">
              <h6 className="titreRubrique">1ère victoire à Auteuil</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/journee_deux_victoires" className="rubrique border-black">
              <h6 className="titreRubrique">Journée à 2 victoires</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/premier_quinte_obstacle" className="rubrique border-black">
              <h6 className="titreRubrique">1er Quinté en obstacle</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/belle_promesse_victoire_groupeIII" className="rubrique border-black">
              <h6 className="titreRubrique">Victoire de Belle Promesse dans un Groupe III</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/belle_promesse_place_groupeIII" className="rubrique border-black">
              <h6 className="titreRubrique">5ème place de Belle Promesse dans un Groupe III</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/belle_promesse_listed" className="rubrique border-black">
              <h6 className="titreRubrique">Victoire de Belle Promesse dans une Listed</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/master_gold_listed" className="rubrique border-black">
              <h6 className="titreRubrique">Victoire de Master Gold dans une Listed</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/belle_promesse" className="rubrique border-white">
              <h6 className="titreRubrique">Belle Promesse</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/galante" className="rubrique border-white">
              <h6 className="titreRubrique">Galante d'Arthel</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/joly" className="rubrique border-white">
              <h6 className="titreRubrique">Joly And Bach</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/korum" className="rubrique border-white">
              <h6 className="titreRubrique">Korum</h6>
            </NavLink>
          </Fade>
          <Fade right>
            <NavLink to="/master_gold" className="rubrique border-white">
              <h6 className="titreRubrique">Master Gold</h6>
            </NavLink>
          </Fade>
        </div>
      </div>
    );
  }
}

export default AccueilXXL;
