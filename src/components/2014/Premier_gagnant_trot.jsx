import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_gagnant_trot extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier gagnant trot Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_gagnant_trot"} />
                <Header />
                <HeaderMobile />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1er gagnant au trot</h5>
                        <p className="infosPage">Unrefundable</p>
                        <p className="infosPage">le 22 juin 2014 à Montier-en-Der</p>
                        <p className="infosPage">avec Bryan Coppens</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_trot/1er_gagnant_trot_unrefundable01.jpg")} alt="1er_gagnant_trot_unrefundable01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_trot/1er_gagnant_trot_unrefundable02.jpg")} alt="1er_gagnant_trot_unrefundable02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_trot/1er_gagnant_trot_unrefundable03.jpg")} alt="1er_gagnant_trot_unrefundable03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_gagnant_trot