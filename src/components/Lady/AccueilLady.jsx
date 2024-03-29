import React, { Component } from "react";
import Helmet from "../Helmet";
import '../../CSS/Lady.css';
import { Link } from "react-router-dom";

class AccueilLady extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title={"Accueil Lady Wrung Chevaux"}
                    link={"http://chevaux.guillaumequeste.fr/lady_wrung"}
                />
                <div className="accueilLady">

                    <div className='titreAccueilLady'>
                        <h1>Lady Wrung</h1>
                    </div>

                    <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseLady"
                        />
                    </Link>

                    <div className="menu">
                        <div className="divMenu">
                            <Link to="/lady_ecurie" className="linkImg">
                                <img
                                    src={require("../../img/lady/ecurie_lady.jpg")}
                                    alt="ecurie_lady"
                                    className="img_ecurie_lady"
                                 />
                            </Link> 
                        </div>

                        <div className="divMenu">
                            <Link to="/lady_entrainement" className="linkImg">
                                <img
                                    src={require("../../img/lady/entrainement_lady.jpg")}
                                    alt="entrainement_lady"
                                    className="img_entrainement_lady"
                                 />
                            </Link> 
                        </div>

                        <div className="divMenu">
                            <Link to="/lady_courses" className="linkImg">
                                <img
                                    src={require("../../img/lady/courses_lady.jpg")}
                                    alt="courses_lady"
                                    className="img_courses_lady"
                                 />
                            </Link> 
                        </div>

                        <div className="divMenu">
                            <Link to="/lady_fiche" className="linkImg">
                                <img
                                    src={require("../../img/lady/fiche_lady.JPG")}
                                    alt="fiche_lady"
                                    className="img_fiche_lady"
                                 />
                            </Link> 
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default AccueilLady;
