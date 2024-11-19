import './prices.css';

export default function Tarifs() {
    return (
        <div className='bloc-tarifs'>
            <div className="session-collec-1h">
                <h2 className="title">Cours collectif 1h</h2>
                <div>
                    <h3 className="title">Extérieur</h3>
                    <div className='container'>
                        <div className='prices-container'>
                            <p className='text-sessions'>
                                1 séance 
                            </p>
                            <p className='text-prices'>
                                12 euros
                            </p>
                        </div>
                        <div className='prices-container'>
                            <p className='text-sessions'>
                                3 séances
                            </p>
                            <p className='text-prices'>
                                30 euros
                            </p>
                        </div>
                        <div className='prices-container'>
                            <p className='text-sessions'>
                                10 séances
                            </p>
                            <p className='text-prices'>
                                90 euros
                            </p>
                        </div>
                    </div>
                    <p></p>
                    <h3 className="title">Intérieur</h3>
                    <div className='container'>
                        <div className='prices-container'>
                            <p className='text-sessions'>
                                1 séance 
                            </p>
                            <p className='text-prices'>
                                15 euros
                            </p>
                        </div>
                        <div className='prices-container'>
                            <p className='text-sessions'>
                                3 séances
                            </p>
                            <p className='text-prices'>
                                40 euros
                            </p>
                        </div>
                        <div className='prices-container'>
                            <p className='text-sessions'>
                                10 séances
                            </p>
                            <p className='text-prices'>
                                125 euros
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <h2 className="title">Cours particulier domicile 1h</h2>
                <div>
                    <div className='container'>
                        <div className='prices-container-black'>
                            <p className='text-sessions'>
                                1 séance SOLO
                            </p>
                            <p className='text-prices'>
                                50 euros
                            </p>
                        </div>
                        <div className='prices-container-black'>
                            <p className='text-sessions'>
                                1 séance DUO
                            </p>
                            <p className='text-prices'>
                                70 euros
                            </p>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='container-rules'>
                            <p>
                                Les cours particuliers à domicile peuvent être réglés en <b>CESU</b>, vous bénéficierez alors d'une réduction 50% de la totalité du montant sur votre prochaine échéance d'impôts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}