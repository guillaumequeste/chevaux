import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class CompoXXL extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Compo XXL Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/compoXXL"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueil2013">
          <div className="titreAccueil">
            <Bounce top>
              <img
                src={require("../../img/xxl/casaqueXXL.png")}
                alt="casaqueXXL"
                className="casaqueAccueil"
              />
              <h5 className="annee">Compo XXL</h5>
            </Bounce>
          </div>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/belle1.jpg")}
                alt="belle_promesse"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Belle Promesse</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">21 courses</p>
                      <p className="pInfos">7 victoires</p>
                      <p className="pInfos">8 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Fuissé</i>
                    </p>
                    <p className="pInfos">
                      <i>Promets Moi</i>
                    </p>
                    <p className="pInfos">chez Isabelle Gallorini</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/borenis1.jpg")}
                alt="borenis"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Borénis</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">10 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">6 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Barastraight</i>
                    </p>
                    <p className="pInfos">
                      <i>Castilly</i>
                    </p>
                    <p className="pInfos">chez Gabriel Leenders</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/eclair1.jpg")}
                alt="eclair_etincelle"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Eclair Etincelle</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">9 courses</p>
                      <p className="pInfos">1 victoire</p>
                      <p className="pInfos">2 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Authorized</i>
                    </p>
                    <p className="pInfos">
                      <i>Nucella</i>
                    </p>
                    <p className="pInfos">chez Pascal Adda</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/elcondor1.jpg")}
                alt="elcond_or_forlonge"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Elcond'Or Forlonge</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">5 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">3 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Rio de la Plata</i>
                    </p>
                    <p className="pInfos">
                      <i>Néra Maria</i>
                    </p>
                    <p className="pInfos">
                      chez Augustin Adeline de Boisbrunet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/escort1.jpg")}
                alt="escort_groove"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Escort'groove</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">1 course</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">1 place</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Balko</i>
                    </p>
                    <p className="pInfos">
                      <i>Escort'woman</i>
                    </p>
                    <p className="pInfos">
                      chez Augustin Adeline de Boisbrunet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/everybody1.jpg")}
                alt="everybodywantsme"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Everybodywantsme</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">4 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Turgeon</i>
                    </p>
                    <p className="pInfos">
                      <i>Nobodywantsme</i>
                    </p>
                    <p className="pInfos">chez Pascal Adda</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/gaby1.jpg")}
                alt="gaby_oh_gaby"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Gaby Oh Gaby</h3>
                <h6 className="discipline">obstacle</h6>
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
                      <i>Dragon Dancer</i>
                    </p>
                    <p className="pInfos">
                      <i>Je Te Donne</i>
                    </p>
                    <p className="pInfos">chez Isabelle Gallorini</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/galante1.jpg")}
                alt="galante_d_arthel"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Galante d'Arthel</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">19 courses</p>
                      <p className="pInfos">3 victoires</p>
                      <p className="pInfos">10 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Cokoriko</i>
                    </p>
                    <p className="pInfos">
                      <i>La Fée d'Arthel</i>
                    </p>
                    <p className="pInfos">chez Emmanuel Clayeux</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/gaspachos1.jpg")}
                alt="gaspachos"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Gaspacho's</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">9 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos">4 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Bach</i>
                    </p>
                    <p className="pInfos">
                      <i>Six Royale</i>
                    </p>
                    <p className="pInfos">chez Emmanuel Clayeux</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/glasgow1.jpg")}
                alt="glasgow_allen"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Glasgow Allen</h3>
                <h6 className="discipline">obstacle</h6>
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
                      <i>American Post</i>
                    </p>
                    <p className="pInfos">
                      <i>Reaction</i>
                    </p>
                    <p className="pInfos">chez Emmanuel Clayeux</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/gueule1.jpg")}
                alt="gueule_de_loup"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Gueule de Loup</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">2 courses</p>
                      <p className="pInfos"></p>
                      <p className="pInfos"></p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Khalkevi</i>
                    </p>
                    <p className="pInfos">
                      <i>Laurana</i>
                    </p>
                    <p className="pInfos">chez Emmanuel Clayeux</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/joly1.jpg")}
                alt="joly_and_bach"
                className="imgVerticale"
              />
              <div className="infos">
                <h3 className="nomCheval">Joly And Bach</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">10 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">3 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Bach</i>
                    </p>
                    <p className="pInfos">
                      <i>Joly Berengère</i>
                    </p>
                    <p className="pInfos">chez Emmanuel Clayeux</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/korum1.jpg")}
                alt="korum"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Korum</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">16 courses</p>
                      <p className="pInfos">2 victoires</p>
                      <p className="pInfos">7 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Balko</i>
                    </p>
                    <p className="pInfos">
                      <i>Baby Flaw</i>
                    </p>
                    <p className="pInfos">
                      chez Augustin Adeline de Boisbrunet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div to="/" className="cheval">
              <img
                src={require("../../img/xxl/compo/master1.jpg")}
                alt="master_gold"
                className="imgHorizontale"
              />
              <div className="infos">
                <h3 className="nomCheval">Master Gold</h3>
                <h6 className="discipline">obstacle</h6>
                <div className="divDetailsCompo">
                  <div className="resultats">
                    <div className="resultats2">
                      <p className="pInfos">19 courses</p>
                      <p className="pInfos">3 victoires</p>
                      <p className="pInfos">7 places</p>
                    </div>
                  </div>
                  <div className="divInfos">
                    <p className="pInfos">
                      <i>Masterstroke</i>
                    </p>
                    <p className="pInfos">
                      <i>Flèche Restée</i>
                    </p>
                    <p className="pInfos">
                      chez Augustin Adeline de Boisbrunet
                    </p>
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

export default CompoXXL;
