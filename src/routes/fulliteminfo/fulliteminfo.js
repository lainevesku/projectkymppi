import styles from './fulliteminfo.module.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/uibuttons';


function FullItemInfo (props) {

    // Hae propseilla oikeat tiedot
    const { id } =useParams();
    const index = props.data.findIndex(item => item.id === id);
    let item = props.data[index];

    // Päivämäärät suomen malliin
    const locale = "fi-FI";
    const start = new Date(item.periodStart).toLocaleDateString(locale);
    const end =  new Date(item.periodEnd).toLocaleDateString(locale);

    // Muuta kattomallit numeroarvoiksi PUU
    let kattomalliarvo = "";
        if(item.roofType === "Tiilikuvio") {
                kattomalliarvo = "0.35"
        } if(item.roofType === "Lukkosauma") {
                kattomalliarvo = "0.3"
        } if(item.roofType === "Tiilikatto") {
                kattomalliarvo = "0.35"
        }

        // Muuta kattomallit numeroarvoiksi PELLIT
    let peltimaaraarvo = "";
        if (item.roofType === "Tiilikuvio") {
            peltimaaraarvo = "1.1"
        } if(item.roofType === "Lukkosauma") {
            peltimaaraarvo = "0.47"
        } 
        
        // Laskukaavat
        // Pinta-ala = korkeus * leveys
    const roofArea1 = Math.round(item.korkeus1 * item.leveys1 * 100) / 100;
    const roofArea2 = Math.round(item.korkeus2 * item.leveys2 * 100) / 100;
    const roofArea3 = Math.round(item.korkeus3 * item.leveys3 * 100) / 100;
    const roofArea4 = Math.round(item.korkeus4 * item.leveys4 * 100) / 100;
    const roofArea5 = Math.round(item.korkeus5 * item.leveys5 * 100) / 100;
    const roofArea6 = Math.round(item.korkeus6 * item.leveys6 * 100) / 100;
    const roofAreaYHT = Math.round((roofArea1 + roofArea2 + roofArea3 + roofArea4 + roofArea5 + roofArea6) * 100) / 100 ;

        // Pystyruode = leveys / kattotuolijako * korkeus * 1,05
    const pystyruode1 = Math.ceil(item.leveys1 / item.kattotuolijako1 * item.korkeus1 * 1.05) ;
    const pystyruode2 = Math.ceil(item.leveys2 / item.kattotuolijako2 * item.korkeus2 * 1.05) ;
    const pystyruode3 = Math.ceil(item.leveys3 / item.kattotuolijako3 * item.korkeus3 * 1.05) ;
    const pystyruode4 = Math.ceil(item.leveys4 / item.kattotuolijako4 * item.korkeus4 * 1.05) ;
    const pystyruode5 = Math.ceil(item.leveys5 / item.kattotuolijako5 * item.korkeus5 * 1.05) ;
    const pystyruode6 = Math.ceil(item.leveys6 / item.kattotuolijako6 * item.korkeus6 * 1.05) ;
    const pystyruodeYHT = pystyruode1 + pystyruode2 + pystyruode3 + pystyruode4 + pystyruode5 + pystyruode6 ;

        // Tuuletusrima = leveys / kattotuolijako * korkeus * 1,05
    const tuuletus1 = Math.ceil(item.leveys1 / item.kattotuolijako1 * item.korkeus1 * 1.05) ;
    const tuuletus2 = Math.ceil(item.leveys2 / item.kattotuolijako2 * item.korkeus2 * 1.05) ;
    const tuuletus3 = Math.ceil(item.leveys3 / item.kattotuolijako3 * item.korkeus3 * 1.05) ;
    const tuuletus4 = Math.ceil(item.leveys4 / item.kattotuolijako4 * item.korkeus4 * 1.05) ;
    const tuuletus5 = Math.ceil(item.leveys5 / item.kattotuolijako5 * item.korkeus5 * 1.05) ;
    const tuuletus6 = Math.ceil(item.leveys6 / item.kattotuolijako6 * item.korkeus6 * 1.05) ;
    const tuuletusYHT = tuuletus1 + tuuletus2 + tuuletus3 + tuuletus4 + tuuletus5 + tuuletus6 ;

        // Vaakaruode = korkeus / Katonmalli * leveys * 1,05
    const vaakaruode1 = Math.ceil(item.korkeus1 / kattomalliarvo * item.leveys1 * 1.05) ;
    const vaakaruode2 = Math.ceil(item.korkeus2 / kattomalliarvo * item.leveys2 * 1.05) ;
    const vaakaruode3 = Math.ceil(item.korkeus3 / kattomalliarvo * item.leveys3 * 1.05) ;
    const vaakaruode4 = Math.ceil(item.korkeus4 / kattomalliarvo * item.leveys4 * 1.05) ;
    const vaakaruode5 = Math.ceil(item.korkeus5 / kattomalliarvo * item.leveys5 * 1.05) ;
    const vaakaruode6 = Math.ceil(item.korkeus6 / kattomalliarvo * item.leveys6 * 1.05) ;
    const vaakaruodeYHT = vaakaruode1 + vaakaruode2 + vaakaruode3 + vaakaruode4 + vaakaruode5 + vaakaruode6 ;

        // Otsalauta = (korkeus * 2 + leveys) * otsalautakierros
    const otsalauta1 = Math.ceil(((item.korkeus1 * 2) + parseInt(item.leveys1)) * item.otsalautakierros1) ;
    const otsalauta2 = Math.ceil(((item.korkeus2 * 2) + parseInt(item.leveys2)) * item.otsalautakierros2) ;    
    const otsalauta3 = Math.ceil(((item.korkeus3 * 2) + parseInt(item.leveys3)) * item.otsalautakierros3) ;
    const otsalauta4 = Math.ceil(((item.korkeus4 * 2) + parseInt(item.leveys4)) * item.otsalautakierros4) ;
    const otsalauta5 = Math.ceil(((item.korkeus5 * 2) + parseInt(item.leveys5)) * item.otsalautakierros5) ;
    const otsalauta6 = Math.ceil(((item.korkeus6 * 2) + parseInt(item.leveys6)) * item.otsalautakierros6) ;
    const otsalautaYHT = otsalauta1 + otsalauta2 + otsalauta3 + otsalauta4 + otsalauta5 + otsalauta6 ;

        // Peltien/Tiilien määrä
        // Lukkosauma/Tiilikuvio = leveys / peltimääräarvo(0,47 tai 1,1)
        // Tiilikatto = (korkeus / 0,35) * (leveys / 0,3)
    const peltimaara1 = item.roofType === "Tiilikatto" ? Math.ceil((item.korkeus1 / 0.35) * (item.leveys1 / 0.3)) : Math.ceil(item.leveys1 / peltimaaraarvo); 
    const peltimaara2 = item.roofType === "Tiilikatto" ? Math.ceil((item.korkeus2 / 0.35) * (item.leveys2 / 0.3)) : Math.ceil(item.leveys2 / peltimaaraarvo); 
    const peltimaara3 = item.roofType === "Tiilikatto" ? Math.ceil((item.korkeus3 / 0.35) * (item.leveys3 / 0.3)) : Math.ceil(item.leveys3 / peltimaaraarvo); 
    const peltimaara4 = item.roofType === "Tiilikatto" ? Math.ceil((item.korkeus4 / 0.35) * (item.leveys4 / 0.3)) : Math.ceil(item.leveys4 / peltimaaraarvo); 
    const peltimaara5 = item.roofType === "Tiilikatto" ? Math.ceil((item.korkeus5 / 0.35) * (item.leveys5 / 0.3)) : Math.ceil(item.leveys5 / peltimaaraarvo); 
    const peltimaara6 = item.roofType === "Tiilikatto" ? Math.ceil((item.korkeus6 / 0.35) * (item.leveys6 / 0.3)) : Math.ceil(item.leveys6 / peltimaaraarvo); 
    const peltimaaraYHT = peltimaara1 + peltimaara2 + peltimaara3 + peltimaara4 + peltimaara5 + peltimaara6  ;

        // Reunapellin määrä = korkeus * 2
    const reunapelti1 = Math.ceil(item.korkeus1 * 2) ;
    const reunapelti2 = Math.ceil(item.korkeus2 * 2) ;
    const reunapelti3 = Math.ceil(item.korkeus3 * 2) ;
    const reunapelti4 = Math.ceil(item.korkeus4 * 2) ;
    const reunapelti5 = Math.ceil(item.korkeus5 * 2) ;
    const reunapelti6 = Math.ceil(item.korkeus6 * 2) ;
    const reunapeltiYHT = reunapelti1 + reunapelti2 + reunapelti3 + reunapelti4 + reunapelti5 + reunapelti6 ;

        // Harjapelti = lappeen leveys (joka toisen lappeen leveys ++)
    const harjapelti = Math.ceil(parseInt(item.leveys2 * 100) / 100 + parseInt(item.leveys4 * 100) / 100 + parseInt(item.leveys6 * 100) / 100) ;
    
        // Vetopelti = leveys (jokaiseen lappeeseen)
    const vetopelti1 = Math.ceil(item.leveys1) ; 
    const vetopelti2 = Math.ceil(item.leveys2) ;
    const vetopelti3 = Math.ceil(item.leveys3) ;
    const vetopelti4 = Math.ceil(item.leveys4) ;
    const vetopelti5 = Math.ceil(item.leveys5) ;
    const vetopelti6 = Math.ceil(item.leveys6) ;
    const vetopeltiYHT = vetopelti1 + vetopelti2 + vetopelti3 + vetopelti4 + vetopelti5 + vetopelti6;

        //HINTOJA
    const pystyruodeHINTA = Math.round((pystyruodeYHT * 0.97) * 100 ) / 100 ;
    const tuuletusHINTA = Math.round((tuuletusYHT * 0.73) * 100 ) / 100 ;
    const vaakaruodeHINTA = Math.round((vaakaruodeYHT * 1.50) * 100 ) / 100 ;
    const otsalautaHINTA = Math.round((otsalautaYHT * 3.50) * 100 ) / 100;
    const peltiHINTA = item.roofType === "Tiilikatto" ? Math.round((peltimaaraYHT) * 100 ) / 100 : Math.round((roofAreaYHT * 20) * 100 ) / 100;
    const reunapeltiHINTA = Math.round((reunapeltiYHT * 8) * 100) / 100;
    const harjapeltiHinta = Math.round((harjapelti * 8) * 100 ) / 100;
    const vetopeltiHinta = Math.round((vetopeltiYHT * 8) * 100 ) / 100; 
    const hintaYHT = pystyruodeHINTA + tuuletusHINTA + vaakaruodeHINTA + otsalautaHINTA + peltiHINTA + reunapeltiHINTA + harjapeltiHinta + vetopeltiHinta ;

        // Piilota/Näytä oikea määrä lappeita
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

        // Joka päivälle alkuarvoksi 0
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
            <div className={styles.fulliteminfo_headline} xyz="fade small stagger ease-out-back duration-30">
            <h2 className='xyz-nested' >{item.nimi + ", " + item.location}</h2>
            </div>

            
            <div className={styles.fulliteminfo_box_tyomaa} xyz="fade left stagger">
                <h3 className='xyz-nested'>TYÖMAA</h3>
                <div className='xyz-nested'>Osoite:&nbsp; <b>{item.address} <br /> {item.postal + " " + item.location}</b> </div>
                <div className='xyz-nested'>Aloituspäivä:&nbsp; <b>{start}</b></div>
                <div className='xyz-nested'>Valmistumispäivä:&nbsp; <b>{end}</b></div>
                <div className='xyz-nested'>Työpäivien määrä:&nbsp;<b>{tyopaivat}</b></div>
                <div className='xyz-nested'>Tavaroiden yhteishinta:&nbsp;<b>{hintaYHT} €</b> </div>
               { item.freeWord === "" ? " " : <div className='xyz-nested'>Kommentteja:&nbsp; <b>{item.freeWord} </b></div> }
            </div>         
   
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-5">   
                <h3 className='xyz-nested'>KATTO</h3>        
                <div className='xyz-nested'>Katon pinta-ala:&nbsp; <b>{roofAreaYHT} m² </b></div>
                <div className='xyz-nested'>Uuden katon malli:&nbsp; <b>{item.roofType}</b></div>
                <div className='xyz-nested'>Uuden katon väri:&nbsp; <b>{item.roofColor}</b></div>
                <div className='xyz-nested'>Pystyruode(22*100):&nbsp; <b>{pystyruodeYHT} Metriä </b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50):&nbsp; <b>{tuuletusYHT} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100):&nbsp; <b>{vaakaruodeYHT} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170):&nbsp; <b>{otsalautaYHT} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"}&nbsp; <b>{peltimaaraYHT.toFixed(1)} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä:&nbsp; <b>{reunapeltiYHT} Metriä</b></div>
                <div className='xyz-nested'>Harjapellin määrä:&nbsp; <b>{harjapelti} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä:&nbsp; <b>{vetopeltiYHT} Metriä</b></div> : ""}
            </div>

            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-5">
                <h3 className='xyz-nested'>TAVAROIDEN HINNAT</h3>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruodeHINTA} €</b></div>
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletusHINTA} €</b></div>
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruodeHINTA} €</b></div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalautaHINTA} €</b></div>
                <div className='xyz-nested'>{item.roofType}: <b>{peltiHINTA} €</b></div>
                <div className='xyz-nested'>Reunapellit: <b>{reunapeltiHINTA} €</b></div>
                <div className='xyz-nested'>Harjapellit: <b>{harjapeltiHinta} €</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellit: <b>{vetopeltiHinta} €</b></div> : ""}
                <div className='xyz-nested'>Yhteensä: <b>{hintaYHT} €</b></div>
            </div>
            

            <div className={style1}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Lape 1</h3>              
                <div className='xyz-nested'>Lappeen korkeus: <b>{item.korkeus1} Metriä </b></div>
                <div className='xyz-nested'>Lappeen leveys: <b>{item.leveys1} Metriä </b></div>
                <div className='xyz-nested'>Kattotuolijako: <b>{item.kattotuolijako1} </b></div>
                <div className='xyz-nested'>Otsalautakierros: <b>{item.otsalautakierros1} </b></div>
                <div className='xyz-nested'>Lappeen pinta-ala: <b>{roofArea1} m² </b></div>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruode1} Metriä</b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletus1} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruode1} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalauta1} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"} <b>{peltimaara1} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä: <b>{reunapelti1} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä: <b>{vetopelti1} Metriä</b></div> : ""}

            </div>
            </div>

            <div className={style2}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Lape 2</h3>              
                <div className='xyz-nested'>Lappeen korkeus: <b>{item.korkeus2} Metriä </b></div>
                <div className='xyz-nested'>Lappeen leveys: <b>{item.leveys2} Metriä </b></div>
                <div className='xyz-nested'>Kattotuolijako: <b>{item.kattotuolijako2} </b></div>
                <div className='xyz-nested'>Otsalautakierros: <b>{item.otsalautakierros2} </b></div>
                <div className='xyz-nested'>Lappeen pinta-ala: <b>{roofArea2} m² </b></div>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruode2} Metriä </b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletus2} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruode2} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalauta2} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"} <b>{peltimaara2} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä: <b>{reunapelti2} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä: <b>{vetopelti2} Metriä</b></div> : ""}
            </div>
            </div>

            <div className={style3}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-15">
                <h3 className='xyz-nested'>Lape 3</h3>              
                <div className='xyz-nested'>Lappeen korkeus: <b>{item.korkeus3} Metriä </b></div>
                <div className='xyz-nested'>Lappeen leveys: <b>{item.leveys3} Metriä </b></div>
                <div className='xyz-nested'>Kattotuolijako: <b>{item.kattotuolijako3} </b></div>
                <div className='xyz-nested'>Otsalautakierros: <b>{item.otsalautakierros3} </b></div>
                <div className='xyz-nested'>Lappeen pinta-ala: <b>{roofArea3} m² </b></div>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruode3} Metriä </b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletus3} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruode3} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalauta3} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"} <b>{peltimaara3} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä: <b>{reunapelti3} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä: <b>{vetopelti3} Metriä</b></div> : ""}
            </div>
            </div>

            <div className={style4}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-15">
                <h3 className='xyz-nested'>Lape 4</h3>        
                <div className='xyz-nested'>Lappeen korkeus: <b>{item.korkeus4} Metriä </b></div>      
                <div className='xyz-nested'>Lappeen leveys: <b>{item.leveys4} Metriä </b></div>
                <div className='xyz-nested'>Kattotuolijako: <b>{item.kattotuolijako4} </b></div>
                <div className='xyz-nested'>Otsalautakierros: <b>{item.otsalautakierros4} </b></div>
                <div className='xyz-nested'>Lappeen pinta-ala: <b>{roofArea4} m² </b></div>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruode4} Metriä </b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletus4} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruode4} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalauta4} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"} <b>{peltimaara4} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä: <b>{reunapelti4} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä: <b>{vetopelti4} Metriä</b></div> : ""}
            </div>
            </div>

            <div className={style5}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-20">
                <h3 className='xyz-nested'>Lape 5</h3>      
                <div className='xyz-nested'>Lappeen korkeus: <b>{item.korkeus5} Metriä </b></div>      
                <div className='xyz-nested'>Lappeen leveys: <b>{item.leveys5} Metriä </b></div>  
                <div className='xyz-nested'>Kattotuolijako: <b>{item.kattotuolijako5} </b></div>
                <div className='xyz-nested'>Otsalautakierros: <b>{item.otsalautakierros5} </b></div>
                <div className='xyz-nested'>Lappeen pinta-ala: <b>{roofArea5} m² </b></div>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruode5} Metriä </b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletus5} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruode5} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalauta5} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"} <b>{peltimaara5} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä: <b>{reunapelti5} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä: <b>{vetopelti5} Metriä</b></div> : ""}
            </div>
            </div>

            <div className={style6}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-20">
                <h3 className='xyz-nested'>Lape 6</h3>      
                <div className='xyz-nested'>Lappeen korkeus: <b>{item.korkeus6} Metriä </b></div>    
                <div className='xyz-nested'>Lappeen leveys: <b>{item.leveys6} Metriä </b></div>   
                <div className='xyz-nested'>Kattotuolijako: <b>{item.kattotuolijako6} </b></div> 
                <div className='xyz-nested'>Otsalautakierros: <b>{item.otsalautakierros6} </b></div>
                <div className='xyz-nested'>Lappeen pinta-ala: <b>{roofArea6} m² </b></div>
                <div className='xyz-nested'>Pystyruode(22*100): <b>{pystyruode6} Metriä </b> </div> 
                <div className='xyz-nested'>Tuuletusrima(22*50): <b>{tuuletus6} Metriä</b> </div> 
                <div className='xyz-nested'>Vaakaruode(32*100): <b>{vaakaruode6} Metriä</b> </div>
                <div className='xyz-nested'>Otsalauta(23*170): <b>{otsalauta6} Metriä</b> </div>
                <div className='xyz-nested'>{item.roofType === "Tiilikatto" ? "Tiilien määrä:" : "Pellin määrä:"} <b>{peltimaara6} KPL</b> </div>
                <div className='xyz-nested'>Reunapellin määrä: <b>{reunapelti6} Metriä</b></div>
                { item.roofType === "Lukkosauma" ? <div className='xyz-nested'>Vetopellin määrä: <b>{vetopelti6} Metriä</b></div> : ""}
            </div>
            </div>

            <div className={styles.fulliteminfo_button}>  
                <Link to={"/edit/"+item.id}><Button primary>MUOKKAA</Button></Link>
            </div>
        </div>
    );
}


export default FullItemInfo;