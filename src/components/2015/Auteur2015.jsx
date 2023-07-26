import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Auteur2015 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Auteur 2015 Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/auteur2015"} />
                <Header />
                <HeaderMobile />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Auteur</h5>
                        <p className="infosPage">4 courses</p>
                        <p className="infosPage">2 victoires</p>
                        <p className="infosPage">2 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur01.jpg")} alt="auteur01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur201501.jpg")} alt="auteur201501" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur201502.jpg")} alt="auteur201502" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur201503.jpg")} alt="auteur201503" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur201504.jpg")} alt="auteur201504" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur201505.jpg")} alt="auteur201505" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/auteur/auteur201506.jpg")} alt="auteur201506" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auteur2015