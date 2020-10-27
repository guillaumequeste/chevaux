import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Belle_Promesse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Belle Promesse bases React"}
          link={"http://chevaux.guillaumequeste.fr"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Belle Promesse</h5>
            <p className="infosPage">8 courses</p>
            <p className="infosPage">3 victoires</p>
            <p className="infosPage">2 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle01.jpg")}
                  alt="belle01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle02.jpg")}
                  alt="belle02"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle03.jpg")}
                  alt="belle03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle04.jpg")}
                  alt="belle04"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle05.jpg")}
                  alt="belle05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle06.jpg")}
                  alt="belle06"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle_bordeaux01.jpg")}
                  alt="victoire_belle_bordeaux01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle_bordeaux03.jpg")}
                  alt="victoire_belle_bordeaux03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle_bordeaux05.jpg")}
                  alt="victoire_belle_bordeaux05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle07.jpg")}
                  alt="belle07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle08.jpg")}
                  alt="belle08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle01.jpg")}
                  alt="victoire_belle01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle03.jpg")}
                  alt="victoire_belle03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle05.jpg")}
                  alt="victoire_belle05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle10.jpg")}
                  alt="belle10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle12.jpg")}
                  alt="belle12"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle13.jpg")}
                  alt="belle13"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle14.jpg")}
                  alt="belle14"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle15.jpg")}
                  alt="belle15"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle16.jpg")}
                  alt="belle16"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle06.jpg")}
                  alt="victoire_belle06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle07.jpg")}
                  alt="victoire_belle07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle08.jpg")}
                  alt="victoire_belle08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle09.jpg")}
                  alt="victoire_belle09"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle10.jpg")}
                  alt="victoire_belle10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle11.jpg")}
                  alt="victoire_belle11"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle12.jpg")}
                  alt="victoire_belle12"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle13.jpg")}
                  alt="victoire_belle13"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle14.jpg")}
                  alt="victoire_belle14"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle15.jpg")}
                  alt="victoire_belle15"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle17.jpg")}
                  alt="belle17"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle18.jpg")}
                  alt="belle18"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle19.jpg")}
                  alt="belle19"
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

export default Belle_Promesse;
