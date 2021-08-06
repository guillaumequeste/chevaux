import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class CompoTop extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Compo Top Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/compoTop"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieTop={true}/>
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
            <div className="cheval">
              <img
                src={require("../../img/top/compo/apita01.jpg")}
                alt="apita"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Apita</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">3 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Olympic Glory</i>
                    </p>
                    <p className="pInfos">
                      <i>Nova Luz</i>
                    </p>
                    <p className="pInfos">chez Gianluca Bietolini</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/top/compo/boken01.jpg")}
                alt="boken"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Boken</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">6 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">3 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Kendargent</i>
                    </p>
                    <p className="pInfos">
                      <i>Baia Chope</i>
                    </p>
                    <p className="pInfos">chez Ludovic Gadbin</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
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
                      <p className="pInfos">8 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">3 places</p>
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
            <div className="cheval">
              <img
                src={require("../../img/top/compo/hola01.jpg")}
                alt="hola_de_nappes"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Hola de Nappes</h3>
                <h6 className="discipline">trot</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">11 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">6 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Voltigeur de Myrt</i>
                    </p>
                    <p className="pInfos">
                      <i>Vespa de Nappes</i>
                    </p>
                    <p className="pInfos">chez Romain Derieux</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/top/compo/honesta01.jpg")}
                alt="kingdor"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Honesta</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">5 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">4 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Honor Code</i>
                    </p>
                    <p className="pInfos">
                      <i>Cotton's Point</i>
                    </p>
                    <p className="pInfos">chez David Windrif</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
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
                      <p className="pInfos">1 course</p>
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
