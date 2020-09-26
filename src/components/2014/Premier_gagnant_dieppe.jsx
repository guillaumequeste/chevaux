import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_gagnant_dieppe extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://chevaux.guillaumequeste.fr"} />
                <Header />
                <Footer />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1ere gagnant à Dieppe</h5>
                        <p className="infosPage">Unrefundable</p>
                        <p className="infosPage">le 2 août 2015</p>
                        <p className="infosPage">avec Bryan Coppens</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe01.jpg")} alt="1er_gagnant_dieppe01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe02.jpg")} alt="1er_gagnant_dieppe02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe03.jpg")} alt="1er_gagnant_dieppe03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe04.jpg")} alt="1er_gagnant_dieppe04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe05.jpg")} alt="1er_gagnant_dieppe05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe06.jpg")} alt="1er_gagnant_dieppe06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe07.jpg")} alt="1er_gagnant_dieppe07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe08.jpg")} alt="1er_gagnant_dieppe08" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2014/premier_gagnant_dieppe/1er_gagnant_dieppe09.jpg")} alt="1er_gagnant_dieppe09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_gagnant_dieppe