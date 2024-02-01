import { ReactElement } from "react";
import './navbar.css'

export default function Navbar() : ReactElement {
    return (
        <div className="navbar-container">
            <div className="button-container">
                <a href="#agenda">
                    L'agenda
                </a>
                <a href="#course">
                    Les cours
                </a>
                <a href="#tarifs">
                    Tarifs
                </a>
                <a href="#coach">
                    La coach
                </a>
                <a href="#contact">
                    Contact
                </a>
            </div>
            <div className="logo-container">
                <a>
                    <img src="src/assets/fb.svg" alt="" />
                </a>
                <a>
                    <img src="src/assets/insta.svg" alt="" />
                </a>
            </div>
        </div>
    )
}