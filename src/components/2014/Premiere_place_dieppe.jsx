import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premiere_place_dieppe extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Première place Dieppe Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_place_dieppe"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2014={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1ère place à Dieppe</h5>
                        <p className="infosPage">Race For Fame</p>
                        <p className="infosPage">le 18 juillet 2015</p>
                        <p className="infosPage">avec Théo Bachelot</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe01.jpg")} alt="1ere_place_dieppe01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe02.jpg")} alt="1ere_place_dieppe02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe03.jpg")} alt="1ere_place_dieppe03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe04.jpg")} alt="1ere_place_dieppe04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe05.jpg")} alt="1ere_place_dieppe05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe06.jpg")} alt="1ere_place_dieppe06" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premiere_place_dieppe/1ere_place_dieppe07.jpg")} alt="1ere_place_dieppe07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premiere_place_dieppe