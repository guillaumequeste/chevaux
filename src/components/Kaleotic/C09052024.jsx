import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C09052024 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Kaleotic 9 mai 2024"}
                        link={"http://chevaux.guillaumequeste.fr/Kaleotic_09052024"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">9 mai 2024</h3>
                        <h5 className="titreKaleoticCourses2">Lyon Parilly</h5>
                        <h5 className="titreKaleoticCourses2">Prix du Puy de Sancy</h5>
                        <h5 className="titreKaleoticCourses2">A conditions</h5>
                        <h5 className="titreKaleoticCourses2">Classe 3</h5>
                        <h5 className="titreKaleoticCourses2">3 400m Steeple-Chase</h5>
                        <h5 className="titreKaleoticCourses2">8 partants</h5>
                        <h5 className="titreKaleoticCourses3">6ème</h5>
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
                                <img src={require("../../img/kaleotic/courses/09052024/09052024_01.jpg")} alt="09052024_01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/09052024/09052024_02.jpg")} alt="09052024_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/09052024/09052024_03.jpg")} alt="09052024_03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/09052024/09052024_04.jpg")} alt="09052024_04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/09052024/09052024_05.jpg")} alt="09052024_05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        )
    }
}

export default C09052024