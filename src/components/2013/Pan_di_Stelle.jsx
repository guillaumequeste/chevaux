import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Pan_di_Stelle extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Pan di Stelle Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/pan_di_stelle"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Pan di Stelle</h5>
                        <p className="infosPage">16 courses</p>
                        <p className="infosPage">1 victoire</p>
                        <p className="infosPage">9 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan01.jpg")} alt="pan01" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan02.jpg")} alt="pan02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan_dieppe01.jpg")} alt="pan_dieppe01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan_dieppe02.jpg")} alt="pan_dieppe02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan_dieppe03.jpg")} alt="pan_dieppe03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan_dieppe04.jpg")} alt="pan_dieppe04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan_dieppe05.jpg")} alt="pan_dieppe05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/pan_dieppe06.jpg")} alt="pan_dieppe06" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/victoire_pan_di_stelle03.jpg")} alt="victoire_pan_di_stelle03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/pan/victoire_pan_di_stelle04.jpg")} alt="victoire_pan_di_stelle04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pan_di_Stelle