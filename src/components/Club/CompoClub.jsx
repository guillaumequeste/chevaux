import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class CompoClub extends Component {
  
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
                            <img src={require("../../img/club/casaqueClub.png")} alt="casaqueClub" className="casaqueAccueil"/>
                            <h5 className="annee">Compo Club</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/al1.jpg")} alt="al_rassoul" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Al Rassoul</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">20 courses</p>
                                <p className="pInfos">2 victoires</p>
                                <p className="pInfos">10 places</p>
                                <p className="pInfos">chez Patrick Monfort</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/cayo2.jpg")} alt="cayo_coco" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Cayo Coco</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">15 courses</p>
                                <p className="pInfos">3 victoires</p>
                                <p className="pInfos">7 places</p>
                                <p className="pInfos">chez Patricia Butel</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/cristal2.jpeg")} alt="cristal_pierji" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Cristal Pierji</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">54 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">34 places</p>
                                <p className="pInfos">chez Mickaël Cormy</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/dalkelef1.jpg")} alt="dalkelef" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Dalkelef</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">12 courses</p>
                                <p className="pInfos">5 places</p>
                                <p className="pInfos">chez Mathieu Boutin</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/diva1.jpg")} alt="diva_du_dancing" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Diva du Dancing</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">9 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">8 places</p>
                                <p className="pInfos">chez Philippe Decouz</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/django1.jpg")} alt="django_gibus" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Django Gibus</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">27 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">16 places</p>
                                <p className="pInfos">chez Franck Anne</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/domino1.jpg")} alt="domino_de_larre" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Domino de Larré</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">44 courses</p>
                                <p className="pInfos">2 victoires</p>
                                <p className="pInfos">24 places</p>
                                <p className="pInfos">chez Michel-Xavier Charlot</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/drakkar1.jpg")} alt="drakkar_delo" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Drakkar Delo</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">12 courses</p>
                                <p className="pInfos">2 places</p>
                                <p className="pInfos">chez David Alexandre</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/eclipse1.jpg")} alt="eclipse_somolli" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Eclipse Somolli</h3>
                                <h6 className="discipline">trot</h6>
                                <p className="pInfos">23 courses</p>
                                <p className="pInfos">6 victoires</p>
                                <p className="pInfos">2 places</p>
                                <p className="pInfos">chez Stéphane Meunier</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/envergure1.jpg")} alt="envergure" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Envergure</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">10 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">5 places</p>
                                <p className="pInfos">chez Philippe Decouz</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/jurisprudance1.jpg")} alt="jurisprudance" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Jurisprudance</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">32 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">13 places</p>
                                <p className="pInfos">chez Mathieu Boutin</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/loquen1.jpg")} alt="loquen" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Loquen</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">4 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">2 places</p>
                                <p className="pInfos">chez Didier Guillemin</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/mysaan1.jpg")} alt="mysaan" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Mysaan</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">5 courses</p>
                                <p className="pInfos">1 place</p>
                                <p className="pInfos">chez Patrick Monfort</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/mysoul2.png")} alt="my_soul" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">My Soul</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">7 courses</p>
                                <p className="pInfos">4 places</p>
                                <p className="pInfos">chez Patricia Butel</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/saam1.jpg")} alt="saam" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Saam</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">10 courses</p>
                                <p className="pInfos">1 victoire</p>
                                <p className="pInfos">6 places</p>
                                <p className="pInfos">chez Patricia Butel</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/storm_katy1.jpg")} alt="storm_katy" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Storm Katy</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">3 courses</p>
                                <p className="pInfos">1 place</p>
                                <p className="pInfos">chez Mathieu Boutin</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/club/compo/wabba1.jpg")} alt="wabba" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Wabba</h3>
                                <h6 className="discipline">plat</h6>
                                <p className="pInfos">3 courses</p>
                                <p className="pInfos">2 places</p>
                                <p className="pInfos">chez Didier Guillemin</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default CompoClub