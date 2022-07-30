import styles from './calculator.module.scss';
import { Button } from '../../shared/uibuttons';

function Calculator() {

    function laske() {

        let korkeus = Number(document.getElementById("korkeus").value);
        let leveys = Number(document.getElementById("leveys").value);
        let kattotuoli = document.getElementById("kattotuoli").value;
        let otsalauta = document.getElementById("otsalauta").value;
        let e = document.getElementById("kattomalli");
        let kattomalliarvo = "";
            if (e.value === "Tiilikuvio") {
            kattomalliarvo = 0.35 ;
            }   if (e.value === "Lukkosauma") {
            kattomalliarvo = 0.3 ;
            }   if (e.value === "Tiilikatto") {
            kattomalliarvo = 0.35 ;
            }
        let peltimaaraarvo = "";
            if (e.value === "Tiilikuvio") {
                peltimaaraarvo = 1.1 ;
            }   if (e.value === "Lukkosauma") {
                peltimaaraarvo = 0.47 ;
            }
        let LapePA ="Lappeen pinta-ala: " + korkeus * leveys + "m²";
        let otsalautamaara = "Otsalauta(23*170): " + ((korkeus * 2) + leveys) * otsalauta + " metriä";
        let pystyruode = "Pystyruode(22*100): " + Math.ceil(leveys / kattotuoli * korkeus * 1.05) + " metriä"; 
        let tuuletusrima = "Tuuletusrima(22*50): " + Math.ceil(leveys / kattotuoli * korkeus * 1.05) + " metriä";
        let vaakaruode = "Vaakaruode(32*100): " + Math.ceil(korkeus / kattomalliarvo * leveys * 1.05) + " metriä";
        let peltimaara = e.value === "Tiilikatto" ? "Tiilien määrä: " + Math.ceil((korkeus / 0.35) * (leveys / 0.3) * 10) / 10 + " KPL" : "Pellin määrä: " + Math.ceil(leveys / peltimaaraarvo * 10) / 10 + " KPL" ;
        let reunapelti = "Reunapelti: " + korkeus * 2 + " metriä" ;
        let harjapelti = "Harjapelti: " + leveys + " metriä" ;
        let vetopelti = e.value === "Lukkosauma" ? "Vetopelti: " + leveys : "";


        return (
        document.getElementById("tulos").innerHTML =    LapePA + "<br />" +
                                                        otsalautamaara + "<br />" + 
                                                        pystyruode + "<br />" + 
                                                        tuuletusrima + "<br />" + 
                                                        vaakaruode + "<br />" +
                                                        peltimaara + "<br />" +
                                                        reunapelti + "<br />" +
                                                        harjapelti + "<br />" +
                                                        vetopelti

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
                    <option value="Tiilikuvio">Tiilikuvio</option>
                    <option value="Lukkosauma">Lukkosauma</option>
                    <option value="Tiilikatto">Tiilikatto</option>
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