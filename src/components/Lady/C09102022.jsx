import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C09102022 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Lady Wrung 9 octobre 2022"}
                        link={"http://chevaux.guillaumequeste.fr/Lady_09102022"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">9 octobre 2022</h3>
                        <h5 className="titreKaleoticCourses2">Nort-sur-Erdre</h5>
                        <h5 className="titreKaleoticCourses2">Prix j.m. Pizza</h5>
                        <h5 className="titreKaleoticCourses2">Maiden</h5>
                        <h5 className="titreKaleoticCourses2">Pour 3 ans</h5>
                        <h5 className="titreKaleoticCourses2">2 500m Plat</h5>
                        <h5 className="titreKaleoticCourses2">11 partants</h5>
                        <h5 className="titreKaleoticCourses3">9ème</h5>
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
                                <img src={require("../../img/lady/courses/09102022/c01.jpg")} alt="ec01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c02.jpg")} alt="c02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c03.jpg")} alt="c03" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c04.jpg")} alt="c04" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c05.jpg")} alt="c05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c06.jpg")} alt="c06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c07.jpg")} alt="c07" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c09.jpg")} alt="c09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c10.jpg")} alt="c10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c11.jpg")} alt="c11" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/09102022_01.jpg")} alt="09102022_01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/09102022_02.jpg")} alt="09102022_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/09102022_03.jpg")} alt="09102022_03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/09102022_04.jpg")} alt="09102022_04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/09102022_05.jpg")} alt="09102022_05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c13.jpg")} alt="c13" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c14.jpg")} alt="c14" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c15.jpg")} alt="c15" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c16.jpg")} alt="c16" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/courses/09102022/c19.jpg")} alt="c19" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default C09102022