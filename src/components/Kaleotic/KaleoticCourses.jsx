import React, { Component } from "react";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class KaleoticCourses extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Kaleotic courses"}
          link={"http://chevaux.guillaumequeste.fr/kaleotic_courses"}
        />
        
        <div className="accueilKaleoticCourses">

            <Bounce top>
              <h1 className="titreKaleotic">Kaleotic aux courses</h1>
            </Bounce>

            <Link to="/" className="accueilApp">
                        <img
                            src={require("../../img/horse.png")}
                            alt="horse"
                            className="horseLady"
                        />
                    </Link>

                    <Link to="/kaleotic" className="retour">
                        <span className="retour">Retour</span>
                    </Link>

          <Fade right>
            <NavLink to="/kaleotic_04122023" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">4 décembre 2023, Cagnes-sur-Mer, 5ème</h6>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink to="/kaleotic_18122023" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">18 décembre 2023, Cagnes-sur-Mer, 2ème</h6>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink to="/kaleotic_10032024" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">10 mars 2024, Saint-Brieuc, 5ème</h6>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink to="/kaleotic_20042024" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">20 avril 2024, Lyon Parilly, 5ème</h6>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink to="/kaleotic_09052024" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">9 mai 2024, Lyon Parilly, 6ème</h6>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink to="/kaleotic_01072024" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">1er juillet 2024, Clairefontaine, 7ème</h6>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink to="/kaleotic_25072024" className="rubriqueKaleotic">
              <h6 className="titreRubriqueKaleotic">25 juillet 2024, Vittel, 7ème</h6>
            </NavLink>
          </Fade>

        </div>
      </div>
    );
  }
}

export default KaleoticCourses;
