import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Premiere_victoire_auteuil extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Première victoire Auteuil Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/premiere_victoire_auteuil"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">1ère victoire à Auteuil</h5>
            <p className="infosPage">Belle Promesse</p>
            <p className="infosPage">le 1er septembre 2020</p>
            <p className="infosPage">avec Thomas Beaurain</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil01.jpg")}
                  alt="1ere_victoire_auteuil01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil02.jpg")}
                  alt="1ere_victoire_auteuil02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil03.jpg")}
                  alt="1ere_victoire_auteuil03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil04.jpg")}
                  alt="1ere_victoire_auteuil04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil05.jpg")}
                  alt="1ere_victoire_auteuil05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil06.jpg")}
                  alt="1ere_victoire_auteuil06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/victoire_belle01.jpg")}
                  alt="victoire_belle01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/victoire_belle02.jpg")}
                  alt="victoire_belle02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/victoire_belle03.jpg")}
                  alt="victoire_belle03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/victoire_belle04.jpg")}
                  alt="victoire_belle04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/victoire_belle05.jpg")}
                  alt="victoire_belle05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/photo_victoire.jpg")}
                  alt="photo_victoire"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_auteuil/1ere_victoire_auteuil07.jpg")}
                  alt="1ere_victoire_auteuil07"
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

export default Premiere_victoire_auteuil;
