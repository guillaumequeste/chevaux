import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Master_Gold extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Master Gold Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/master_gold"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Master Gold</h5>
            <p className="infosPage">17 courses</p>
            <p className="infosPage">2 victoires dont 1 Listed</p>
            <p className="infosPage">6 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master01.jpg")}
                  alt="master01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master02.jpg")}
                  alt="master02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master03.jpg")}
                  alt="master03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master04.jpg")}
                  alt="master04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_toulouse01.jpg")}
                  alt="master_toulouse01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_toulouse02.jpg")}
                  alt="master_toulouse02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_toulouse03.jpg")}
                  alt="master_toulouse03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_paray01.jpg")}
                  alt="master_paray01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_paray02.jpg")}
                  alt="master_paray02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_paray03.jpg")}
                  alt="master_paray03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_paray04.jpg")}
                  alt="master_paray04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_nancy01.jpg")}
                  alt="master_nancy01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_nancy02.jpg")}
                  alt="master_nancy02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_nancy03.jpg")}
                  alt="master_nancy03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil01.jpg")}
                  alt="master_auteuil01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil02.jpg")}
                  alt="master_auteuil02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil03.jpg")}
                  alt="master_auteuil03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil04.jpg")}
                  alt="master_auteuil04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed01.jpg")}
                  alt="master_auteuil_listed01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed02.jpg")}
                  alt="master_auteuil_listed02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed03.jpg")}
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
                  src={require("../../img/xxl/master_gold/master_auteuil_listed04.jpg")}
                  alt="master_auteuil_listed04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed05.jpg")}
                  alt="master_auteuil_listed05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed06.jpg")}
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
                  src={require("../../img/xxl/master_gold/master_auteuil_listed07.jpg")}
                  alt="master_auteuil_listed07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed08.jpg")}
                  alt="master_auteuil_listed08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed09.jpg")}
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
                  src={require("../../img/xxl/master_gold/master_auteuil_listed10.jpg")}
                  alt="master_auteuil_listed10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_auteuil_listed11.jpg")}
                  alt="master_auteuil_listed11"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master05.jpg")}
                  alt="master05"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master161021_01.jpg")}
                  alt="master161021_01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master161021_02.jpg")}
                  alt="master161021_02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master161021_03.jpg")}
                  alt="master161021_03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_20052022_01.jpg")}
                  alt="master_20052022_01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_20052022_02.jpg")}
                  alt="master_20052022_02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_20052022_03.jpg")}
                  alt="master_20052022_03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master_20052022_04.jpg")}
                  alt="master_20052022_04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/master_gold/master04062022.jpg")}
                  alt="master04062022"
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

export default Master_Gold;
