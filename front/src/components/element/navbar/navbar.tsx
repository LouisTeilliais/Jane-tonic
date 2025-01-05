import { ReactElement } from "react";
import './navbar.css'

export default function Navbar() : ReactElement {
    return (
        <div className="navbar-container">
            <div className="navbar-button-container">
                <a className="link-nav" href="#agenda">
                    L'AGENDA
                </a>
                <a className="link-nav" href="#course">
                    LES COURS
                </a>
                <a className="link-nav" href="#tarifs">
                    TARIFS
                </a>
                <a className="link-nav" href="#coach">
                    LA COACH
                </a>
                <a className="link-nav" href="#contact">
                    CONTACT
                </a>
            </div>
        </div>
    )
}