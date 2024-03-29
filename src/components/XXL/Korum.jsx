import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Korum extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Korum Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/korum"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Korum</h5>
            <p className="infosPage">16 courses</p>
            <p className="infosPage">2 victoires</p>
            <p className="infosPage">7 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum1.jpg")}
                  alt="korum1"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum02.jpg")}
                  alt="korum02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum03.jpg")}
                  alt="korum03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum04.jpg")}
                  alt="korum04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum05.jpg")}
                  alt="korum05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum06.jpg")}
                  alt="korum06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum07.jpg")}
                  alt="korum07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum08.jpg")}
                  alt="korum08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum_pompadour1.jpg")}
                  alt="korum_pompadour1"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum_pompadour2.jpg")}
                  alt="korum_pompadour2"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum_pompadour3.jpg")}
                  alt="korum_pompadour3"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum_reforme.jpg")}
                  alt="korum_reforme"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Korum;
