import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Boken extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Boken de Nappes Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/boken"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieTop={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Boken</h5>
            <p className="infosPage">10 courses</p>
            <p className="infosPage">1 victoire</p>
            <p className="infosPage">5 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken01.jpg")}
                  alt="boken01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course01.jpg")}
                  alt="boken_course01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course02.jpg")}
                  alt="boken_course02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course03.jpg")}
                  alt="boken_course03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course04.jpg")}
                  alt="boken_course04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course05.jpg")}
                  alt="boken_course05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course06.jpg")}
                  alt="boken_course06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course07.jpg")}
                  alt="boken_course07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course08.jpg")}
                  alt="boken_course08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course09.jpg")}
                  alt="boken_course09"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course10.jpg")}
                  alt="boken_course10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course11.jpg")}
                  alt="boken_course11"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/boken/boken_course12.jpg")}
                  alt="boken_course12"
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

export default Boken;
