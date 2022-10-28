import styles from './fullverhoinfo.module.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/uibuttons';


function FullVerhoInfo (props) {

    // Hae propseilla oikeat tiedot
    const { id } =useParams();
    const index = props.data.findIndex(verho => verho.id === id);
    let verho = props.data[index];

    // Päivämäärät suomen malliin
    const locale = "fi-FI";
    const start = new Date(verho.periodStart).toLocaleDateString(locale);
    const end =  new Date(verho.periodEnd).toLocaleDateString(locale);

        // Piilota/Näytä oikea määrä lappeita
    let [style1] = useState(verho.korkeus1 > 0 ? styles.wall1show : styles.wall1hide);
    let [style2] = useState(verho.korkeus2 > 0 ? styles.wall2show : styles.wall2hide);
    let [style3] = useState(verho.korkeus3 > 0 ? styles.wall3show : styles.wall3hide);
    let [style4] = useState(verho.korkeus4 > 0 ? styles.wall4show : styles.wall4hide);
    let [style5] = useState(verho.korkeus5 > 0 ? styles.wall5show : styles.wall5hide);
    let [style6] = useState(verho.korkeus6 > 0 ? styles.wall6show : styles.wall6hide);
    let [style7] = useState(verho.korkeus7 > 0 ? styles.wall7show : styles.wall7hide);
    let [style8] = useState(verho.korkeus8 > 0 ? styles.wall8show : styles.wall8hide);

     
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

    const weekDaysCount = countDaysOfWeekBetweenDates(verho.periodStart, verho.periodEnd);
    const tyopaivat = weekDaysCount[1] + weekDaysCount[2] + weekDaysCount[3] + weekDaysCount[4] + weekDaysCount[5];



    return (
        <div className={styles.fulliteminfo}>
            <div className={styles.fulliteminfo_headline} xyz="fade small stagger ease-out-back duration-30">
            <h2 className='xyz-nested' >{verho.nimi + ", " + verho.location}</h2>
            </div>

            
            <div className={styles.fulliteminfo_box_tyomaa} xyz="fade left stagger">
                <h3 className='xyz-nested'>TYÖMAA</h3>
                <div className='xyz-nested'>Osoite:&nbsp; <b>{verho.address} <br /> {verho.postal + " " + verho.location}</b> </div>
                <div className='xyz-nested'>Aloituspäivä:&nbsp; <b>{start}</b></div>
                <div className='xyz-nested'>Valmistumispäivä:&nbsp; <b>{end}</b></div>
                <div className='xyz-nested'>Työpäivien määrä:&nbsp;<b>{tyopaivat}</b></div>
                <div className='xyz-nested'>Tavaroiden yhteishinta:&nbsp;<b>5000 €</b> </div>
               { verho.freeWord === "" ? " " : <div className='xyz-nested'>Kommentteja:&nbsp; <b>{verho.freeWord} </b></div> }
            </div>         
   
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-5">   
                <h3 className='xyz-nested'>SEINÄT</h3>        
                <div className='xyz-nested'>Seinien pinta-ala:&nbsp; <b> 54 m² </b></div>
                <div className='xyz-nested'>Uuden seinän malli:&nbsp; <b>{verho.wallType}</b></div>
                <div className='xyz-nested'>Uuden seinän väri:&nbsp; <b>{verho.wallColor}</b></div>
                <div className='xyz-nested'>Tuulensuojat:&nbsp; <b>54 neliötä </b> </div> 
                <div className='xyz-nested'>Pystykoolaus(22*100):&nbsp; <b> 50 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit:&nbsp; <b>54 neliötä</b> </div>
                <div className='xyz-nested'>Nurkkalauta:&nbsp; <b>6 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista:&nbsp; <b>12 Metriä</b> </div>
                <div className='xyz-nested'>Smyygilauta:&nbsp; <b>10 Metriä</b></div>
                <div className='xyz-nested'>Vuorilauta:&nbsp; <b>12 Metriä</b></div>
            </div>

            <div className={style1}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Seinä 1</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus1} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys1} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat1} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall1window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall1window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall1window1height} Metriä</b></div> }
                { verho.wall1window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall1window1width} Metriä</b></div> }
                { verho.wall1window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall1window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall1window2height} Metriä</b></div> }
                { verho.wall1window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall1window2width} Metriä</b></div> }
                { verho.wall1window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall1window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall1window3height} Metriä</b></div> }
                { verho.wall1window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall1window3width} Metriä</b></div> }
                { verho.wall1window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall1window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall1window4height} Metriä</b></div> }
                { verho.wall1window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall1window4width} Metriä</b></div> }
                { verho.wall1window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall1window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall1window5height} Metriä</b></div> }
                { verho.wall1window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall1window5width} Metriä</b></div> }
                { verho.wall1window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall1window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall1window6height} Metriä</b></div> }
                { verho.wall1window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall1window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style2}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Seinä 2</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus2} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys2} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat2} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall2window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall2window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall2window1height} Metriä</b></div> }
                { verho.wall2window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall2window1width} Metriä</b></div> }
                { verho.wall2window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall2window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall2window2height} Metriä</b></div> }
                { verho.wall2window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall2window2width} Metriä</b></div> }
                { verho.wall2window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall2window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall2window3height} Metriä</b></div> }
                { verho.wall2window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall2window3width} Metriä</b></div> }
                { verho.wall2window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall2window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall2window4height} Metriä</b></div> }
                { verho.wall2window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall2window4width} Metriä</b></div> }
                { verho.wall2window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall2window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall2window5height} Metriä</b></div> }
                { verho.wall2window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall2window5width} Metriä</b></div> }
                { verho.wall2window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall2window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall2window6height} Metriä</b></div> }
                { verho.wall2window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall2window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style3}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-15">
                <h3 className='xyz-nested'>Seinä 3</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus3} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys3} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat3} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall3window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall3window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall3window1height} Metriä</b></div> }
                { verho.wall3window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall3window1width} Metriä</b></div> }
                { verho.wall3window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall3window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall3window2height} Metriä</b></div> }
                { verho.wall3window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall3window2width} Metriä</b></div> }
                { verho.wall3window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall3window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall3window3height} Metriä</b></div> }
                { verho.wall3window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall3window3width} Metriä</b></div> }
                { verho.wall3window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall3window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall3window4height} Metriä</b></div> }
                { verho.wall3window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall3window4width} Metriä</b></div> }
                { verho.wall3window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall3window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall3window5height} Metriä</b></div> }
                { verho.wall3window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall3window5width} Metriä</b></div> }
                { verho.wall3window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall3window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall3window6height} Metriä</b></div> }
                { verho.wall3window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall3window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style4}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-15">
                <h3 className='xyz-nested'>Seinä 4</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus4} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys4} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat4} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall4window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall4window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall4window1height} Metriä</b></div> }
                { verho.wall4window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall4window1width} Metriä</b></div> }
                { verho.wall4window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall4window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall4window2height} Metriä</b></div> }
                { verho.wall4window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall4window2width} Metriä</b></div> }
                { verho.wall4window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall4window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall4window3height} Metriä</b></div> }
                { verho.wall4window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall4window3width} Metriä</b></div> }
                { verho.wall4window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall4window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall4window4height} Metriä</b></div> }
                { verho.wall4window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall4window4width} Metriä</b></div> }
                { verho.wall4window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall4window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall4window5height} Metriä</b></div> }
                { verho.wall4window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall4window5width} Metriä</b></div> }
                { verho.wall4window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall4window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall4window6height} Metriä</b></div> }
                { verho.wall4window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall4window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style5}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-20">
                <h3 className='xyz-nested'>Seinä 5</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus5} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys5} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat5} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall5window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall5window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall5window1height} Metriä</b></div> }
                { verho.wall5window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall5window1width} Metriä</b></div> }
                { verho.wall5window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall5window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall5window2height} Metriä</b></div> }
                { verho.wall5window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall5window2width} Metriä</b></div> }
                { verho.wall5window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall5window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall5window3height} Metriä</b></div> }
                { verho.wall5window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall5window3width} Metriä</b></div> }
                { verho.wall5window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall5window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall5window4height} Metriä</b></div> }
                { verho.wall5window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall5window4width} Metriä</b></div> }
                { verho.wall5window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall5window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall5window5height} Metriä</b></div> }
                { verho.wall5window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall5window5width} Metriä</b></div> }
                { verho.wall5window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall5window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall5window6height} Metriä</b></div> }
                { verho.wall5window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall5window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style6}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Seinä 6</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus6} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys6} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat6} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall6window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall6window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall6window1height} Metriä</b></div> }
                { verho.wall6window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall6window1width} Metriä</b></div> }
                { verho.wall6window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall6window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall6window2height} Metriä</b></div> }
                { verho.wall6window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall6window2width} Metriä</b></div> }
                { verho.wall6window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall6window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall6window3height} Metriä</b></div> }
                { verho.wall6window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall6window3width} Metriä</b></div> }
                { verho.wall6window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall6window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall6window4height} Metriä</b></div> }
                { verho.wall6window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall6window4width} Metriä</b></div> }
                { verho.wall6window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall6window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall6window5height} Metriä</b></div> }
                { verho.wall6window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall6window5width} Metriä</b></div> }
                { verho.wall6window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall6window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall6window6height} Metriä</b></div> }
                { verho.wall6window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall6window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style7}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Seinä 7</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus7} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys7} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat7} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall7window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall7window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall7window1height} Metriä</b></div> }
                { verho.wall7window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall7window1width} Metriä</b></div> }
                { verho.wall7window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall7window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall7window2height} Metriä</b></div> }
                { verho.wall7window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall7window2width} Metriä</b></div> }
                { verho.wall7window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall7window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall7window3height} Metriä</b></div> }
                { verho.wall7window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall7window3width} Metriä</b></div> }
                { verho.wall7window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall7window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall7window4height} Metriä</b></div> }
                { verho.wall7window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall7window4width} Metriä</b></div> }
                { verho.wall7window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall7window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall7window5height} Metriä</b></div> }
                { verho.wall7window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall7window5width} Metriä</b></div> }
                { verho.wall7window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall7window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall7window6height} Metriä</b></div> }
                { verho.wall7window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall7window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={style8}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Seinä 8</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus8} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys8} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat8} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>Laske tähän </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>sama kuin pinta-ala m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>4 Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>sama kuin tuulensuoja</b> </div>   
                <div className='xyz-nested'>Nurkkalauta: <b>2 Metriä</b> </div>
                <div className='xyz-nested'>Varjolista: <b>3 Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>Count ne tähän</b></div>
                <div className='xyz-nested'>Smyygilauta: <b>Laske tähän yhteen</b></div>
                <div className='xyz-nested'>Vuorilauta: <b>Laske tähän yhteen</b></div>
                { verho.wall8window1height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 1</h4> }
                { verho.wall8window1height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall8window1height} Metriä</b></div> }
                { verho.wall8window1height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall8window1width} Metriä</b></div> }
                { verho.wall8window2height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 2</h4> }
                { verho.wall8window2height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall8window2height} Metriä</b></div> }
                { verho.wall8window2height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall8window2width} Metriä</b></div> }
                { verho.wall8window3height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 3</h4> }
                { verho.wall8window3height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall8window3height} Metriä</b></div> }
                { verho.wall8window3height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall8window3width} Metriä</b></div> }
                { verho.wall8window4height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 4</h4> }
                { verho.wall8window4height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall8window4height} Metriä</b></div> }
                { verho.wall8window4height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall8window4width} Metriä</b></div> }
                { verho.wall8window5height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 5</h4> }
                { verho.wall8window5height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall8window5height} Metriä</b></div> }
                { verho.wall8window5height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall8window5width} Metriä</b></div> }
                { verho.wall8window6height === 0 ? "" : 
                <h4 className='xyz-nested'>Ikkuna 6</h4> }
                { verho.wall8window6height === 0 ? "" :
                <div className='xyz-nested'>Korkeus: <b>{verho.wall8window6height} Metriä</b></div> }
                { verho.wall8window6height === 0 ? "" :
                <div className='xyz-nested'>Leveys: <b>{verho.wall8window6width} Metriä</b></div> }
            </div>
            </div>

            <div className={styles.fulliteminfo_button}>  
                <Link to={"/editverho/"+verho.id}><Button primary>MUOKKAA</Button></Link>
            </div>
        </div>
    );
}


export default FullVerhoInfo;