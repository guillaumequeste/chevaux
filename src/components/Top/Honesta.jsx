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
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Honesta</h5>
            <p className="infosPage">3 courses</p>
            <p className="infosPage"></p>
            <p className="infosPage">2 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/honesta/honesta01.jpg")}
                  alt="honesta01"
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
