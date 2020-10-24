import React, { Component } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import Helmet from '../Helmet'
import Footer from '../Footer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

class Premiere_victoire_auteuil extends Component {
  
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
                        <h5 className="titrePage">1ère victoire à Auteuil</h5>
                        <p className="infosPage">le 1er septembre 2020</p>
                        <p className="infosPage">Belle Promesse</p>
                    </Bounce>
                    <div className="photosPage">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Premiere_victoire_auteuil