import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class LadyEntrainement extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Lady Wrung entraînement"}
                        link={"http://chevaux.guillaumequeste.fr/lady_entrainement"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h1 className="titreLady">Lady sur les pistes</h1>
                    </Bounce>

                    <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseLady"
                        />
                    </Link>

                    <Link to="/lady_wrung" className="retour">
                        <span className="retour">Retour</span>
                    </Link>

                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en06.jpg")} alt="en06" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en07.jpg")} alt="en07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en10.jpg")} alt="en10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en11.jpg")} alt="en11" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en13.jpg")} alt="en13" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en22.JPG")} alt="en22" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en23.JPG")} alt="en23" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/entrainement/en24.JPG")} alt="en24" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default LadyEntrainement