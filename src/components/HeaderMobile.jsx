import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HeaderMobile extends Component {
    render () {
        return (
            <div className="bodyHeaderMobile">
                <div to="/" className="divHeaderMobile">
                    <Link to="/credits" className="linkHeaderMobile1">Crédits</Link>
                    <Link to="/contact" className="linkHeaderMobile2">Contact</Link>
                </div>
            </div>
        )
    }
}

export default HeaderMobile