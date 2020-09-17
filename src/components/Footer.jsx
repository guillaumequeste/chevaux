import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <Link to="/" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">Accueil</span>
                    </div>
                </Link>
                <Link to="/2013" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">2013</span>
                    </div>
                </Link>
                <Link to="/2014" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">2014</span>
                    </div>
                </Link>
                <Link to="/2015" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">2015</span>
                    </div>
                </Link>
                <Link to="/club" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">Club</span>
                    </div>
                </Link>
                <Link to="/xxl" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">XXL</span>
                    </div>
                </Link>
                <Link to="/top" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">Top</span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Footer