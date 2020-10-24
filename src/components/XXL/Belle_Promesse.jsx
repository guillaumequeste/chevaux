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
                  src={require("../../img/xxl/belle_promesse/belle07.jpg")}
                  alt="belle07"
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

export default Belle_Promesse;
