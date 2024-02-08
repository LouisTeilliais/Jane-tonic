import { ReactElement } from "react";
import './coach.css'


export default function Coach(): ReactElement {

    return (
        <>
        <div className="container-coach">
            <h2>
                Eugénie Bardoux
            </h2>
            <img className="coach-img" src="src/assets/logo.png" alt="" />
            <div className="text-container-coach">
                <p> <b>CPQ</b> Certificat de qualifications professionnelles </p>
                <p>
                    Animateur de loisir sportif
                </p>
                <p> <b> AGEE </b> Activitée gymnique d’entretien et d’expression </p>
            </div>
            <br />
            <div className="text-container-coach">
                <p> Certificat instructeur Pilates Matwork 1 </p>
                <p> Certificat instructeur Pilates Adaptation femmes </p>
                <p> enceintes, seniors et post thérapie </p>
            </div>
        </div>
        </>
    )
}