import { ReactElement } from "react";
import './footer.css'


export default function Footer() : ReactElement {
    return (

        <div id='contact' className="footer-container">
            <div className="contact-container">
                <h3>Contact</h3>
                <p>Eugénie Bardoux</p>
                <p>Educateur sportif, cours particulier et collectif</p>
                <p>à Capbreton, Seignosse, Hossegor, Labenne, Ondres</p>
            </div>
            <div className="contact-container">
                <p> +33 (0)6 71 16 38 11</p>
                <p> coucou@janetonic.fr</p>
            </div>
        </div>
    )
}