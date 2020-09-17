import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { NavLink } from "react-router-dom";

class CompoXXL extends Component {
  
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
                            <img src={require("../../img/xxl/casaqueXXL.png")} alt="casaqueXXL" className="casaqueAccueil"/>
                            <h5 className="annee">Compo XXL</h5>
                        </Bounce>
                    </div>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/belle1.jpg")} alt="belle_promesse" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Belle Promesse</h3>
                                <p className="pInfos">chez Isabelle Gallorini</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/borenis1.jpg")} alt="borenis" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Borénis</h3>
                                <p className="pInfos">chez Gabriel Leenders</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/eclair1.jpg")} alt="eclair_etincelle" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Eclair Etincelle</h3>
                                <p className="pInfos">chez Pascal Adda</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/elcondor1.jpg")} alt="elcond_or_forlonge" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Elcond'Or Forlonge</h3>
                                <p className="pInfos">chez Augustin Adeline de Boisbrunet</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/escort1.jpg")} alt="escort_groove" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Escort'groove</h3>
                                <p className="pInfos">chez Augustin Adeline de Boisbrunet</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/everybody1.jpg")} alt="everybodywantsme" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Everybodywantsme</h3>
                                <p className="pInfos">chez Pascal Adda</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/gaby1.jpg")} alt="gaby_oh_gaby" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Gaby Oh Gaby</h3>
                                <p className="pInfos">chez Isabelle Gallorini</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/galante1.jpg")} alt="galante_d_arthel" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Galante d'Arthel</h3>
                                <p className="pInfos">chez Emmanuel Clayeux</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/gaspachos1.jpg")} alt="gaspachos" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Gaspacho's</h3>
                                <p className="pInfos">chez Emmanuel Clayeux</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/glasgow1.jpg")} alt="glasgow_allen" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Glasgow Allen</h3>
                                <p className="pInfos">chez Emmanuel Clayeux</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/gueule1.jpg")} alt="gueule_de_loup" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Gueule de Loup</h3>
                                <p className="pInfos">chez Emmanuel Clayeux</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/joly1.jpg")} alt="joly_and_bach" className="imgVerticale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Joly And Bach</h3>
                                <p className="pInfos">chez Emmanuel Clayeux</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/korum1.jpg")} alt="korum" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Korum</h3>
                                <p className="pInfos">chez Augustin Adeline de Boisbrunet</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div to="/" className="cheval">
                            <img src={require("../../img/xxl/compo/master1.jpg")} alt="master_gold" className="imgHorizontale"/>
                            <div className="infos">
                                <h3 className="nomCheval">Master Gold</h3>
                                <p className="pInfos">chez Augustin Adeline de Boisbrunet</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default CompoXXL