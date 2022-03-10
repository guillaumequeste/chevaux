import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Belle_Promesse_Place_GroupeIII extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Belle Promesse victoire place groupe III Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/belle_promesse_place_groupeIII"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">5ème place de Belle Promesse dans un Groupe III</h5>
            <p className="infosPage">le 6 mars 2022 à Auteuil</p>
            <p className="infosPage">avec Théo Chevillard</p>
            <p className="infosPage">Prix Juigné</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_01.jpg")}
                  alt="auteuil_06032022_01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_02.jpg")}
                  alt="auteuil_06032022_02"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_03.jpg")}
                  alt="auteuil_06032022_03"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_04.jpg")}
                  alt="auteuil_06032022_04"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_05.jpg")}
                  alt="auteuil_06032022_05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_06.jpg")}
                  alt="auteuil_06032022_06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_07.jpg")}
                  alt="auteuil_06032022_07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_08.jpg")}
                  alt="auteuil_06032022_08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_09.jpg")}
                  alt="auteuil_06032022_09"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_10.jpg")}
                  alt="auteuil_06032022_10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_11.jpg")}
                  alt="auteuil_06032022_11"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_12.jpg")}
                  alt="auteuil_06032022_12"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/groupe_place/auteuil_06032022_13.jpg")}
                  alt="auteuil_06032022_13"
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

export default Belle_Promesse_Place_GroupeIII;
