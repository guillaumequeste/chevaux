import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Belle_Promesse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Belle Promesse Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/belle_promesse"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Belle Promesse</h5>
            <p className="infosPage">21 courses</p>
            <p className="infosPage">7 victoires</p>
            <p className="infosPage">8 places</p>
            <p className="infosPage">Gagnante de Listed</p>
            <p className="infosPage">Gagnante et placée de Groupe III</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle01.jpg")}
                  alt="belle01"
                  className="photoPageHorizontale photoBelle"
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
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle20.jpg")}
                  alt="belle20"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle21.jpg")}
                  alt="belle21"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle22.jpg")}
                  alt="belle22"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle23.jpg")}
                  alt="belle23"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle24.jpg")}
                  alt="belle24"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle25.jpg")}
                  alt="belle25"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle26.jpg")}
                  alt="belle26"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle27.jpg")}
                  alt="belle27"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle28.jpg")}
                  alt="belle28"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle29.jpg")}
                  alt="belle29"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle30.jpg")}
                  alt="belle30"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle31.jpg")}
                  alt="belle31"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/groupe_belle01.jpg")}
                  alt="groupe_belle01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/groupe_belle02.jpg")}
                  alt="groupe_belle02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/groupe_belle03.jpg")}
                  alt="groupe_belle03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/groupe_belle04.jpg")}
                  alt="groupe_belle04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle16.jpg")}
                  alt="victoire_belle16"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle17.jpg")}
                  alt="victoire_belle17"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle18.jpg")}
                  alt="victoire_belle18"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/victoire_belle19.jpg")}
                  alt="victoire_belle19"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed02.jpg")}
                  alt="belle_listed02"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed03.jpg")}
                  alt="belle_listed03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed07.jpg")}
                  alt="belle_listed07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed08.jpg")}
                  alt="belle_listed08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed14.jpg")}
                  alt="belle_listed14"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed15.jpg")}
                  alt="belle_listed15"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_listed17.jpg")}
                  alt="belle_listed17"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle32.jpg")}
                  alt="belle32"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle33.jpg")}
                  alt="belle33"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle34.jpg")}
                  alt="belle34"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle35.jpg")}
                  alt="belle35"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle36.jpg")}
                  alt="belle36"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle37.jpg")}
                  alt="belle37"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle38.jpg")}
                  alt="belle38"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle39.jpg")}
                  alt="belle39"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle40.jpg")}
                  alt="belle40"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle41.jpg")}
                  alt="belle41"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea02.jpg")}
                  alt="bellea02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea03.jpg")}
                  alt="bellea03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea03b.jpg")}
                  alt="bellea03b"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea04.jpg")}
                  alt="bellea04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea05.jpg")}
                  alt="bellea05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea05b.jpg")}
                  alt="bellea05b"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea06.jpg")}
                  alt="bellea06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea07.jpg")}
                  alt="bellea07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea07b.jpg")}
                  alt="bellea07b"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea08.jpg")}
                  alt="bellea08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea09.jpg")}
                  alt="bellea09"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/bellea10.jpg")}
                  alt="bellea10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/place_belle_groupe01.jpg")}
                  alt="place_belle_groupe01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/place_belle_groupe02.jpg")}
                  alt="place_belle_groupe02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/place_belle_groupe03.jpg")}
                  alt="place_belle_groupe03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/place_belle_groupe04.jpg")}
                  alt="place_belle_groupe04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_01.jpg")}
                  alt="belle_promesse_27032022_01"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_02.jpg")}
                  alt="belle_promesse_27032022_02"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_03.jpg")}
                  alt="belle_promesse_27032022_03"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_04.jpg")}
                  alt="belle_promesse_27032022_04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_05.jpg")}
                  alt="belle_promesse_27032022_05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_06.jpg")}
                  alt="belle_promesse_27032022_06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_07.jpg")}
                  alt="belle_promesse_27032022_07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_08.jpg")}
                  alt="belle_promesse_27032022_08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_09.jpg")}
                  alt="belle_promesse_27032022_09"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_10.jpg")}
                  alt="belle_promesse_27032022_10"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_11.jpg")}
                  alt="belle_promesse_27032022_11"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_12.jpg")}
                  alt="belle_promesse_27032022_12"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_13.jpg")}
                  alt="belle_promesse_27032022_13"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_14.jpg")}
                  alt="belle_promesse_27032022_14"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_15.jpg")}
                  alt="belle_promesse_27032022_15"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_16.jpg")}
                  alt="belle_promesse_27032022_16"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_17.jpg")}
                  alt="belle_promesse_27032022_17"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_18.jpg")}
                  alt="belle_promesse_27032022_18"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_19.jpg")}
                  alt="belle_promesse_27032022_19"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_20.jpg")}
                  alt="belle_promesse_27032022_20"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_27032022_21.jpg")}
                  alt="belle_promesse_27032022_21"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/14052022a.jpg")}
                  alt="14052022a"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/14052022b.jpg")}
                  alt="14052022b"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/14052022c.jpg")}
                  alt="14052022c"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/14052022d.jpg")}
                  alt="14052022d"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_01.jpg")}
                  alt="belle_14052022_01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_01a.jpg")}
                  alt="belle_14052022_01a"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_01b.jpg")}
                  alt="belle_14052022_01b"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_02.jpg")}
                  alt="belle_14052022_02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_03.jpg")}
                  alt="belle_14052022_03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_04.jpg")}
                  alt="belle_14052022_04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_14052022_05.jpg")}
                  alt="belle_14052022_05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/14052022e.jpg")}
                  alt="14052022e"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_01.jpg")}
                  alt="belle_promesse_20092022_01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_02.jpg")}
                  alt="belle_promesse_20092022_02"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_03.jpg")}
                  alt="belle_promesse_20092022_03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_04.jpg")}
                  alt="belle_promesse_20092022_04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_05.jpg")}
                  alt="belle_promesse_20092022_05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_06.jpg")}
                  alt="belle_promesse_20092022_06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_07.jpg")}
                  alt="belle_promesse_20092022_07"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_08.jpg")}
                  alt="belle_promesse_20092022_08"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_09.jpg")}
                  alt="belle_promesse_20092022_09"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_promesse_20092022_10.jpg")}
                  alt="belle_promesse_20092022_10"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_09102022_01.jpg")}
                  alt="belle_09102022_01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_09102022_02.jpg")}
                  alt="belle_09102022_02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_09102022_03.jpg")}
                  alt="belle_09102022_03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/belle_promesse/belle_09102022_04.jpg")}
                  alt="belle_09102022_04"
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
