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
        let otsalautamaara = "Otsalauta(23*170): " + ((korkeus * 2) + leveys) * otsalauta + " metriä";
        let pystyruode = "Pystyruode(22*100): " + Math.ceil(leveys / kattotuoli * korkeus * 1.05) + " metriä"; 
        let tuuletusrima = "Tuuletusrima(22*50): " + Math.ceil(leveys / kattotuoli * korkeus * 1.05) + " metriä";
        let vaakaruode = "Vaakaruode(32*100): " + Math.ceil(korkeus / kattomalli * leveys * 1.05) + " metriä";
        
        return (
        document.getElementById("tulos").innerHTML = LapePA + "<br />" + otsalautamaara + "<br />" + pystyruode + "<br />" + tuuletusrima + "<br />" + vaakaruode
        );       
    }

    return(

        <div className={styles.calculator}>

        <div>
            <h2>Lape laskuri</h2>
        </div>

        <div className={styles.calculator_row}>
            <div>
                <label htmlFor="korkeus">Lappeen korkeus (m)</label>
                <input type='number' id='korkeus' name='korkeus' min="0" step="0.1" />
            </div>
            <div>
                <label htmlFor='leveys'>Lappeen leveys (m)</label>
                <input type='number' id='leveys' name='leveys' min="0" step="0.1" />
            </div>
        </div>

        <div className={styles.calculator_row}>
            <div>
                <label for="kattotuoli">Kattotuolijako</label>
                <input type='number' id='kattotuoli' name='kattotuoli' min="0" step="0.1" />
            </div>
            <div>
                <label for='otsalauta'>Otsalautakierros</label>
                <input type='number' id='otsalauta' name='otsalauta' min="0" />
            </div>
        </div>

        <div className={styles.calculator_row}>
            <div>
                <label htmlFor='kattomalli'>Katon tyyppi</label>
                <select name='kattomalli' id='kattomalli'>
                    <option value="0.35">Tiilikuvio</option>
                    <option value="0.30">Lukkosauma</option>
                    <option value="0.35">Tiilikatto</option>
                </select>
            </div>
            <div>
                <Button secondary onClick={laske}>LASKE</Button>
            </div>
        </div>

        <div className={styles.calculator}>
            <div>
                <div id="tulos"></div>
            </div>
        </div>

        </div>
    );
}

export default Calculator;