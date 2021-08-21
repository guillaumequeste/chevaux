import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Cristal_Pierji2015 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Cristal Pierji 2015 Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/cristal_pierji2015"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2015={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Cristal Pierji</h5>
                        <p className="infosPage">11 courses</p>
                        <p className="infosPage">3 victoires</p>
                        <p className="infosPage">5 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal01.jpg")} alt="cristal01" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal02.jpg")} alt="cristal02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal03.jpg")} alt="cristal03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal04.jpg")} alt="cristal04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal05.jpg")} alt="cristal05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal06.jpg")} alt="cristal06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal07.jpg")} alt="cristal07" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal08.jpg")} alt="cristal08" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal09.png")} alt="cristal09" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal10.jpg")} alt="cristal10" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal11.jpg")} alt="cristal11" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal12.jpg")} alt="cristal12" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/cristal_pierji/cristal13.jpeg")} alt="cristal13" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cristal_Pierji2015