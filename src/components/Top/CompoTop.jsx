import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class CompoTop extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Contact bases React"}
          link={"http://chevaux.guillaumequeste.fr"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueil2013">
          <div className="titreAccueil">
            <Bounce top>
              <img
                src={require("../../img/top/casaqueTop.png")}
                alt="casaqueTop"
                className="casaqueAccueil"
              />
              <h5 className="annee">Compo Top</h5>
            </Bounce>
          </div>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/top/compo/highlands01.jpg")}
                alt="highlands_d_allier"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Highlands d'Allier</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Cokoriko</i>
                    </p>
                    <p className="pInfos">
                      <i>Crouesty</i>
                    </p>
                    <p className="pInfos">chez Camille et Philippe Peltier</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/top/compo/kingdor01.jpg")}
                alt="kingdor"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Kingdor</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Kendargent</i>
                    </p>
                    <p className="pInfos">
                      <i>Coryphée</i>
                    </p>
                    <p className="pInfos">chez Carina Fey</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default CompoTop;
