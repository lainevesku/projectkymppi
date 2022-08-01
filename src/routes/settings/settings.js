import styles from './settings.module.scss';
import { Button } from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';
import { useHistory } from "react-router-dom";

function Settings(props) {

    const user = useUser();
    const auth = useAuth();
    const history = useHistory();

    // Kirjaudu ulos
    const signOut = async () => {
        await auth.signOut();
        history.push('.');
        window.location.reload(); 
    }

    return (
        <div className={styles.settings}>
            <h2>Profiili</h2>
            <div className={styles.settings_profile}>
                <div className={styles.settings_user}>
                    <div><img src={user.data.photoURL} alt="" /></div>
                    <div>{user.data.displayName}<br/>{user.data.email}</div>
                </div>
                <div className={styles.settings_button}>
                    <Button secondary onClick={signOut}>Kirjaudu ulos</Button>
                </div>
                <h2>Ohjeita La'Peten käyttöön</h2>
                <div className={styles.settings_images}>
                    <img src={require("../../assets/images/Etusivu.png")} alt='' />
                    <p>Etusivulta löydät kaikki lisäämäsi työmaat aikajärjestyksessä
                       uusimmasta vanhimpaan. Etusivun oikeassa alakulmassa on nappi,
                       jossa on sinisellä taustalla katon kuva. Sitä painamalla pääset
                       lisäämään työmaita listaasi. Laittamalla hiiren työmaan nimen
                       päälle, ruutuun ilmestyy musta nuoli harmaalla taustalla, jota painamalla pääset
                       näkemään tarkemmat tiedot työmaastasi. Alareunassa on vielä 
                       kolme kuvaketta. Vasemmalta ensimmäistä painamalla palaat etusivulle.
                       Keskimmäistä painamalla pääset laskin sivulle ja viimeisestä
                       pääset tälle sivulle, mistä löytyy ohjeet ja uloskirjautuminen.
                    </p>
                </div>
                <div className={styles.settings_images}>
                    <img src={require("../../assets/images/Lisaasivu.png")} alt='' />
                    <p>Työmaan lisäämissivulla voit antaa työmaan tiedot lomakkeelle.
                       Lomakkeelle voit lisätä työmaan perustietoja, kuten asiakkaan
                       nimi ja osoite. Lomakkeella voit lisätä myös työmaasta saamasi
                       palkan ja merkitä koska työt alkoivat ja koska työmaa saatiin
                       valmiiksi. Sen jälkeen kun nämä tiedot on lisätty voit valita,
                       minkä katon asiakas on valinnut kuin myös katon värin. Lomakkeelta
                       löytyy 6 lape-nappia ja aina yhtä nappia painamalla saa auki lomakkeen
                       mihin yhden lappeen tiedot laitetaan. Tämän jälkeen voit halutessasi sulkea kyseisen 
                       lappeen tuplapainamalla lape-nappia. Toista tämä niin monta kertaa kuin lappeita
                       on urakassasi. Lopuksi viimeisenä on tekstikenttä, johon voit laittaa muita tietoja,
                       jos on jotain mitä haluat itsellesi erikseen muistiin.
                    </p>
                </div>
                <div className={styles.settings_images}>
                    <img src={require("../../assets/images/Tiedot.png")} alt='' />
                    <p>Työmaa sivulta löydät kaikki äsken lisäämäsi tiedot. La'Pete myös
                       laskee antamisesi päivien perusteella kuinka monta arkipäivää
                       työmaalla ollaan oltu ja laskee kanssa keskimääräisen päiväpalkan
                       urakalle. La'Pete laskee antamiesi tietojen perusteella kuinka paljon
                       työmaalla tarvitaan eri puutavaraa ja paljonko tarvitaan peltejä/tiiliä.
                       Ylimmäisenä on kaikki tavarat yhteenlaskettuna ja sen jälkeen löydät jokaisen 
                       lappeen tavarat erikseen eriteltyinä.
                    </p>
                </div>
                <div className={styles.settings_images}>
                    <img src={require("../../assets/images/Laskin.png")} alt='' />
                    <p>Lape laskuri sivulta löydät samanlaisen lomakkeen, mitä työmaan lisäämissivulla
                       lape-nappia painamalla ilmestyy. Syöttämällä lappeen korkeuden, leveyden,
                       kattotuolijaon ja otsalautakierroksen ja valitsemalla katon tyypin La'Pete
                       laskee niiden perusteella kuinka paljon mitäkin tavaraa yksi lape tarvitsee.
                    </p>
                </div>

            </div>  

        </div>
    );
}

export default Settings;