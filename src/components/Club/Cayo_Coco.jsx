import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Cayo_Coco extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Cayo Coco Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/cayo_coco"} />
                <Header />
                <HeaderMobile />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Cayo Coco</h5>
                        <p className="infosPage">15 courses</p>
                        <p className="infosPage">3 victoires</p>
                        <p className="infosPage">7 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco01.jpg")} alt="cayo_coco01" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco02.jpg")} alt="cayo_coco02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco03.jpg")} alt="cayo_coco03" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco04.jpg")} alt="cayo_coco04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco05.jpg")} alt="cayo_coco05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco06.jpg")} alt="cayo_coco06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco07.jpg")} alt="cayo_coco07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco08.jpg")} alt="cayo_coco08" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco09.jpg")} alt="cayo_coco09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco10.jpg")} alt="cayo_coco10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco11.jpg")} alt="cayo_coco11" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco12.jpg")} alt="cayo_coco12" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco13.jpg")} alt="cayo_coco01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco14.jpg")} alt="cayo_coco14" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco15.jpg")} alt="cayo_coco15" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco16.jpg")} alt="cayo_coco16" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco17.jpg")} alt="cayo_coco17" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco18.jpg")} alt="cayo_coco18" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco19.jpg")} alt="cayo_coco19" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco20.jpg")} alt="cayo_coco20" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco21.jpg")} alt="cayo_coco21" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco22.jpg")} alt="cayo_coco22" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco23.jpg")} alt="cayo_coco23" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cayo_coco/cayo_coco24.jpg")} alt="cayo_coco24" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cayo_Coco