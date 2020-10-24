import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Journee_deux_victoires extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://chevaux.guillaumequeste.fr"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="accueilPremierPartantGalop">
                    <Bounce top>
                        <h5 className="titrePage">Journée à 2 victoires</h5>
                        <p className="infosPage">et AG à Auteuil (avec Master Gold)</p>
                        <p className="infosPage">le 11 octobre 2020</p>
                        <p className="infosPage">Joly and Bach à Paray-le-Monial</p>
                        <p className="infosPage">Galanted'Arthel à Paray-le-Monial</p>
                    </Bounce>
                    <div className="photosPage">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Journee_deux_victoires