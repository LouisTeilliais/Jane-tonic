import { ReactElement, useState } from "react";
import './diary-card.css'

export default function DiaryCard() : ReactElement {

    const [isReserved, setIsReserved] = useState(false)

    console.log(isReserved)

    return (
        <>
            <div className="container-card">
                <div className="container-date">
                    <p className="date-day">MERCREDI</p>
                    <p className="date-number">22</p>
                    <p className="date-month">Novembre</p>
                </div>
                <div className="container-info">
                    <div className="container-info-top">
                        <p>
                            09h à 10h
                        </p>
                        <button
                            onClick={() => setIsReserved(!isReserved)}
                        >
                            RESERVER
                        </button>
                    </div>
                    <div className="container-info-middle">
                        <p className="place-card">
                            JARDIN PUBLIC DE CAPBRETON
                        </p>
                        <p className="title-card">
                            Pilates
                        </p>
                        <p className="level-card">
                            TOUS NIVEAUX
                        </p>
                    </div>
                    {/* {isReserved && 
                        <div className="reservation-info">
                            hello
                        </div>
                    } */}
                </div>
            </div>
        </>
    )
}