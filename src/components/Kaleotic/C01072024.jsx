import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C01072024 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Kaleotic 1er juillet 2024"}
                        link={"http://chevaux.guillaumequeste.fr/Kaleotic_01072024"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">1er juillet 2024</h3>
                        <h5 className="titreKaleoticCourses2">Clairefontaine</h5>
                        <h5 className="titreKaleoticCourses2">Prix Ville de Saint-Arnoult (Prix des Forsythias)</h5>
                        <h5 className="titreKaleoticCourses2">Handicap</h5>
                        <h5 className="titreKaleoticCourses2">Réf : 10</h5>
                        <h5 className="titreKaleoticCourses2">3 400m Haies</h5>
                        <h5 className="titreKaleoticCourses2">15 partants</h5>
                        <h5 className="titreKaleoticCourses3">7ème</h5>
                    </Bounce>

                    <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseLady"
                        />
                    </Link>

                    <Link to="/kaleotic_courses" className="retour">
                        <span className="retour">Retour</span>
                    </Link>

                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_01.jpg")} alt="01072024_01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_02.jpg")} alt="01072024_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_03.jpg")} alt="01072024_03" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_04.jpg")} alt="01072024_04" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_05.jpg")} alt="01072024_05" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_06.jpg")} alt="01072024_06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_07.jpg")} alt="01072024_07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_08.jpg")} alt="01072024_08" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_09.jpg")} alt="01072024_09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_10.jpg")} alt="01072024_10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_11.jpg")} alt="01072024_11" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_12.jpg")} alt="01072024_12" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_13.jpg")} alt="01072024_13" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_14.jpg")} alt="01072024_14" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/01072024/01072024_15.jpg")} alt="01072024_15" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>

                   
                </div>
            </div>
        )
    }
}

export default C01072024