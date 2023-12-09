import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class LadyCourses extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Lady Wrung courses"}
                        link={"http://chevaux.guillaumequeste.fr/lady_courses"} />

                <div className="accueilKaleoticCourses">
    
                    <Bounce top>
                        <h1 className="titreLady">Lady aux courses</h1>
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

                    <Fade right>
                        <NavLink to="/lady_09102022" className="rubrique">
                        <h6 className="titreRubrique">9 octobre 2022, Nort-sur-Erdre, 9ème</h6>
                        </NavLink>
                    </Fade>

                    <Fade right>
                        <NavLink to="/lady_17112022" className="rubrique">
                        <h6 className="titreRubrique">17 novembre 2022, Dieppe, 4ème</h6>
                        </NavLink>
                    </Fade>
                    
                </div>
            </div>
        )
    }
}

export default LadyCourses