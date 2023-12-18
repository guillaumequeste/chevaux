import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C18122023 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Kaleotic 18 décembre 2023"}
                        link={"http://chevaux.guillaumequeste.fr/Kaleotic_18122023"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">18 décembre 2023</h3>
                        <h5 className="titreKaleoticCourses2">Cagnes-sur-Mer</h5>
                        <h5 className="titreKaleoticCourses2">Prix d'Auteuil</h5>
                        <h5 className="titreKaleoticCourses2">A conditions</h5>
                        <h5 className="titreKaleoticCourses2">Classe 4</h5>
                        <h5 className="titreKaleoticCourses2">3 300m Haies</h5>
                        <h5 className="titreKaleoticCourses2">13 partants</h5>
                        <h5 className="titreKaleoticCourses3">2ème</h5>
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
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_01.JPG")} alt="18122023_01" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_02.JPG")} alt="18122023_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_03.jpg")} alt="18122023_03" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_04.jpg")} alt="18122023_04" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_05.jpg")} alt="18122023_05" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_06.jpg")} alt="18122023_06" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_07.jpg")} alt="18122023_07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_08.jpg")} alt="18122023_08" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_09.jpg")} alt="18122023_09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_10.jpg")} alt="18122023_10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_11.jpg")} alt="18122023_11" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_12.jpg")} alt="18122023_12" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_13.jpg")} alt="18122023_13" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_14.jpg")} alt="18122023_14" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/18122023/18122023_15.jpg")} alt="18122023_15" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default C18122023