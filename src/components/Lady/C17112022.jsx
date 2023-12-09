import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C17112022 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Lady Wrung 17 novembre 2022"}
                        link={"http://chevaux.guillaumequeste.fr/Lady_17112022"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">17 novembre 2022</h3>
                        <h5 className="titreKaleoticCourses2">Dieppe</h5>
                        <h5 className="titreKaleoticCourses2">Prix Tec Rail</h5>
                        <h5 className="titreKaleoticCourses2">A réclamer</h5>
                        <h5 className="titreKaleoticCourses2">Pour 3 ans</h5>
                        <h5 className="titreKaleoticCourses2">3 400m Haies</h5>
                        <h5 className="titreKaleoticCourses2">9 partants</h5>
                        <h5 className="titreKaleoticCourses3">4ème</h5>
                    </Bounce>

                    <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseLady"
                        />
                    </Link>

                    <Link to="/lady_courses" className="retour">
                        <span className="retour">Retour</span>
                    </Link>

                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c20.jpg")} alt="c20" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c21.jpg")} alt="c21" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c22.jpg")} alt="c22" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c23.jpg")} alt="c23" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c25.jpg")} alt="c25" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/17112022_01.jpg")} alt="17112022_01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/17112022_02.jpg")} alt="17112022_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/17112022_03.jpg")} alt="17112022_03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/17112022_04.jpg")} alt="17112022_04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/17112022_05.jpg")} alt="17112022_05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/17112022_06.jpg")} alt="17112022_06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c26.jpg")} alt="c26" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c27.jpg")} alt="c27" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c29.jpg")} alt="c29" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c31.jpg")} alt="c31" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c32.jpg")} alt="c32" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/17112022/c33.jpg")} alt="c33" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default C17112022