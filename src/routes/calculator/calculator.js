import styles from './calculator.module.scss';
import { Button } from '../../shared/uibuttons';

function Calculator() {

    function laske() {

        let korkeus = Number(document.getElementById("korkeus").value);
        let leveys = Number(document.getElementById("leveys").value);
        let kattotuoli = document.getElementById("kattotuoli").value;
        let otsalauta = document.getElementById("otsalauta").value;
        let e = document.getElementById("kattomalli");
        let kattomalli = e.value;
        let LapePA ="Lappeen pinta-ala: " + korkeus * leveys + "m²";
        let otsaMaara = "Otsalauta(23*170): " + ((korkeus * 2) + leveys) * otsalauta * kattomalli + " metriä";
        let pystyruode = "Pystyruode(22*100): " + korkeus * leveys * kattotuoli * 1.05 * kattomalli + " metriä";
        
        return (
        document.getElementById("tulos").innerHTML = LapePA + "<br />" + otsaMaara + "<br />" + pystyruode
        );       
    }

    return(
        <div>

        <div>
            <h2>Lape laskuri</h2>
        </div>

        <div className={styles.calculator}>
            <div>
            <label htmlFor='kattomalli'>Katon tyyppi</label>
                <select name='kattomalli' id='kattomalli'>
                    <option value="1">Tiilikuvio</option>
                    <option value="10">Lukkosauma</option>
                    <option value="100">Tiilikatto</option>
                </select>
            </div>
            <div>
                <label htmlFor="korkeus">Lappeen korkeus (m)</label>
                <input type='number' id='korkeus' name='korkeus' min="0" step="0.1" />
            </div>
            <div>
                <label htmlFor='leveys'>Lappeen leveys (m)</label>
                <input type='number' id='leveys' name='leveys' min="0" step="0.1" />
            </div>
        </div>

        <div className={styles.calculator}>
            <div>
                <label for="kattotuoli">Kattotuolijako</label>
                <input type='number' id='kattotuoli' name='kattotuoli' min="0" step="0.1" />
            </div>
            <div>
                <label for='otsalauta'>Otsalautakierros</label>
                <input type='number' id='otsalauta' name='otsalauta' min="0" />
            </div>
        </div>

        <div className={styles.calculator}>
            <div>
                <Button secondary onClick={laske}>LASKE</Button>
                <div id="tulos"></div>
            </div>
        </div>

        </div>
    );
}

export default Calculator;