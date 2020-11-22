import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props);
       
    }
    render () {
        return (
            <div className="bodyFooter">
                <Link to="/2013" className={`divFooter ${this.props.ecurie2013 == true ? 'ecStyle' : ''}`}>
                    <div className="linkFooter">
                        <span className="colorLinkFooter">
                            <img src={require("../img/2013/casaque2013.png")} alt="casaque2013footer" className="casaqueFooter"/>
                        </span>
                    </div>
                </Link>
                <Link to="/2014" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">
                            <img src={require("../img/2014/casaque2014.png")} alt="casaque2014footer" className="casaqueFooter"/>
                        </span>
                    </div>
                </Link>
                <Link to="/2015" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">
                            <img src={require("../img/2015/casaque2015.png")} alt="casaque2015footer" className="casaqueFooter"/>
                        </span>
                    </div>
                </Link>
                <Link to="/club" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">
                            <img src={require("../img/club/casaqueClub.png")} alt="casaqueClubfooter" className="casaqueFooter"/>
                        </span>
                    </div>
                </Link>
                <Link to="/xxl" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">
                            <img src={require("../img/xxl/casaqueXXL.png")} alt="casaqueXXLfooter" className="casaqueFooter"/>
                        </span>
                    </div>
                </Link>
                <Link to="/top" className="divFooter">
                    <div className="linkFooter">
                        <span className="colorLinkFooter">
                            <img src={require("../img/top/casaqueTop.png")} alt="casaqueTopfooter" className="casaqueFooter"/>
                        </span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Footer
