import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class C25072024 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Kaleotic 25 juillet 2024"}
                        link={"http://chevaux.guillaumequeste.fr/Kaleotic_25072024"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h3 className="titreKaleoticCourses">25 juillet 2024</h3>
                        <h5 className="titreKaleoticCourses2">Vittel</h5>
                        <h5 className="titreKaleoticCourses2">Prix Général Lasalle</h5>
                        <h5 className="titreKaleoticCourses2">A conditions</h5>
                        <h5 className="titreKaleoticCourses2">Classe 2</h5>
                        <h5 className="titreKaleoticCourses2">3 800m Haies</h5>
                        <h5 className="titreKaleoticCourses2">14 partants</h5>
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
                                <img src={require("../../img/kaleotic/courses/25072024/25072024_01.jpg")} alt="25072024_01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/25072024/25072024_02.jpg")} alt="25072024_02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/25072024/25072024_03.jpg")} alt="25072024_03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/25072024/25072024_04.jpg")} alt="25072024_04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/courses/25072024/25072024_05.jpg")} alt="25072024_05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default C25072024