import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Cristal_Pierji_club extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Cristal Pierji Club Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/cristal_pierji_club"} />
                <Header />
                <HeaderMobile />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Cristal Pierji</h5>
                        <p className="infosPage">54 courses</p>
                        <p className="infosPage">1 victoire</p>
                        <p className="infosPage">34 places</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cristal_pierji/cristal01.jpg")} alt="cristal01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cristal_pierji/cristal02.jpg")} alt="cristal02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cristal_pierji/cristal03.jpg")} alt="cristal03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cristal_pierji/cristal04.jpg")} alt="cristal04" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/club/cristal_pierji/cristal05.jpg")} alt="cristal05" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cristal_Pierji_club