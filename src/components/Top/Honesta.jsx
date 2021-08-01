import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Honesta extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Honesta Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/honesta"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieTop={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Honesta</h5>
            <p className="infosPage">5 courses</p>
            <p className="infosPage"></p>
            <p className="infosPage">4 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta01.jpg")}
                  alt="honesta01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta02.jpg")}
                  alt="honesta02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta03.jpg")}
                  alt="honesta03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta04.jpg")}
                  alt="honesta04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta05.jpg")}
                  alt="honesta05"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta06.jpg")}
                  alt="honesta06"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta07.jpg")}
                  alt="honesta07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta08.jpg")}
                  alt="honesta08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta09.jpg")}
                  alt="honesta09"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta10.jpg")}
                  alt="honesta10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta_saint_malo01.jpg")}
                  alt="honesta_saint_malo01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta_saint_malo02.jpg")}
                  alt="honesta_saint_malo02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta_saint_malo03.jpg")}
                  alt="honesta_saint_malo03"
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

export default Honesta;
