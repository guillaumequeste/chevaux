import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/" className="colorLinkFooter">Accueil</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/2013" className="colorLinkFooter">2013</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/2014" className="colorLinkFooter">2014</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/2015" className="colorLinkFooter">2015</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/club" className="colorLinkFooter">Club</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer