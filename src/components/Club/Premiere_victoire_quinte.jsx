import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premiere_victoire_quinte extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Première victoire Quinté Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_victoire_quinte"} />
                <Header />
                <HeaderMobile />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1ère victoire dans un Quinté+</h5>
                        <p className="infosPage">Cayo Coco</p>
                        <p className="infosPage">le 6 mai 2018</p>
                        <p className="infosPage">à Longchamp</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_victoire_quinte/premier_quinte01.jpg")} alt="premier_quinte01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_victoire_quinte/premier_quinte02.jpg")} alt="premier_quinte02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_victoire_quinte/premier_quinte03.jpg")} alt="premier_quinte03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_victoire_quinte/premier_quinte04.jpg")} alt="premier_quinte04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_victoire_quinte/premier_quinte05.jpg")} alt="premier_quinte05" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premiere_victoire_quinte