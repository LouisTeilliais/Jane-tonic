import { ReactElement } from "react";
import './coach.css'


export default function Coach(): ReactElement {

    return (
        <>
        <div className="container-coach">
            <h2>
                Eugénie Bardoux
            </h2>
            <img className="coach-img" src="src/assets/prof.png" alt="" />
            <br />
            <div className="text-container-coach">
                <p> Certificat instructeur Pilates <b>Matwork 1 & 2</b></p>
                <p> Certificat instructeur Pilates Adaptation femmes </p>
                <p> enceintes, seniors et post thérapie </p>
            </div>
            <br />
            <div className="text-container-coach">
                <b> Certificat de qualification professionnelle </b>
                <p> Animateur de loisirs sportifs</p>
                <p> Activité gymnique d’entretien et d’expression </p>
            </div>
        </div>
        </>
    )
}