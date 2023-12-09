import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C04122023 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Kaleotic 4 décembre 2023"}
                        link={"http://chevaux.guillaumequeste.fr/Kaleotic_04122023"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">4 décembre 2023</h3>
                        <h5 className="titreKaleoticCourses2">Cagnes-sur-Mer</h5>
                        <h5 className="titreKaleoticCourses2">Prix du Vercors</h5>
                        <h5 className="titreKaleoticCourses2">A conditions</h5>
                        <h5 className="titreKaleoticCourses2">Inédits</h5>
                        <h5 className="titreKaleoticCourses2">3 300m Haies</h5>
                        <h5 className="titreKaleoticCourses2">13 partants</h5>
                        <h5 className="titreKaleoticCourses3">5ème</h5>
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
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_01.jpg")} alt="04122023_01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_02.jpg")} alt="04122023_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_03.jpg")} alt="04122023_03" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_04.jpg")} alt="04122023_04" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_05.jpg")} alt="04122023_05" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_06.jpg")} alt="04122023_06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_07.jpg")} alt="04122023_07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_08.jpg")} alt="04122023_08" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_09.jpg")} alt="04122023_09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_10.jpg")} alt="04122023_10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_11.jpg")} alt="04122023_11" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_12.jpg")} alt="04122023_12" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_13.jpg")} alt="04122023_13" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_14.jpg")} alt="04122023_14" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_15.jpg")} alt="04122023_15" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_16.jpg")} alt="04122023_16" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_17.jpg")} alt="04122023_17" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_18.jpg")} alt="04122023_18" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/04122023/04122023_19.jpg")} alt="04122023_19" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default C04122023