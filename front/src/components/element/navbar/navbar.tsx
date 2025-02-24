import { ReactElement } from "react";
import './navbar.css';

export default function Navbar(): ReactElement {
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="navbar-container">
            <div className="navbar-button-container">
                <a className="link-nav" href="#agenda" onClick={(e) => handleScroll(e, '#agenda')}>
                    AGENDA
                </a>
                <a className="link-nav" href="#course" onClick={(e) => handleScroll(e, '#course')}>
                    LES COURS
                </a>
                <a className="link-nav" href="#tarifs" onClick={(e) => handleScroll(e, '#tarifs')}>
                    TARIFS
                </a>
                <a className="link-nav" href="#coach" onClick={(e) => handleScroll(e, '#coach')}>
                    COACH
                </a>
                <a className="link-nav" href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
                    CONTACT
                </a>
            </div>
        </div>
    );
}
