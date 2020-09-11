import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class Compo2014 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://chevaux.guillaumequeste.fr"} />
                <Header />
                <Footer />
                <div className="accueil2013">
                    <div className="titreAccueil">
                        <Bounce top>
                            <img src={require("../../img/2014/casaque2014.png")} alt="casaque2014" className="casaqueAccueil"/>
                            <h5 className="annee">Compo 2014</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/arancio1.jpg")} alt="arancio" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Arancio</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">8 courses</p>
                                <p className="pInfos">chez Michel-Xavier Charlot</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/auteur1.jpg")} alt="auteur" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Auteur</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">32 courses</p>
                                <p className="pInfos">3 victoires</p>
                                <p className="pInfos">20 places</p>
                                <p className="pInfos">chez Mickaël Cormy</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/baldi1.jpg")} alt="baldi_star" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Baldi Star</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">17 courses</p>
                                <p className="pInfos">2 victoires</p>
                                <p className="pInfos">8 places</p>
                                <p className="pInfos">chez Franck Anne</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/borsalino1.jpg")} alt="borsalino_du_jal" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Borsalino du Jal</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">20 courses</p>
                                <p className="pInfos">4 victoires</p>
                                <p className="pInfos">5 places</p>
                                <p className="pInfos">chez Sébastien Guarato</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/bowmore1.jpg")} alt="bowmore" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Bowmore</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">18 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">9 places</p>
                                <p className="pInfos">chez Jacques Heloury</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/claudia1.jpg")} alt="claudia_eria" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Claudia Eria</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">16 courses</p>
                                <p className="pInfos">12 places</p>
                                <p className="pInfos">chez Philippe Van de Poële</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/kilava1.jpg")} alt="kilava" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Kilava</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">9 courses</p>
                                <p className="pInfos">2 victoires</p>
                                <p className="pInfos">4 places</p>
                                <p className="pInfos">chez Tony Clout</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/magic1.jpg")} alt="magic_miles" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Magic Miles</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">10 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">4 places</p>
                                <p className="pInfos">chez Tony Clout</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/place1.jpg")} alt="place_des_ternes" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Place des Ternes</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">5 courses</p>
                                <p className="pInfos">1 place</p>
                                <p className="pInfos">chez Mathieu Boutin</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/pont1.jpg")} alt="pont_marie" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Pont Marie</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">5 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">2 places</p>
                                <p className="pInfos">chez Fabrice Chappet</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/race1.jpg")} alt="race_for_fame" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Race For Fame</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">19 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">6 places</p>
                                <p className="pInfos">chez Mathieu Boutin</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/2014/compo/unrefundable1.jpg")} alt="unrefundable" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Unrefundable</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">22 courses</p>
                                <p className="pInfos">5 victoire</p>
                                <p className="pInfos">13 places</p>
                                <p className="pInfos">chez Pierre Vercruysse</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Compo2014