import React, { Component } from 'react'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

class KaleoticFiche extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Kaleotic fiche"}
                        link={"http://chevaux.guillaumequeste.fr/kaleotic_fiche"} />
        
                <div className="accueilPremierPartantGalop2">
                    <Bounce top>
                        <h1 className="titreKaleoticFiche">Kaleotic infos</h1>
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

                    <div className="infosKaleotic">
                        <div>Hongre bai brun</div>
                        <div>Né le 23 mai 2020</div>
                        <div>Père : Magneticjim</div>
                        <div>Mère : Facoleria (AQPS)</div>
                        <div>Court sous les couleurs de Mme Paola Palmieri</div>
                    </div>

                    <div className="infosKaleotic">
                        <div>Pédigrée</div>
                    </div>

                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/kaleotic/fiche_kaleotic.jpg")} alt="fiche" className="photoPageVerticaleFiche"/>
                            </div>
                        </Fade>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default KaleoticFiche