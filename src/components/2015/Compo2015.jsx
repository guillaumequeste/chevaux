import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Compo2015 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Compo 2015 Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/compo2015"}
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
              <h5 className="annee">Compo 2015</h5>
            </Bounce>
          </div>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2014/compo/auteur1.jpg")}
                alt="auteur"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Auteur</h3>
                <h6 className="discipline">trot</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">4 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">2 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Overtrick</i>
                    </p>
                    <p className="pInfos">
                      <i>Oneso</i>
                    </p>
                    <p className="pInfos">chez Mickaël Cormy</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/beynostorm1.jpg")}
                alt="beynostorm"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Beynostorm</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">1 course</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Stormy River</i>
                    </p>
                    <p className="pInfos">
                      <i>Beynotown</i>
                    </p>
                    <p className="pInfos">chez Jérôme Reynier</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/countess1.jpg")}
                alt="countess_allegro"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Countess Allegro</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">13 courses</p>
                      <p className="pInfos">6 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Sageburg</i>
                    </p>
                    <p className="pInfos">
                      <i>Chansonette</i>
                    </p>
                    <p className="pInfos">chez Mathieu Boutin</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/cristal2.jpeg")}
                alt="cristal_pierji"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Cristal Pierji</h3>
                <h6 className="discipline">trot</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">11 courses</p>
                      <p className="pInfos">3 victoires</p>
                      <p className="pInfos">5 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Otello Pierji</i>
                    </p>
                    <p className="pInfos">
                      <i>Louisiane Pierji</i>
                    </p>
                    <p className="pInfos">chez Mickaël Cormy</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/drakkar1.jpg")}
                alt="drakkar_delo"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Drakkar Delo</h3>
                <h6 className="discipline">trot</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">8 courses</p>
                      <p className="pInfos">1 victoire</p>
                      <p className="pInfos">4 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Texas Charm</i>
                    </p>
                    <p className="pInfos">
                      <i>Utanema Didef</i>
                    </p>
                    <p className="pInfos">chez Laurent-Claude Abrivard</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/park1.jpg")}
                alt="park_square"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Park Square</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">9 courses</p>
                      <p className="pInfos">1 place</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Myboycharlie</i>
                    </p>
                    <p className="pInfos">
                      <i>Adeje Park</i>
                    </p>
                    <p className="pInfos">chez Stéphane Cerulis</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/unrefundable1.jpg")}
                alt="unrefundable"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Unrefundable</h3>
                <h6 className="discipline">trot</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">21 courses</p>
                      <p className="pInfos">1 victoire</p>
                      <p className="pInfos">13 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Offshore Dream</i>
                    </p>
                    <p className="pInfos">
                      <i>Lilyjessbrand</i>
                    </p>
                    <p className="pInfos">chez Pierre Vercruysse</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="cheval">
              <img
                src={require("../../img/2015/compo/valley1.jpg")}
                alt="valley_kid"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Valley Kid</h3>
                <h6 className="discipline">plat</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">11 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">5 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Kendargent</i>
                    </p>
                    <p className="pInfos">
                      <i>Valera</i>
                    </p>
                    <p className="pInfos">chez Patricia Butel</p>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Compo2015;
