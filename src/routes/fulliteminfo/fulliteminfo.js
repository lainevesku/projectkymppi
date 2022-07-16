import styles from './fulliteminfo.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, FloatingButton } from '../../shared/uibuttons';
import { MdRoofing } from 'react-icons/md';

function FullItemInfo (props) {

    const { id } =useParams();
    const index = props.data.findIndex(item => item.id === id);
    let item = props.data[index];

    const locale = "fi-FI";
    const start = new Date(item.periodStart).toLocaleDateString(locale);
    const end =  new Date(item.periodEnd).toLocaleDateString(locale);
    const roofArea = item.korkeus * item.leveys;

    // saatan kääntää valuen ja uuden arvon toisin päin, riippuu tulevista kaavoista
    let kattomalli = "";
        if(item.roofType === "10") {
                kattomalli = "Tiilikuvio"
        } if(item.roofType === "100") {
                kattomalli = "Lukkosauma"
        } if(item.roofType === "1000") {
                kattomalli = "Tiilikatto"
        }
        

    // koodi löydetty sivulta https://www.techighness.com/post/javascript-get-information-of-week-days-between-two-dates/. Vähän omaa soveltamista tehty,
    // jotta koodi toimii haluamallani tavalla.
    function countDaysOfWeekBetweenDates(sDate = start,
        eDate = end) {
        const startDate = new Date(sDate);
        const endDate = new Date(eDate);

        endDate.setDate(endDate.getDate() + 1);

        // initialize each day with 0
        const daysOfWeekCount = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        };

        while (startDate < endDate) {
            daysOfWeekCount[startDate.getDay()] = daysOfWeekCount[startDate.getDay()] + 1;
            startDate.setDate(startDate.getDate() + 1);
        }

        return daysOfWeekCount;

    }

    const weekDaysCount = countDaysOfWeekBetweenDates(item.periodStart, item.periodEnd);
    const tyopaivat = weekDaysCount[1] + weekDaysCount[2] + weekDaysCount[3] + weekDaysCount[4] + weekDaysCount[5];



    return (
        <div className={styles.fulliteminfo}>
            <div className={styles.fulliteminfo_headline}>
            <h2>{item.nimi + ", " + item.location}</h2>
            </div>
            <div className={styles.fulliteminfo_firstbox}>
                <div className={styles.fulliteminfo_fb_headline}><h3>TYÖMAA</h3></div>
                <div className={styles.fulliteminfo_fb_address}>Työmaan osoite: <b>{item.address} <br /> {item.postal + " " + item.location}</b> </div>
                <div className={styles.fulliteminfo_fb_periodstart}>Työmaa aloitettiin: <b>{start}</b></div>
                <div className={styles.fulliteminfo_fb_periodend}>Työmaa saatiin valmiiksi:  <b>{end}</b></div>
                <div className={styles.fulliteminfo_fb_fulldates}>Työpäivät: <b>{tyopaivat}</b></div>
                <div className={styles.fulliteminfo_fb_amount}>Urakan hinta: <b>{item.amount}</b>€</div>
                <div className={styles.fulliteminfo_fb_payperday}>Päiväkohtainen palkka: <b>{Math.round((item.amount / tyopaivat + Number.EPSILON) * 100) / 100 }€/päivä</b></div>
            </div>
            <div className={styles.fulliteminfo_secondbox}>
                <div className={styles.fulliteminfo_sb_headline}><h3>KATTO</h3></div>               
                <div className={styles.fulliteminfo_sb_roofarea}>Katon pinta-ala: <b>{roofArea} m² </b></div>
                <div className={styles.fulliteminfo_sb_rooftype}>Uuden katon malli: <b>{kattomalli}</b></div>
                <div className={styles.fulliteminfo_sb_roofcolor}>Uuden katon väri: <b>{item.roofColor}</b></div>
                <div className={styles.fulliteminfo_sb_pystyruode}>Pystyruode(22*100): <b>TÄHÄN</b> </div> 
                <div className={styles.fulliteminfo_sb_tuuletusrima}>Tuuletusrima(22*50): <b>TÄHÄN</b> </div> 
                <div className={styles.fulliteminfo_sb_vaakaruode}>Vaakaruode(32*100): <b>TÄHÄN</b> </div>
                <div className={styles.fulliteminfo_sb_otsalauta}>Otsalauta(23*170): <b>TÄHÄN</b> </div>
                <div className={styles.fulliteminfo_sb_freeword}>Kommentteja: <b>{item.freeWord} </b></div>
            </div>
    
            <div className={styles.fulliteminfo_button}>  
                <Link to={"/edit/"+item.id}><Button primary>MUOKKAA</Button></Link>
            </div>
            <Link to="/addLAPE"><FloatingButton secondary><MdRoofing /></FloatingButton></Link>
        </div>
    );
}


export default FullItemInfo;