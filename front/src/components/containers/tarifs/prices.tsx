import './prices.css';

export default function Tarifs() {
    return (
        <div className='bloc-tarifs'>
            <div className="session-collec-1h">
                <h2 className="title">Cours collectif 1h</h2>
                <div>
                    <h3 id="subtitles">Circuit training fitness & Streching</h3>
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
                    <h3 className="title">Pilates</h3>
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
            </div>
            <div className="cours-partic-dom-1h">
                <h2 className="titre">Cours particulier domicile 1h</h2>
                <div>
                    <h3 id="subtitles">Circuit training fitness, Streching & pilates</h3>
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
                                Les cours particuliers à domicile peuvent être réglés en <b>SESU</b>, vous bénéficierez alors d'une réduction 50% de la totalité du montant sur votre prochaine échéance d'impôts.
                            </p>
                        </div>
                    </div>
                    {/* <ul id="liste-prix-séances">
                        <li id="prix-séance-domicile" ><span>1 séance SOLO</span> <strong>50 euros</strong></li>
                        <li id="prix-séance-domicile"><span>1 séance DUO</span> <strong>70 euros</strong></li>
                    </ul>
                    <h5 id="reglement-domicile">Les cours particuliers à domicile peuvent être réglés en SESU, vous bénéficierez d'une réduction 50% de la totalité du montant sur votre prochaine échéance d'impôts.</h5> */}
                </div>
            </div>
        </div>
    )
}