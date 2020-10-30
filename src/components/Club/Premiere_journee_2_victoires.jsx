import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premiere_journee_2_victoires extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Première journée 2 victoires Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premiere_journee_2_victoires"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1ère journée avec 2 victoires</h5>
                        <p className="infosPage">le 6 mai 2018</p>
                        <p className="infosPage">Cayo Coco à Lognchamp</p>
                        <p className="infosPage">Domino de Larré à Agen</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_journee_2_victoires/premiere_journee_2_victoires01.jpg")} alt="premiere_journee_2_victoires01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_journee_2_victoires/premiere_journee_2_victoires02.jpg")} alt="premiere_journee_2_victoires02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_journee_2_victoires/premiere_journee_2_victoires03.jpg")} alt="premiere_journee_2_victoires03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_journee_2_victoires/premiere_journee_2_victoires04.jpg")} alt="premiere_journee_2_victoires04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_journee_2_victoires/premiere_journee_2_victoires05.jpg")} alt="premiere_journee_2_victoires05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/premiere_journee_2_victoires/premiere_journee_2_victoires06.jpg")} alt="premiere_journee_2_victoires06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premiere_journee_2_victoires