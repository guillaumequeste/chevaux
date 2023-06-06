import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class Jo_Way extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Jo Way de Nappes Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/jo_way"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurie2013={true} />
        <div className="accueilJo">
          <div className="titreAccueilJo">
            <Bounce top>
              <img
                src={require("../../img/jo/casaqueJo.png")}
                alt="casaque2013"
                className="casaqueAccueilJo"
              />
              <h5 className="anneeJo">Jo Way de Nappes</h5>
            </Bounce>
          </div>

            <div className="imgJo">
                <img
                    src={require("../../img/jo/jo01.jpg")}
                    alt="jo01"
                    className="jo01"
                />
            </div>

            <p>12 courses</p>
            <p>4 places</p> 
        </div>
      </div>
    );
  }
}

export default Jo_Way;
