import React, { Component } from 'react'
import Header from './Header'
import HeaderMobile from './HeaderMobile'
import Helmet from './Helmet'
import Footer from './Footer'

class Contact extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://chevaux.guillaumequeste.fr"} />
                <Header />
                <HeaderMobile />
                <Footer />
                <div className="divContact">
                    <div className="divContact2">
                        <p className="textContact">Site créé par Guillaume Queste :</p>
                        <a href="https://www.guillaumequeste.fr" target="_blank"><h5 className="textContact">https://www.guillaumequeste.fr</h5></a>
                        <br></br>
                        <h5 className="textContact">guillaume.queste@laposte.net</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact