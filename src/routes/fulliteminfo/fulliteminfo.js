import styles from './fulliteminfo.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/uibuttons';

function FullItemInfo (props) {

    const { id } =useParams();
    const index = props.data.findIndex(item => item.id === id);
    let item = props.data[index];

    const locale = "fi-FI";
    const start = new Date(item.periodStart).toLocaleDateString(locale);
    const end =  new Date(item.periodEnd).toLocaleDateString(locale);


    return (
        <div className={styles.fulliteminfo}>
            <h2>{item.nimi + ", " + item.location}</h2>
            <div className={styles.fulliteminfo_left}>
                <div className={styles.fulliteminfo_left_periodstart}>Työmaa aloitettiin: {start}</div>
                <div className={styles.fulliteminfo_left_periodend}>Työmaa saatiin valmiiksi: {end}</div>
                <div className={styles.fulliteminfo_left_fulldates}>Tähän työpäivien määrä:!!!</div>
                <div className={styles.fulliteminfo_left_amount}>Urakasta saatu palkka: {item.amount}€</div>
                <div className={styles.fulliteminfo_left_payperday}>Tähän lasketaan päiväkohtainen palkka: {item.amount / 2} €/päivä</div>
            </div>
            <div className={styles.fulliteminfo_right}>
                <div className={styles.fulliteminfo_right_address}>Työmaan osoite: {item.address} {item.location} </div>
                <div className={styles.fulliteminfo_right_roofarea}>Katon pinta-ala: {item.roofArea} m²</div>
                <div className={styles.fulliteminfo_right_rooftype}>Uuden katon malli: {item.roofType}</div>
                <div className={styles.fulliteminfo_right_roofcolor}>Uuden katon väri: {item.roofColor}</div>
                <div className={styles.fulliteminfo_right_howmuch}>
                                                                    <h3>Tarvittavan puutavaran määrä</h3>
                                                                        Kakkoskakkonen:TÄHÄN <br />
                                                                        Lankku: TÄHÄN <br />
                                                                        Rima: TÄHÄN
                                                                        </div>
                <div className={styles.fulliteminfo_right_freeword}>Kommentteja: {item.freeWord}</div>
            </div>
            <div className={styles.fulliteminfo_button}>
                <Link to={"/edit/"+item.id}><Button primary>Muokkaa</Button></Link>
            </div>
        </div>
    );
}


export default FullItemInfo;