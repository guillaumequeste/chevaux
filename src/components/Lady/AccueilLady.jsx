import React, { Component } from "react";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
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

                    <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseLady"
                        />
                    </Link>

                    <div className='titreAccueilLady'>
                        <h1>Lady Wrung</h1>
                    </div>

                    <div className="menu">
                        <div className="img_menu"> 
                            <img
                                src={require("../../img/lady/ecurie_lady.jpg")}
                                alt="ecurie_lady"
                                className="img_ecurie_lady"
                                />
                        </div>
                
                        <div className="img_menu2"> 
                            <img
                                src={require("../../img/lady/courses_lady.jpg")}
                                alt="courses_lady"
                                className="img_courses_lady"
                                />
                        </div>

                        
                    </div>

                </div>
            </div>
        );
    }
}

export default AccueilLady;
