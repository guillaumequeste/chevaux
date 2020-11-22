import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premier_partant_galop extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Premier partant galop Chevaux"}
                        link={"http://chevaux.guillaumequeste.fr/premier_partant_galop"} />
                <Header />
                <HeaderMobile />
                <Footer ecurie2013={true}/>
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">1er partant au galop</h5>
                        <p className="infosPage">Falcolina</p>
                        <p className="infosPage">le 27 juillet 2013 à Deauville</p>
                        <p className="infosPage">avec Umberto Rispoli</p>
                    </Bounce>
                    <div className="photosPage">
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_partant_galop/1er_partant_falcolina01.jpg")} alt="1er_partant_falcolina01" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_partant_galop/1er_partant_falcolina02.jpg")} alt="1er_partant_falcolina02" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="divPhotoPage">
                                <img src={require("../../img/2013/premier_partant_galop/1er_partant_falcolina03.jpg")} alt="1er_partant_falcolina03" className="photoPageHorizontale"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Premier_partant_galop