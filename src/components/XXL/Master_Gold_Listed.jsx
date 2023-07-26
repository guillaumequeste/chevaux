import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Master_Gold_Listed extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Master Gold 2eme Listed Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/master_gold_listed"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Victoire de Master Gold dans une Listed (sur tapis vert)</h5>
            <p className="infosPage">le 23 mai 2021 à Auteuil</p>
            <p className="infosPage">avec Etienne Capdet</p>
            <p className="infosPage">Prix Tanerko</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed01.jpg")}
                  alt="master_auteuil_listed01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed02.jpg")}
                  alt="master_auteuil_listed02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed03.jpg")}
                  alt="master_auteuil_listed03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed04.jpg")}
                  alt="master_auteuil_listed04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed05.jpg")}
                  alt="master_auteuil_listed05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed06.jpg")}
                  alt="master_auteuil_listed06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed07.jpg")}
                  alt="master_auteuil_listed07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed08.jpg")}
                  alt="master_auteuil_listed08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed09.jpg")}
                  alt="master_auteuil_listed09"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed10.jpg")}
                  alt="master_auteuil_listed10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed11.jpg")}
                  alt="master_auteuil_listed11"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed12.jpg")}
                  alt="master_auteuil_listed12"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed13.jpg")}
                  alt="master_auteuil_listed13"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed14.jpg")}
                  alt="master_auteuil_listed14"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_auteuil_listed/master_auteuil_listed15.jpg")}
                  alt="master_auteuil_listed15"
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

export default Master_Gold_Listed;
