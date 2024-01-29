import './Tarifs.css';

export default function Tarifs() {
    return (
        <div className='bloc-tarifs'>
            <div className="cours-collec-1h">
                <h2 className="titre">Cours collectif 1h</h2>
                <div>
                    <h3 id="titre-circuit">Circuit training fitness & Streching</h3>
                    <ul id="liste-prix-séances-circuit">
                        <li  id="prix-séance-collective-circuit"><span>1 séance</span><strong> 12 euros</strong></li>
                        <li  id="prix-séance-collective-circuit"><span>3 séances</span><strong> 30 euros</strong></li>
                        <li  id="prix-séance-collective-circuit"><span>10 séances</span><strong> 90 euros</strong></li>
                    </ul >
                    <p></p>
                    <h3 id="titre-pilates">Pilates</h3>
                    <ul id="liste-prix-séances-pilates">
                        <li  id="prix-séance-collective-pilates"><span>1 séance</span> <strong>15 euros</strong></li>
                        <li  id="prix-séance-collective-pilates"><span>3 séances</span> <strong>40 euros</strong></li>
                        <li  id="prix-séance-collective-pilates"><span>10 séances</span> <strong>125 euros</strong></li>
                    </ul>
                </div>
            </div>
            <div className="cours-partic-dom-1h">
                <h2 className="titre">Cours particulier domicile 1h</h2>
                <div>
                    <h4 id="titre-circuit">Circuit training fitness, Streching & pilates</h4>
                    <ul id="liste-prix-séances">
                        <li id="prix-séance-domicile" ><span>1 séance SOLO</span> <strong>50 euros</strong></li>
                        <li id="prix-séance-domicile"><span>1 séance DUO</span> <strong>70 euros</strong></li>
                    </ul>
                    <h5 id="reglement-domicile">Les cours particuliers à domicile peuvent être réglés en SESU, vous bénéficierez d'une réduction 50% de la totalité du montant sur votre prochaine échéance d'impôts.</h5>
                </div>
            </div>
        </div>
    )
}