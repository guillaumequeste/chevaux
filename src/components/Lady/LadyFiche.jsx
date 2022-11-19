import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class LadyFiche extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Lady Wrung fiche"}
                        link={"http://chevaux.guillaumequeste.fr/lady_fiche"} />
        
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h1 className="titreLadyFiche">Lady infos</h1>
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

                    <div className="infosLady">
                        <div>Femelle grise</div>
                        <div>Née le 13 février 2019 dans la Sarthe</div>
                        <div>Père : Doctor Dino</div>
                        <div>Mère : Lace Ribbons (Montmartre)</div>
                        <div>Court sous les couleurs de Mme Paola Palmieri</div>
                    </div>

                    <div className="infosLady">
                        <div>Débute en plat à Nort-sur-Erdre</div>
                        <div>le 9 octobre 2022</div>
                        <div>9ème</div>
                    </div>

                    <div className="infosLady">
                        <div>Deuxième course à Dieppe</div>
                        <div>haies</div>
                        <div>le 17 novembre 2022</div>
                        <div>4ème</div>
                    </div>

                    <div className="infosLady">
                        <div>Pédigrée</div>
                    </div>

                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/lady/fiche_lady.JPG")} alt="fiche" className="photoPageVerticaleFiche"/>
                            </div>
                        </Fade>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default LadyFiche