import React, { Component } from "react";
import Helmet from "../Helmet";
import '../../CSS/Kaleotic.css';
import { Link } from "react-router-dom";

class AccueilKaleotic extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title={"Accueil Lady Wrung Chevaux"}
                    link={"http://chevaux.guillaumequeste.fr/kaleotic"}
                />
                <div className="accueilKaleotic">

                    <div className='titreAccueilKaleotic'>
                        <h1>Kaleotic</h1>
                    </div>

                    <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseKaleotic"
                        />
                    </Link>

                    <div className="menu">
                        <div className="divMenu">
                            <Link to="/kaleotic_ecurie" className="linkImg">
                            <img
                                    src={require("../../img/kaleotic/ecurie_kaleotic.jpg")}
                                    alt="ecurie_kaleotic"
                                    className="img_ecurie_kaleotic"
                                 />
                            </Link> 
                        </div>

                        <div className="divMenu">
                            <Link to="/kaleotic_entrainement" className="linkImg">
                            <img
                                    src={require("../../img/kaleotic/entrainement_kaleotic.jpg")}
                                    alt="entrainement_kaleotic"
                                    className="img_entrainement_kaleotic"
                                 />
                            </Link> 
                        </div>

                        <div className="divMenu">
                            <Link to="/kaleotic_courses" className="linkImg">
                                <img
                                    src={require("../../img/kaleotic/courses_kaleotic.jpg")}
                                    alt="courses_kaleotic"
                                    className="img_courses_kaleotic"
                                 />
                            </Link> 
                        </div>

                        <div className="divMenu">
                            <Link to="/kaleotic_fiche" className="linkImg">
                                <img
                                    src={require("../../img/kaleotic/fiche_kaleotic.jpg")}
                                    alt="fiche_kaleotic"
                                    className="img_fiche_kaleotic"
                                 />
                            </Link> 
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default AccueilKaleotic;
