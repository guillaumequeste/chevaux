import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_gagnant_longchamp extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier gagnant Longchamp Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_gagnant_longchamp"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2013={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1er gagnant à Longchamp</h5>
                        <p className="infosPage">Pan di Stelle</p>
                        <p className="infosPage">le 5 septembre 2013</p>
                        <p className="infosPage">avec Christophe Soumillon</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_longchamp/victoire_pan_di_stelle01.jpg")} alt="victoire_pan_di_stelle01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_longchamp/victoire_pan_di_stelle02.jpg")} alt="victoire_pan_di_stelle02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_longchamp/victoire_pan_di_stelle03.jpg")} alt="victoire_pan_di_stelle03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_longchamp/victoire_pan_di_stelle04.jpg")} alt="victoire_pan_di_stelle04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_longchamp/victoire_pan_di_stelle05.jpg")} alt="victoire_pan_di_stelle05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_gagnant_longchamp/victoire_pan_di_stelle06.jpg")} alt="victoire_pan_di_stelle06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_gagnant_longchamp