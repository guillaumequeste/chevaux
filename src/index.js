import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
/*import $ from 'jquery'*/
/*import Popper from 'popper.js'*/
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Accueil2013 from './components/2013/Accueil2013'
import Accueil2014 from './components/2014/Accueil2014'
import Accueil2015 from './components/2015/Accueil2015'
import AccueilClub from './components/Club/AccueilClub'
import AccueilXXL from './components/XXL/AccueilXXL'
import AccueilTop from './components/Top/AccueilTop'

import Compo2013 from './components/2013/Compo2013'
import Premier_partant_galop from './components/2013/Premier_partant_galop'
import Premier_gagnant_galop from './components/2013/Premier_gagnant_galop'
import Premier_gagnant_longchamp from './components/2013/Premier_gagnant_longchamp'
import Premier_partant_quinte from './components/2013/Premier_partant_quinte'
import Benodet from './components/2013/Benodet'
import Falcolina from './components/2013/Falcolina'
import Pan_di_Stelle from './components/2013/Pan_di_Stelle'

import Compo2014 from './components/2014/Compo2014'
import Premier_partant_trot from './components/2014/Premier_partant_trot'
import Premier_gagnant_trot from './components/2014/Premier_gagnant_trot'
import Premiere_place_dieppe from './components/2014/Premiere_place_dieppe'
import Premier_gagnant_dieppe from './components/2014/Premier_gagnant_dieppe'
import Premier_gagnant_vincennes from './components/2014/Premier_gagnant_vincennes'
import Auteur2014 from './components/2014/Auteur2014'
import Baldi_Star from './components/2014/Baldi_Star'
import Borsalino_du_Jal from './components/2014/Borsalino_du_Jal'
import Claudia_Eria from './components/2014/Claudia_Eria'
import Kilava from './components/2014/Kilava'
import Magic_Miles from './components/2014/Magic_Miles'
import Unrefundable2014 from './components/2014/Unrefundable2014'

import Compo2015 from './components/2015/Compo2015'
import Auteur2015 from './components/2015/Auteur2015'
import Cristal_Pierji2015 from './components/2015/Cristal_Pierji2015'
import Drakkar_Delo2015 from './components/2015/Drakkar_Delo2015'
import Unrefundable2015 from './components/2015/Unrefundable2015'
import Valley_Kid from './components/2015/Valley_Kid'

import CompoClub from './components/Club/CompoClub'
import Premiere_victoire_quinte from './components/Club/Premiere_victoire_quinte'
import Premiere_journee_2_victoires from './components/Club/Premiere_journee_2_victoires'
import Al_Rassoul from './components/Club/Al_Rassoul'
import Cayo_Coco from './components/Club/Cayo_Coco'
import Cristal_Pierji_club from './components/Club/Cristal_Pierji_club'
import Diva_du_Dancing from './components/Club/Diva_du_Dancing'
import Domino_de_Larre from './components/Club/Domino_de_Larre'
import Drakkar_Delo_club from './components/Club/Drakkar_Delo_club'
import Eclipse_Somolli from './components/Club/Eclipse_Somolli'
import Loquen from './components/Club/Loquen'
import Saam from './components/Club/Saam'

import CompoXXL from './components/XXL/CompoXXL'
import Premiere_victoire_obstacle from './components/XXL/Premiere_victoire_obstacle'
import Premiere_victoire_auteuil from './components/XXL/Premiere_victoire_auteuil'
import Journee_deux_victoires from './components/XXL/Journee_deux_victoires'
import Premier_quinte_obstacle from './components/XXL/Premier_quinte_obstacle'
import Belle_Promesse_Victoire_GroupeIII from './components/XXL/Belle_Promesse_Victoire_GroupeIII'
import Belle_Promesse_Place_GroupeIII from './components/XXL/Belle_Promesse_Place_GroupeIII'
import Belle_Promesse_Listed from './components/XXL/Belle_Promesse_Listed'
import Master_Gold_Listed from './components/XXL/Master_Gold_Listed'
import Belle_Promesse from './components/XXL/Belle_Promesse'
import Galante from './components/XXL/Galante'
import Joly from './components/XXL/Joly'
import Korum from './components/XXL/Korum'
import Master_Gold from './components/XXL/Master_Gold'

import CompoTop from './components/Top/CompoTop'
import Premiere_victoire_listed from './components/Top/Premiere_victoire_listed'
import Boken from './components/Top/Boken'
import Highlands from './components/Top/Highlands'
import Hola from './components/Top/Hola'
import Honesta from './components/Top/Honesta'

import AccueilHippodromes from './components/Hippodromes/AccueilHippodromes'
import ListeHippodromes from './components/Hippodromes/ListeHippodromes'
import Belgique from './components/Hippodromes/Belgique'
import Nord from './components/Hippodromes/Nord'
import Basse_Normandie from './components/Hippodromes/Basse_Normandie'
import Ile_de_France_Haute_Normandie from './components/Hippodromes/Ile_de_France_Haute_Normandie'
import Est from './components/Hippodromes/Est'
import Ouest from './components/Hippodromes/Ouest'
import Anjou_Maine_Centre_Ouest from './components/Hippodromes/Anjou_Maine_Centre_Ouest'
import Centre_Est from './components/Hippodromes/Centre_Est'
import Sud_Ouest from './components/Hippodromes/Sud_Ouest'
import Sud_Est from './components/Hippodromes/Sud_Est'
import Corse from './components/Hippodromes/Corse'

import Jo_Way from './components/Jo_Way/Jo_Way'

import Ecurie from './components/Ecurie/Ecurie'

import AccueilLady from './components/Lady/AccueilLady'
import LadyEcurie from './components/Lady/LadyEcurie'
import LadyEntrainement from './components/Lady/LadyEntrainement'
import LadyCourses from './components/Lady/LadyCourses'
import LadyFiche from './components/Lady/LadyFiche'
import C09102022 from './components/Lady/C09102022'
import C17112022 from './components/Lady/C17112022'

import AccueilKaleotic from './components/Kaleotic/AccueilKaleotic'
import KaleoticEcurie from './components/Kaleotic/KaleoticEcurie'
import KaleoticEntrainement from './components/Kaleotic/KaleoticEntrainement'
import KaleoticCourses from './components/Kaleotic/KaleoticCourses'
import KaleoticFiche from './components/Kaleotic/KaleoticFiche'
import C04122023 from './components/Kaleotic/C04122023'
import C18122023 from './components/Kaleotic/C18122023'
import C10032024 from './components/Kaleotic/C10032024'
import C20042024 from './components/Kaleotic/C20042024'
import C09052024 from './components/Kaleotic/C09052024'
import C01072024 from './components/Kaleotic/C01072024'
import C25072024 from './components/Kaleotic/C25072024'

import Bilan from './components/Bilan'
import Credits from './components/Credits'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import ScrollToTop from './components/ScrollToTop'

const Root = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/2013' component={Accueil2013}/>
            <Route path='/2014' component={Accueil2014}/>
            <Route path='/2015' component={Accueil2015}/>
            <Route path='/club' component={AccueilClub}/>
            <Route path='/xxl' component={AccueilXXL}/>
            <Route path='/top' component={AccueilTop}/>

            <Route path='/compo2013' component={Compo2013}/>
            <Route path='/premier_partant_galop' component={Premier_partant_galop}/>
            <Route path='/premier_gagnant_galop' component={Premier_gagnant_galop}/>
            <Route path='/premier_gagnant_longchamp' component={Premier_gagnant_longchamp}/>
            <Route path='/premier_partant_quinte' component={Premier_partant_quinte}/>
            <Route path='/benodet' component={Benodet}/>
            <Route path='/falcolina' component={Falcolina}/>
            <Route path='/pan_di_stelle' component={Pan_di_Stelle}/>

            <Route path='/compo2014' component={Compo2014}/>
            <Route path='/premier_partant_trot' component={Premier_partant_trot}/>
            <Route path='/premier_gagnant_trot' component={Premier_gagnant_trot}/>
            <Route path='/premiere_place_dieppe' component={Premiere_place_dieppe}/>
            <Route path='/premier_gagnant_dieppe' component={Premier_gagnant_dieppe}/>
            <Route path='/premier_gagnant_vincennes' component={Premier_gagnant_vincennes}/>
            <Route path='/auteur2014' component={Auteur2014}/>
            <Route path='/baldi_star' component={Baldi_Star}/>
            <Route path='/borsalino_du_jal' component={Borsalino_du_Jal}/>
            <Route path='/claudia_eria' component={Claudia_Eria}/>
            <Route path='/kilava' component={Kilava}/>
            <Route path='/magic_miles' component={Magic_Miles}/>
            <Route path='/unrefundable2014' component={Unrefundable2014}/>

            <Route path='/compo2015' component={Compo2015}/>
            <Route path='/auteur2015' component={Auteur2015}/>
            <Route path='/cristal_pierji2015' component={Cristal_Pierji2015}/>
            <Route path='/drakkar_delo2015' component={Drakkar_Delo2015}/>
            <Route path='/unrefundable2015' component={Unrefundable2015}/>
            <Route path='/valley_kid' component={Valley_Kid}/>

            <Route path='/compoClub' component={CompoClub}/>
            <Route path='/premiere_victoire_quinte' component={Premiere_victoire_quinte}/>
            <Route path='/premiere_journee_2_victoires' component={Premiere_journee_2_victoires}/>
            <Route path='/al_rassoul' component={Al_Rassoul}/>
            <Route path='/cayo_coco' component={Cayo_Coco}/>
            <Route path='/cristal_pierji_club' component={Cristal_Pierji_club}/>
            <Route path='/diva_du_dancing' component={Diva_du_Dancing}/>
            <Route path='/domino_de_larre' component={Domino_de_Larre}/>
            <Route path='/drakkar_delo_club' component={Drakkar_Delo_club}/>
            <Route path='/eclipse_somolli' component={Eclipse_Somolli}/>
            <Route path='/loquen' component={Loquen}/>
            <Route path='/saam' component={Saam}/>

            <Route path='/compoXXL' component={CompoXXL}/>
            <Route path='/premiere_victoire_obstacle' component={Premiere_victoire_obstacle}/>
            <Route path='/premiere_victoire_auteuil' component={Premiere_victoire_auteuil}/>
            <Route path='/journee_deux_victoires' component={Journee_deux_victoires}/>
            <Route path='/premier_quinte_obstacle' component={Premier_quinte_obstacle}/>
            <Route path='/belle_promesse_victoire_groupeIII' component={Belle_Promesse_Victoire_GroupeIII}/>
            <Route path='/belle_promesse_place_groupeIII' component={Belle_Promesse_Place_GroupeIII}/>
            <Route path='/belle_promesse_listed' component={Belle_Promesse_Listed}/>
            <Route path='/master_gold_listed' component={Master_Gold_Listed}/>
            <Route path='/belle_promesse' component={Belle_Promesse}/>
            <Route path='/galante' component={Galante}/>
            <Route path='/joly' component={Joly}/>
            <Route path='/korum' component={Korum}/>
            <Route path='/master_gold' component={Master_Gold}/>

            <Route path='/compoTop' component={CompoTop}/>
            <Route path='/premiere_victoire_listed' component={Premiere_victoire_listed}/>
            <Route path='/boken' component={Boken}/>
            <Route path='/highlands' component={Highlands}/>
            <Route path='/hola' component={Hola}/>
            <Route path='/honesta' component={Honesta}/>
        
            <Route path='/hippodromes' component={AccueilHippodromes}/>
            <Route path='/liste_hippodromes' component={ListeHippodromes}/>
            <Route path='/belgique' component={Belgique}/>
            <Route path='/nord' component={Nord}/>
            <Route path='/basse_normandie' component={Basse_Normandie}/>
            <Route path='/ile_de_france_haute_normandie' component={Ile_de_France_Haute_Normandie}/>
            <Route path='/est' component={Est}/>
            <Route path='/ouest' component={Ouest}/>
            <Route path='/anjou_maine_centre_ouest' component={Anjou_Maine_Centre_Ouest}/>
            <Route path='/centre_est' component={Centre_Est}/>
            <Route path='/sud_ouest' component={Sud_Ouest}/>
            <Route path='/sud_est' component={Sud_Est}/>
            <Route path='/corse' component={Corse}/>

            <Route path='/jo_way' component={Jo_Way}/>

            <Route path='/ecurie' component={Ecurie}/>

            <Route path='/lady_wrung' component={AccueilLady}/>
            <Route path='/lady_ecurie' component={LadyEcurie}/>            
            <Route path='/lady_entrainement' component={LadyEntrainement}/> 
            <Route path='/lady_courses' component={LadyCourses}/> 
            <Route path='/lady_fiche' component={LadyFiche}/> 
            <Route path='/lady_09102022' component={C09102022}/>
            <Route path='/lady_17112022' component={C17112022}/>

            <Route path='/kaleotic' component={AccueilKaleotic}/>
            <Route path='/kaleotic_ecurie' component={KaleoticEcurie}/> 
            <Route path='/kaleotic_entrainement' component={KaleoticEntrainement}/> 
            <Route path='/kaleotic_courses' component={KaleoticCourses}/>
            <Route path='/kaleotic_fiche' component={KaleoticFiche}/> 
            <Route path='/kaleotic_04122023' component={C04122023}/>
            <Route path='/kaleotic_18122023' component={C18122023}/>
            <Route path='/kaleotic_10032024' component={C10032024}/>
            <Route path='/kaleotic_20042024' component={C20042024}/>
            <Route path='/kaleotic_09052024' component={C09052024}/>
            <Route path='/kaleotic_01072024' component={C01072024}/>
            <Route path='/kaleotic_25072024' component={C25072024}/>

            <Route path='/bilan' component={Bilan}/>
            <Route path='/credits' component={Credits}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/notfound' component={NotFound}/>
            <Redirect to="/notfound" />
        </Switch>
    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
