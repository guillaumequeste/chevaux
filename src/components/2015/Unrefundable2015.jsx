import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Unrefundable2015 extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Unrefundable 2015 Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/unrefundable2015"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2015={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Unrefundable</h5>
                        <p className="infosPage">21 courses</p>
                        <p className="infosPage">1 victoire</p>
                        <p className="infosPage">13 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/unrefundable/unrefundable01.jpg")} alt="unrefundable01" className="photoPageVerticale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/unrefundable/unrefundable02.jpg")} alt="unrefundable02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/unrefundable/unrefundable03.jpg")} alt="unrefundable03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/unrefundable/unrefundable04.jpg")} alt="unrefundable04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/unrefundable/unrefundable05.jpg")} alt="unrefundable05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2015/unrefundable/unrefundable06.jpg")} alt="unrefundable06" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Unrefundable2015