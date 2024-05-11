import React, { Component } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Helmet from "./Helmet";

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Contact Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/contact"}
        />
        <Header />
        <HeaderMobile />
        <div className="divContact">
          <div className="divContact2">
            <p className="textContact">Site créé par Guillaume Queste :</p>
            <a href="https://www.guillaumequeste.fr" target="_blank" rel="noopener noreferrer">
              <h5 className="textContact">https://www.guillaumequeste.fr</h5>
            </a>
            <br></br>
            <h5 className="textContact">guillaume.queste@laposte.net</h5>
            <br></br>
            <h6>dernière mise à jour : 11 mai 2024</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
