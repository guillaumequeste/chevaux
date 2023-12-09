import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";

class ListeHippodromes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Liste hippodromes Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/liste_hippodromes"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Liste des hippodromes visités (72/239)</h5>
            </Bounce>
          </div>

          <div className="divHippodromes">
           
            <div className="nomListe">Abbeville</div>
            <div className="nomListe">Amiens</div>
            <div className="nomListe">Angers</div>
            <div className="nomListe">Argentan</div>
            <div className="nomListe">Arras</div>
            <div className="nomListe">Auteuil</div>
            <div className="nomListe">Avignon</div>
            <div className="nomListe">Avranches</div>
            <div className="nomListe">Bacqueville-en-Caux</div>
            <div className="nomListe">Bagnoles de l'Orne</div>
            <div className="nomListe">Berck-sur-Mer</div>
            <div className="nomListe">Bernay</div>
            <div className="nomListe">Bihorel</div>
            <div className="nomListe">Cabourg</div>
            <div className="nomListe">Caen</div>
            <div className="nomListe">Cagnes-sur-Mer</div>
            <div className="nomListe">Chantilly</div>
            <div className="nomListe">Chartres</div>
            <div className="nomListe">Château-du-Loir</div>
            <div className="nomListe">Cholet</div>
            <div className="nomListe">Clairefontaine</div>
            <div className="nomListe">Compiègne</div>
            <div className="nomListe">Craon</div>
            <div className="nomListe">Deauville</div>
            <div className="nomListe">Dieppe</div>
            <div className="nomListe">Dozulé</div>
            <div className="nomListe">Enghien</div>
            <div className="nomListe">Evreux</div>
            <div className="nomListe">Francheville-la Barre</div>
            <div className="nomListe">Fontainebleau</div>
            <div className="nomListe">Gournay en Bray</div>
            <div className="nomListe">Graignes</div>
            <div className="nomListe">Granville</div>
            <div className="nomListe">La Capelle</div>
            <div className="nomListe">La Ferté-Vidame</div>
            <div className="nomListe">Laon</div>
            <div className="nomListe">Laval</div>
            <div className="nomListe">Le Croisé-Laroche</div>
            <div className="nomListe">Le Lion d'Angers</div>
            <div className="nomListe">Le Mans</div>
            <div className="nomListe">Le Mont-Saint-Michel</div>
            <div className="nomListe">Le Neubourg</div>
            <div className="nomListe">Le Pin au Haras</div>
            <div className="nomListe">Le Touquet</div>
            <div className="nomListe">Les Andelys</div>
            <div className="nomListe">Les Sables d'Olonne</div>
            <div className="nomListe">Lisieux</div>
            <div className="nomListe">Longchamp</div>
            <div className="nomListe">Maisons-Laffitte</div>
            <div className="nomListe">Mauquenchy</div>
            <div className="nomListe">Maure-de-Bretagne</div>
            <div className="nomListe">Meslay-du-Maine</div>
            <div className="nomListe">Mons</div>
            <div className="nomListe">Nancy</div>
            <div className="nomListe">Nantes</div>
            <div className="nomListe">Nort-sur-Erdre</div>
            <div className="nomListe">Plessé</div>
            <div className="nomListe">Rambouillet</div>
            <div className="nomListe">Rânes</div>
            <div className="nomListe">Reims</div>
            <div className="nomListe">Saint-Aubin-lès-Elbeuf</div>
            <div className="nomListe">Saint-Cloud</div>
            <div className="nomListe">Saint-Jean-de-Monts</div>
            <div className="nomListe">Saint-Malo</div>
            <div className="nomListe">Saint-Omer</div>
            <div className="nomListe">Saint-Pierre-sur-Dives</div>
            <div className="nomListe">Segré</div>
            <div className="nomListe">Sillé-le-Guillaume</div>
            <div className="nomListe">Strasbourg</div>
            <div className="nomListe">Villedieu-les-Poêles</div>
            <div className="nomListe">Vincennes</div>
            <div className="nomListe">Vire</div>
    
          </div>
          
        </div>
      </div>
    );
  }
}

export default ListeHippodromes;
