import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Auteur2014 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Auteur 2014 Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/auteur2014"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Auteur</h5>
                        <p className="infosPage">32 courses</p>
                        <p className="infosPage">3 victoires</p>
                        <p className="infosPage">20 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur01.jpg")} alt="auteur01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur02.jpg")} alt="auteur02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur03.jpg")} alt="auteur03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur04.jpg")} alt="auteur04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur05.jpg")} alt="auteur05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur06.jpg")} alt="auteur06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur07.jpg")} alt="auteur07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur08.jpg")} alt="auteur08" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/auteur/auteur09.jpg")} alt="auteur09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auteur2014