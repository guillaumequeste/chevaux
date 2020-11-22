import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_gagnant_galop extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier gagnant galop Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_gagnant_galop"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2013={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1er gagnant au galop</h5>
                        <p className="infosPage">Pedregalejo</p>
                        <p className="infosPage">le 1er septembre 2013 à Evreux</p>
                        <p className="infosPage">avec Florent Guy</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo01.jpg")} alt="victoire_pedregalejo01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo02.jpg")} alt="victoire_pedregalejo02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo03.jpg")} alt="victoire_pedregalejo03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo04.jpg")} alt="victoire_pedregalejo04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo05.jpg")} alt="victoire_pedregalejo05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo06.jpg")} alt="victoire_pedregalejo06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo07.jpg")} alt="victoire_pedregalejo07" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_galop/victoire_pedregalejo08.jpg")} alt="victoire_pedregalejo08" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_gagnant_galop