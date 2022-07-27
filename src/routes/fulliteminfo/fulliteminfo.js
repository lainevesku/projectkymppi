import styles from './fulliteminfo.module.scss';
import { useState } from 'react';
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

    let kattomalliarvo = "";
        if(item.roofType === "Tiilikuvio") {
                kattomalliarvo = "0.35"
        } if(item.roofType === "Lukkosauma") {
                kattomalliarvo = "0.3"
        } if(item.roofType === "Tiilikatto") {
                kattomalliarvo = "0.35"
        }

    const roofArea1 = item.korkeus1 * item.leveys1;
    const pystyruode1 = Math.ceil(item.leveys1 / item.kattotuolijako1 * item.korkeus1 * 1.05)  ;
    const tuuletus1 = Math.ceil(item.leveys1 / item.kattotuolijako1 * item.korkeus1 * 1.05) ;
    const vaakaruode1 = Math.ceil(item.korkeus1 / kattomalliarvo * item.leveys1 * 1.05) ;
    const otsalauta1 = ((item.korkeus1 * 2) + parseInt(item.leveys1)) * item.otsalautakierros1;
    const roofArea2 = item.korkeus2 * item.leveys2;
    const pystyruode2 = Math.ceil(item.leveys2 / item.kattotuolijako2 * item.korkeus2 * 1.05) ;
    const tuuletus2 = Math.ceil(item.leveys2 / item.kattotuolijako2 * item.korkeus2 * 1.05)  ;
    const vaakaruode2 = Math.ceil(item.korkeus2 / kattomalliarvo * item.leveys2 * 1.05) ;
    const otsalauta2 = ((item.korkeus2 * 2) + parseInt(item.leveys2)) * item.otsalautakierros2 ;
    const roofArea3 = item.korkeus3 * item.leveys3;
    const pystyruode3 =  Math.ceil(item.leveys3 / item.kattotuolijako3 * item.korkeus3 * 1.05)  ;
    const tuuletus3 = Math.ceil(item.leveys3 / item.kattotuolijako3 * item.korkeus3 * 1.05) ;
    const vaakaruode3 = Math.ceil(item.korkeus3 / kattomalliarvo * item.leveys3 * 1.05) ;
    const otsalauta3 = ((item.korkeus3 * 2) + parseInt(item.leveys3)) * item.otsalautakierros3 ;
    const roofArea4 = item.korkeus4 * item.leveys4;
    const pystyruode4 = Math.ceil(item.leveys4 / item.kattotuolijako4 * item.korkeus4 * 1.05) ;
    const tuuletus4 = Math.ceil(item.leveys4 / item.kattotuolijako4 * item.korkeus4 * 1.05) ;
    const vaakaruode4 = Math.ceil(item.korkeus4 / kattomalliarvo * item.leveys4 * 1.05) ;
    const otsalauta4 = ((item.korkeus4 * 2) + parseInt(item.leveys4)) * item.otsalautakierros4 ;
    const roofArea5 = item.korkeus5 * item.leveys5;
    const pystyruode5 = Math.ceil(item.leveys5 / item.kattotuolijako5 * item.korkeus5 * 1.05) ;
    const tuuletus5 = Math.ceil(item.leveys5 / item.kattotuolijako5 * item.korkeus5 * 1.05) ;
    const vaakaruode5 = Math.ceil(item.korkeus5 / kattomalliarvo * item.leveys5 * 1.05) ;
    const otsalauta5 = ((item.korkeus5 * 2) + parseInt(item.leveys5)) * item.otsalautakierros5 ;
    const roofArea6 = item.korkeus6 * item.leveys6;
    const pystyruode6 = Math.ceil(item.leveys6 / item.kattotuolijako6 * item.korkeus6 * 1.05) ;
    const tuuletus6 = Math.ceil(item.leveys6 / item.kattotuolijako6 * item.korkeus6 * 1.05) ;
    const vaakaruode6 = Math.ceil(item.korkeus6 / kattomalliarvo * item.leveys6 * 1.05) ;
    const otsalauta6 = ((item.korkeus6 * 2) + parseInt(item.leveys6)) * item.otsalautakierros6 ;
    const roofAreaYHT = roofArea1 + roofArea2 + roofArea3 + roofArea4 + roofArea5 + roofArea6 ;
    const pystyruodeYHT = pystyruode1 + pystyruode2 + pystyruode3 + pystyruode4 + pystyruode5 + pystyruode6 ;
    const tuuletusYHT = tuuletus1 + tuuletus2 + tuuletus3 + tuuletus4 + tuuletus5 + tuuletus6 ;
    const vaakaruodeYHT = vaakaruode1 + vaakaruode2 + vaakaruode3 + vaakaruode4 + vaakaruode5 + vaakaruode6 ;
    const otsalautaYHT = otsalauta1 + otsalauta2 + otsalauta3 + otsalauta4 + otsalauta5 + otsalauta6 ;


    let [style1] = useState(item.korkeus1 > 0 ? styles.lape1show : styles.lape1hide);
    let [style2] = useState(item.korkeus2 > 0 ? styles.lape2show : styles.lape2hide);
    let [style3] = useState(item.korkeus3 > 0 ? styles.lape3show : styles.lape3hide);
    let [style4] = useState(item.korkeus4 > 0 ? styles.lape4show : styles.lape4hide);
    let [style5] = useState(item.korkeus5 > 0 ? styles.lape5show : styles.lape5hide);
    let [style6] = useState(item.korkeus6 > 0 ? styles.lape6show : styles.lape6hide);
     
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

            <div className={styles.fulliteminfo_box}>
                <h3>TYÖMAA</h3>
                <div>Työmaan osoite:&nbsp; <b>{item.address} <br /> {item.postal + " " + item.location}</b> </div>
                <div>Aloitus päivä:&nbsp; <b>{start}</b></div>
                <div>Valmistumis päivä:&nbsp; <b>{end}</b></div>
                <div>Työpäivien määrä:&nbsp;<b>{tyopaivat}</b></div>
                <div>Urakan hinta:&nbsp; <b>{item.amount}</b>€</div>
                <div>Päiväkohtainen palkka:&nbsp; <b>{Math.round((item.amount / tyopaivat + Number.EPSILON) * 100) / 100 }€/päivä</b></div>
                <div>Kommentteja:&nbsp; <b>{item.freeWord} </b></div>
            </div>

            <div className={styles.fulliteminfo_box}>
                <h3>KATTO</h3>              
                <div>Katon pinta-ala:&nbsp; <b>{roofAreaYHT} m² </b></div>
                <div>Uuden katon malli:&nbsp; <b>{item.roofType}</b></div>
                <div>Uuden katon väri:&nbsp; <b>{item.roofColor}</b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruodeYHT} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletusYHT} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruodeYHT} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalautaYHT} Metriä</b> </div>
            </div>

            <div className={style1}>
            <div className={styles.fulliteminfo_box}>
                <h3>Lape 1</h3>              
                <div>Lappeen pinta-ala:&nbsp; <b>{roofArea1} m² </b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruode1} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletus1} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruode1} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalauta1} Metriä</b> </div>
            </div>
            </div>

            <div className={style2}>
            <div className={styles.fulliteminfo_box}>
                <h3>Lape 2</h3>              
                <div>Lappeen pinta-ala:&nbsp; <b>{roofArea2} m² </b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruode2} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletus2} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruode2} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalauta2} Metriä</b> </div>
            </div>
            </div>

            <div className={style3}>
            <div className={styles.fulliteminfo_box}>
                <h3>Lape 3</h3>              
                <div>Lappeen pinta-ala:&nbsp; <b>{roofArea3} m² </b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruode3} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletus3} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruode3} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalauta3} Metriä</b> </div>
            </div>
            </div>

            <div className={style4}>
            <div className={styles.fulliteminfo_box}>
                <h3>Lape 4</h3>              
                <div>Lappeen pinta-ala:&nbsp; <b>{roofArea4} m² </b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruode4} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletus4} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruode4} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalauta4} Metriä</b> </div>
            </div>
            </div>

            <div className={style5}>
            <div className={styles.fulliteminfo_box}>
                <h3>Lape 5</h3>              
                <div>Lappeen pinta-ala:&nbsp; <b>{roofArea5} m² </b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruode5} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletus5} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruode5} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalauta5} Metriä</b> </div>
            </div>
            </div>

            <div className={style6}>
            <div className={styles.fulliteminfo_box}>
                <h3>Lape 6</h3>              
                <div>Lappeen pinta-ala:&nbsp; <b>{roofArea6} m² </b></div>
                <div>Pystyruode(22*100):&nbsp; <b>{pystyruode6} Metriä </b> </div> 
                <div>Tuuletusrima(22*50):&nbsp; <b>{tuuletus6} Metriä</b> </div> 
                <div>Vaakaruode(32*100):&nbsp; <b>{vaakaruode6} Metriä</b> </div>
                <div>Otsalauta(23*170):&nbsp; <b>{otsalauta6} Metriä</b> </div>
            </div>
            </div>

            <div className={styles.fulliteminfo_button}>  
                <Link to={"/edit/"+item.id}><Button primary>MUOKKAA</Button></Link>
            </div>
        </div>
    );
}


export default FullItemInfo;