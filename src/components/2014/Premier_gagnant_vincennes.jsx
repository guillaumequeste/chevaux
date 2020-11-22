import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_gagnant_vincennes extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier gagnant Vincennes Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_gagnant_vincennes"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2014={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1ere gagnant à Vincennes</h5>
                        <p className="infosPage">Unrefundable</p>
                        <p className="infosPage">le 30 décembre 2015</p>
                        <p className="infosPage">avec Romain Porée</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_vincennes/1er_gagnant_vincennes01.jpg")} alt="1er_gagnant_vincennes01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_vincennes/1er_gagnant_vincennes02.jpg")} alt="1er_gagnant_vincennes02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_vincennes/1er_gagnant_vincennes03.jpg")} alt="1er_gagnant_vincennes03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_vincennes/1er_gagnant_vincennes04.jpg")} alt="1er_gagnant_vincennes04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_gagnant_vincennes