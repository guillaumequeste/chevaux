import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_partant_trot extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier partant trot"}
                        link={"http://chevaux.guillaumequeste.fr/premier_partant_trot"} />
                <Header />
                <HeaderMobile />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1er partant au trot</h5>
                        <p className="infosPage">Unrefundable</p>
                        <p className="infosPage">le 8 juin 2014 à Rambouillet</p>
                        <p className="infosPage">avec Romain Porée</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable01.jpg")} alt="1er_partant_trot_unrefundable01" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable02.jpg")} alt="1er_partant_trot_unrefundable02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable03.jpg")} alt="1er_partant_trot_unrefundable03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable04.jpg")} alt="1er_partant_trot_unrefundable04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable05.jpg")} alt="1er_partant_trot_unrefundable05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable06.jpg")} alt="1er_partant_trot_unrefundable06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable07.jpg")} alt="1er_partant_trot_unrefundable07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable08.jpg")} alt="1er_partant_trot_unrefundable08" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_partant_trot/premier_partant_trot_unrefundable09.jpg")} alt="1er_partant_trot_unrefundable09" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_partant_trot