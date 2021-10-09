import React, { Component } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Helmet from "./Helmet";
import Footer from "./Footer";

class Bilan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses_2013: 107,
      victoires_2013: 7,
      places_2013: 38,
      courses_2014: 191,
      victoires_2014: 20,
      places_2014: 84,
      courses_2015: 78,
      victoires_2015: 9,
      places_2015: 36,
      courses_rmc: 290,
      victoires_rmc: 20,
      places_rmc: 142,
      courses_xxl: 104,
      victoires_xxl: 14,
      places_xxl: 42,
      courses_top: 39,
      victoires_top: 4,
      places_top: 17
    };
  }

  render() {
    const reussite = (nb1, nb2, nb3) => {
      return Math.round(((nb1 + nb2) / nb3) * 100);
    };
    const reussite_gagne = (nb1, nb2) => {
      return Math.round((nb1 / nb2) * 100);
    };
    const total_courses =
      this.state.courses_2013 +
      this.state.courses_2014 +
      this.state.courses_2015 +
      this.state.courses_rmc +
      this.state.courses_xxl +
      this.state.courses_top;
    const total_victoires =
      this.state.victoires_2013 +
      this.state.victoires_2014 +
      this.state.victoires_2015 +
      this.state.victoires_rmc +
      this.state.victoires_xxl +
      this.state.victoires_top;
    const total_places =
      this.state.places_2013 +
      this.state.places_2014 +
      this.state.places_2015 +
      this.state.places_rmc +
      this.state.places_xxl +
      this.state.places_top;
    return (
      <div>
        <Helmet
          title={"Bilan Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/bilan"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="divBilan">
          <div className="result">
            <p className="pReussite">
              <strong>2013</strong> : {this.state.courses_2013} courses,{" "}
              {this.state.victoires_2013} victoires, {this.state.places_2013}{" "}
              places
            </p>
            <p className="reussite">
              {reussite(
                this.state.victoires_2013,
                this.state.places_2013,
                this.state.courses_2013
              )}
              % de réussite (
              {reussite_gagne(
                this.state.victoires_2013,
                this.state.courses_2013
              )}
              % à la gagne)
            </p>
          </div>
          <div className="result">
            <p className="pReussite">
              <strong>2014</strong> : {this.state.courses_2014} courses,{" "}
              {this.state.victoires_2014} victoires, {this.state.places_2014}{" "}
              places
            </p>
            <p className="reussite">
              {reussite(
                this.state.victoires_2014,
                this.state.places_2014,
                this.state.courses_2014
              )}
              % de réussite (
              {reussite_gagne(
                this.state.victoires_2014,
                this.state.courses_2014
              )}
              % à la gagne)
            </p>
          </div>
          <div className="result">
            <p className="pReussite">
              <strong>2015</strong> : {this.state.courses_2015} courses,{" "}
              {this.state.victoires_2015} victoires, {this.state.places_2015}{" "}
              places
            </p>
            <p className="reussite">
              {reussite(
                this.state.victoires_2015,
                this.state.places_2015,
                this.state.courses_2015
              )}
              % de réussite (
              {reussite_gagne(
                this.state.victoires_2015,
                this.state.courses_2015
              )}
              % à la gagne)
            </p>
          </div>
          <div className="result">
            <p className="pReussite">
              <strong>Club</strong> : {this.state.courses_rmc} courses,{" "}
              {this.state.victoires_rmc} victoires, {this.state.places_rmc}{" "}
              places
            </p>
            <p className="reussite">
              {reussite(
                this.state.victoires_rmc,
                this.state.places_rmc,
                this.state.courses_rmc
              )}
              % de réussite (
              {reussite_gagne(this.state.victoires_rmc, this.state.courses_rmc)}
              % à la gagne)
            </p>
          </div>
          <div className="result">
            <p className="pReussite">
              <strong>XXL</strong> : {this.state.courses_xxl} courses,{" "}
              {this.state.victoires_xxl} victoires, {this.state.places_xxl}{" "}
              places
            </p>
            <p className="reussite">
              {reussite(
                this.state.victoires_xxl,
                this.state.places_xxl,
                this.state.courses_xxl
              )}
              % de réussite (
              {reussite_gagne(this.state.victoires_xxl, this.state.courses_xxl)}
              % à la gagne)
            </p>
          </div>
          <div className="result">
            <p className="pReussite">
              <strong>Top</strong> : {this.state.courses_top} courses,{" "}
              {this.state.victoires_top} victoire, {this.state.places_top}{" "}
              places
            </p>
            <p className="reussite">
              {reussite(
                this.state.victoires_top,
                this.state.places_top,
                this.state.courses_top
              )}
              % de réussite (
              {reussite_gagne(this.state.victoires_top, this.state.courses_top)}
              % à la gagne)
            </p>
          </div>
          <div className="result">
            <p className="pReussite">
              <strong>TOTAL</strong> : {total_courses} courses,{" "}
              {total_victoires} victoires, {total_places} places
            </p>
            <p className="reussite">
              {reussite(total_victoires, total_places, total_courses)}% de
              réussite ({reussite_gagne(total_victoires, total_courses)}% à la
              gagne)
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bilan;
