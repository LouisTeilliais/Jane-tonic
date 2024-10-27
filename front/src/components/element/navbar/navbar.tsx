import { ReactElement } from "react";
import './navbar.css'

export default function Navbar() : ReactElement {
    return (
        <div className="navbar-container">
            <div className="button-container">
                <a href="#agenda">
                    L'AGENDA
                </a>
                <a href="#course">
                    LES COURS
                </a>
                <a href="#tarifs">
                    TARIFS
                </a>
                <a href="#coach">
                    LA COACH
                </a>
                <a href="#contact">
                    CONTACT
                </a>
            </div>
        </div>
    )
}