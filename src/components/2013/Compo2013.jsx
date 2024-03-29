import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Compo2013 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Compo 2013 Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/compo2013"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueil2013">
          <div className="titreAccueil">
            <Bounce top>
              <img
                src={require("../../img/2013/casaque2013.png")}
                alt="casaque2013"
                className="casaqueAccueil"
              />
              <h5 className="annee">Compo 2013</h5>
            </Bounce>
          </div>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/benodet1.jpeg")}
                alt="benodet"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Bénodet</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">12 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">7 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Orpen</i>
                    </p>
                    <p className="pInfos">
                      <i>Anchusa</i>
                    </p>
                    <p className="pInfos">Jacques Heloury</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/falcolina1.jpg")}
                alt="falcolina"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Falcolina</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">12 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">4 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Falco</i>
                    </p>
                    <p className="pInfos">
                      <i>Flamenba</i>
                    </p>
                    <p className="pInfos">chez Patrick Monfort</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/pan2.jpg")}
                alt="pan_di_stelle"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Pan di Stelle</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">16 courses</p>
                      <p className="pInfos">1 victoire</p>
                      <p className="pInfos">9 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Panis</i>
                    </p>
                    <p className="pInfos">
                      <i>Orion Queen</i>
                    </p>
                    <p className="pInfos">chez Carlos & Yann Lerner</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/pedregalejo2.jpeg")}
                alt="pedregalejo"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Pedregalejo</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">14 courses</p>
                      <p className="pInfos">1 victoire</p>
                      <p className="pInfos">5 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>High Chaparral</i>
                    </p>
                    <p className="pInfos">
                      <i>Highphar</i>
                    </p>
                    <p className="pInfos">chez Philippe Van de Poële</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/shingueti1.jpg")}
                alt="shingueti"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Shingueti</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">12 courses</p>
                      <p className="pInfos">3 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Desert Style</i>
                    </p>
                    <p className="pInfos">
                      <i>Spain</i>
                    </p>
                    <p className="pInfos">chez Keven Borgel</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/sole1.jpg")}
                alt="sole_reign"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Sole Reign</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">16 courses</p>
                      <p className="pInfos">1 victoire</p>
                      <p className="pInfos">1 place</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Desert Style</i>
                    </p>
                    <p className="pInfos">
                      <i>Hokey Pokey</i>
                    </p>
                    <p className="pInfos">chez Tony Clout</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/solside1.jpg")}
                alt="solside"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Solside</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">2 courses</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Country Reel</i>
                    </p>
                    <p className="pInfos">
                      <i>Carabiola</i>
                    </p>
                    <p className="pInfos">chez Antoine de Watrigant</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/sweet1.jpg")}
                alt="sweet_smoke"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Sweet Smoke</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">15 courses</p>
                      <p className="pInfos">8 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Redback</i>
                    </p>
                    <p className="pInfos">
                      <i>Sweet Alabama</i>
                    </p>
                    <p className="pInfos">chez Mathieu Boutin</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2013/compo/tchoupi1.jpg")}
                alt="tchoupi_chop"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">T'Choupi Chop</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">8 courses</p>
                      <p className="pInfos">1 place</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Indian Rocket</i>
                    </p>
                    <p className="pInfos">
                      <i>Chopinette</i>
                    </p>
                    <p className="pInfos">chez Antoine de Watrigant</p>
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

export default Compo2013;
