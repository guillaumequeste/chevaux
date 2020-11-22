import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_partant_quinte extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier partant Quinté Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_partant_quinte"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2013={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1er partant dans un Quinté+</h5>
                        <p className="infosPage">Shingueti</p>
                        <p className="infosPage">le 10 septembre 2013 à Chantilly</p>
                        <p className="infosPage">avec Christophe Soumillon</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_partant_quinte/partant_quinte_shingueti01.jpg")} alt="partant_quinte_shingueti01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_partant_quinte/partant_quinte_shingueti02.jpg")} alt="partant_quinte_shingueti02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_partant_quinte/partant_quinte_shingueti03.jpg")} alt="partant_quinte_shingueti03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_partant_quinte