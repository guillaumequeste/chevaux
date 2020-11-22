import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Journee_deux_victoires extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Journée 2 victoires Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/journee_deux_victoires"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Journée à 2 victoires</h5>
            <p className="infosPage">et AG à Auteuil (avec Eclair Etincelle et Master Gold)</p>
            <p className="infosPage">le 11 octobre 2020</p>
            <p className="infosPage">Joly and Bach à Paray-le-Monial</p>
            <p className="infosPage">Galanted'Arthel à Paray-le-Monial</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/eclair_etincelle.jpg")}
                  alt="eclair_etincelle"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/maisons_laffitte.jpg")}
                  alt="maisons_laffitte"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/auteuil01.jpg")}
                  alt="auteuil01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/auteuil02.jpg")}
                  alt="auteuil02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/victoire_joly01.jpg")}
                  alt="victoire_joly01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/victoire_joly02.jpg")}
                  alt="victoire_joly02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/victoire_joly03.jpg")}
                  alt="victoire_joly03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/joly_poteau.jpg")}
                  alt="joly_poteau"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/joly_victoire.jpg")}
                  alt="joly_victoire"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/victoire_galante01.jpg")}
                  alt="victoire_galante01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/victoire_galante02.jpg")}
                  alt="victoire_galante02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/victoire_galante03.jpg")}
                  alt="joly_victovictoire_galante03ire"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/galante_poteau.jpg")}
                  alt="galante_poteau"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/galante_victoire.jpg")}
                  alt="galante_victoire"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/master01.jpg")}
                  alt="master01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/journee_deux_victoires/master02.jpg")}
                  alt="master02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Journee_deux_victoires;
