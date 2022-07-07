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

    // koodi löydetty sivulta https://www.techighness.com/post/javascript-get-information-of-week-days-between-two-dates/. Vähän omaa soveltamista tehty,
    // jotta koodi toimii haluamallani tavalla.
    const countDaysOfWeekBetweenDates = (
        sDate = start, 
        eDate = end
      ) => {
      const startDate = new Date(sDate)
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
     
    };

    const weekDaysCount = countDaysOfWeekBetweenDates(item.periodStart, item.periodEnd);
    const tyopaivat = weekDaysCount[1] + weekDaysCount[2] + weekDaysCount[3] + weekDaysCount[4] + weekDaysCount[5];


    return (
        <div className={styles.fulliteminfo}>
            <div className={styles.fulliteminfo_headline}>
            <h2>{item.nimi + ", " + item.location}</h2>
            </div>
            <div className={styles.fulliteminfo_firstbox}>
                <div className={styles.fulliteminfo_fb_headline}><h3>TYÖMAA</h3></div>
                <div className={styles.fulliteminfo_fb_address}>Työmaan osoite: <b>{item.address} <br /> {item.location}</b> </div>
                <div className={styles.fulliteminfo_fb_periodstart}>Työmaa aloitettiin: <b>{start}</b></div>
                <div className={styles.fulliteminfo_fb_periodend}>Työmaa saatiin valmiiksi:  <b>{end}</b></div>
                <div className={styles.fulliteminfo_fb_fulldates}>Työpäivät: <b>{tyopaivat}</b></div>
                <div className={styles.fulliteminfo_fb_amount}>Urakan hinta: <b>{item.amount}</b>€</div>
                <div className={styles.fulliteminfo_fb_payperday}>Päiväkohtainen palkka: <b>{Math.round((item.amount / tyopaivat + Number.EPSILON) * 100) / 100 }€/päivä</b></div>
            </div>
            <div className={styles.fulliteminfo_secondbox}>
                <div className={styles.fulliteminfo_sb_headline}><h3>KATTO</h3></div>               
                <div className={styles.fulliteminfo_sb_roofarea}>Katon pinta-ala: <b>{item.roofArea} m² </b></div>
                <div className={styles.fulliteminfo_sb_rooftype}>Uuden katon malli: <b>{item.roofType}</b></div>
                <div className={styles.fulliteminfo_sb_roofcolor}>Uuden katon väri: <b>{item.roofColor}</b></div>
                <div className={styles.fulliteminfo_sb_wood}>Puutavaran määrä: <b>YHTEENSÄ</b></div>
                <div className={styles.fulliteminfo_sb_wood2x2}> Kakkoskakkonen: <b>TÄHÄN</b> </div> 
                <div className={styles.fulliteminfo_sb_woodlankku}> Lankku: <b>TÄHÄN</b> </div> 
                <div className={styles.fulliteminfo_sb_woodrima}> Rima: <b>TÄHÄN</b> </div>
                <div className={styles.fulliteminfo_sb_freeword}>Kommentteja: <b>{item.freeWord} </b></div>
            </div>
    
            <div className={styles.fulliteminfo_button}>  
                <Link to={"/edit/"+item.id}><Button primary>MUOKKAA</Button></Link>
            </div>
        </div>
    );
}


export default FullItemInfo;