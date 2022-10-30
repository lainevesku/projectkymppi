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

    // Seinien pinta-ala laskut. Tuulensuoja levy ja paneelien pinta-ala on tämä sama. suorakulmio = korkeus * leveys kolmio = korkeus * leveys / 2
    const wallArea1 = verho.kulmat1 === "Suorakulmio" ? Math.round(verho.korkeus1 * verho.leveys1 * 100) / 100 : Math.round(verho.korkeus1 * verho.leveys1 / 2 * 100) / 100;
    const wallArea2 = verho.kulmat2 === "Suorakulmio" ? Math.round(verho.korkeus2 * verho.leveys2 * 100) / 100 : Math.round(verho.korkeus2 * verho.leveys2 / 2 * 100) / 100;
    const wallArea3 = verho.kulmat3 === "Suorakulmio" ? Math.round(verho.korkeus3 * verho.leveys3 * 100) / 100 : Math.round(verho.korkeus3 * verho.leveys3 / 2 * 100) / 100;
    const wallArea4 = verho.kulmat4 === "Suorakulmio" ? Math.round(verho.korkeus4 * verho.leveys4 * 100) / 100 : Math.round(verho.korkeus4 * verho.leveys4 / 2 * 100) / 100;
    const wallArea5 = verho.kulmat5 === "Suorakulmio" ? Math.round(verho.korkeus5 * verho.leveys5 * 100) / 100 : Math.round(verho.korkeus5 * verho.leveys5 / 2 * 100) / 100;
    const wallArea6 = verho.kulmat6 === "Suorakulmio" ? Math.round(verho.korkeus6 * verho.leveys6 * 100) / 100 : Math.round(verho.korkeus6 * verho.leveys6 / 2 * 100) / 100;
    const wallArea7 = verho.kulmat7 === "Suorakulmio" ? Math.round(verho.korkeus7 * verho.leveys7 * 100) / 100 : Math.round(verho.korkeus7 * verho.leveys7 / 2 * 100) / 100;
    const wallArea8 = verho.kulmat8 === "Suorakulmio" ? Math.round(verho.korkeus8 * verho.leveys8 * 100) / 100 : Math.round(verho.korkeus8 * verho.leveys8 / 2 * 100) / 100;
    const wallAreaYHT = wallArea1 + wallArea2 + wallArea3 + wallArea4 + wallArea5 + wallArea6 + wallArea7 + wallArea8 ;

    //Pystykoolaus SK = leveys/pystykoolaus * korkeus K = leveys/pystykoolaus * korkeus / 2
    const PK1 = verho.kulmat1 === "Suorakulmio" ? Math.ceil(verho.leveys1 / verho.pystykoolaus1 * verho.korkeus1) : Math.ceil(verho.leveys1 / verho.pystykoolaus1 * verho.korkeus1 / 2) ;
    const PK2 = verho.kulmat2 === "Suorakulmio" ? Math.ceil(verho.leveys2 / verho.pystykoolaus2 * verho.korkeus2) : Math.ceil(verho.leveys2 / verho.pystykoolaus2 * verho.korkeus2 / 2) ;
    const PK3 = verho.kulmat3 === "Suorakulmio" ? Math.ceil(verho.leveys3 / verho.pystykoolaus3 * verho.korkeus3) : Math.ceil(verho.leveys3 / verho.pystykoolaus3 * verho.korkeus3 / 2) ;
    const PK4 = verho.kulmat4 === "Suorakulmio" ? Math.ceil(verho.leveys4 / verho.pystykoolaus4 * verho.korkeus4) : Math.ceil(verho.leveys4 / verho.pystykoolaus4 * verho.korkeus4 / 2) ;
    const PK5 = verho.kulmat5 === "Suorakulmio" ? Math.ceil(verho.leveys5 / verho.pystykoolaus5 * verho.korkeus5) : Math.ceil(verho.leveys5 / verho.pystykoolaus5 * verho.korkeus5 / 2) ;
    const PK6 = verho.kulmat6 === "Suorakulmio" ? Math.ceil(verho.leveys6 / verho.pystykoolaus6 * verho.korkeus6) : Math.ceil(verho.leveys6 / verho.pystykoolaus6 * verho.korkeus6 / 2) ;
    const PK7 = verho.kulmat7 === "Suorakulmio" ? Math.ceil(verho.leveys7 / verho.pystykoolaus7 * verho.korkeus7) : Math.ceil(verho.leveys7 / verho.pystykoolaus7 * verho.korkeus7 / 2) ;
    const PK8 = verho.kulmat8 === "Suorakulmio" ? Math.ceil(verho.leveys8 / verho.pystykoolaus8 * verho.korkeus8) : Math.ceil(verho.leveys8 / verho.pystykoolaus8 * verho.korkeus8 / 2) ;
    const PKYHT = Math.ceil(PK1 + PK2 + PK3 + PK4 + PK5 + PK6 + PK7 + PK8) ;

    //Nurkkalauta SK = 2 * korkeus K = 0
    const nurkka1 = verho.kulmat1 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus1) : 0 ;
    const nurkka2 = verho.kulmat2 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus2) : 0 ;
    const nurkka3 = verho.kulmat3 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus3) : 0 ;
    const nurkka4 = verho.kulmat4 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus4) : 0 ;
    const nurkka5 = verho.kulmat5 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus5) : 0 ;
    const nurkka6 = verho.kulmat6 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus6) : 0 ;
    const nurkka7 = verho.kulmat7 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus7) : 0 ;
    const nurkka8 = verho.kulmat8 === "Suorakulmio" ? Math.ceil(2 * verho.korkeus8) : 0 ;
    const nurkkaYHT = nurkka1 + nurkka2 + nurkka3 + nurkka4 + nurkka5 + nurkka6 + nurkka7 + nurkka8 ;

    //Varjolista SK = leveys K = 2 * kolmion hypotenuusa
    const varjo1 = verho.kulmat1 === "Suorakulmio" ? Math.ceil(verho.leveys1) : Math.ceil(Math.sqrt((verho.korkeus1 ** 2) + ((verho.leveys1 / 2)** 2))) * 2;
    const varjo2 = verho.kulmat2 === "Suorakulmio" ? Math.ceil(verho.leveys2) : Math.ceil(Math.sqrt((verho.korkeus2 ** 2) + ((verho.leveys2 / 2)** 2))) * 2; 
    const varjo3 = verho.kulmat3 === "Suorakulmio" ? Math.ceil(verho.leveys3) : Math.ceil(Math.sqrt((verho.korkeus3 ** 2) + ((verho.leveys3 / 2)** 2))) * 2;
    const varjo4 = verho.kulmat4 === "Suorakulmio" ? Math.ceil(verho.leveys4) : Math.ceil(Math.sqrt((verho.korkeus4 ** 2) + ((verho.leveys4 / 2)** 2))) * 2;
    const varjo5 = verho.kulmat5 === "Suorakulmio" ? Math.ceil(verho.leveys5) : Math.ceil(Math.sqrt((verho.korkeus5 ** 2) + ((verho.leveys5 / 2)** 2))) * 2;
    const varjo6 = verho.kulmat6 === "Suorakulmio" ? Math.ceil(verho.leveys6) : Math.ceil(Math.sqrt((verho.korkeus6 ** 2) + ((verho.leveys6 / 2)** 2))) * 2;
    const varjo7 = verho.kulmat7 === "Suorakulmio" ? Math.ceil(verho.leveys7) : Math.ceil(Math.sqrt((verho.korkeus7 ** 2) + ((verho.leveys7 / 2)** 2))) * 2;
    const varjo8 = verho.kulmat8 === "Suorakulmio" ? Math.ceil(verho.leveys8) : Math.ceil(Math.sqrt((verho.korkeus8 ** 2) + ((verho.leveys8 / 2)** 2))) * 2;
    const varjoYHT = varjo1 + varjo2 + varjo3 + varjo4 + varjo5 + varjo6 + varjo7 + varjo8;

    // Seinän 1 ikkunoiden määrä
    const ikkunat1_1 = verho.wall1window1height === 0 ? 0 : 1;
    const ikkunat1_2 = verho.wall1window2height === 0 ? 0 : 1;
    const ikkunat1_3 = verho.wall1window3height === 0 ? 0 : 1;
    const ikkunat1_4 = verho.wall1window4height === 0 ? 0 : 1;
    const ikkunat1_5 = verho.wall1window5height === 0 ? 0 : 1;
    const ikkunat1_6 = verho.wall1window6height === 0 ? 0 : 1;
    const ikkunat1 = ikkunat1_1 + ikkunat1_2 + ikkunat1_3 + ikkunat1_4 + ikkunat1_5 + ikkunat1_6;

    // Seinän 2 ikkunoiden määrä
    const ikkunat2_1 = verho.wall2window1height === 0 ? 0 : 1;
    const ikkunat2_2 = verho.wall2window2height === 0 ? 0 : 1;
    const ikkunat2_3 = verho.wall2window3height === 0 ? 0 : 1;
    const ikkunat2_4 = verho.wall2window4height === 0 ? 0 : 1;
    const ikkunat2_5 = verho.wall2window5height === 0 ? 0 : 1;
    const ikkunat2_6 = verho.wall2window6height === 0 ? 0 : 1;
    const ikkunat2 = ikkunat2_1 + ikkunat2_2 + ikkunat2_3 + ikkunat2_4 + ikkunat2_5 + ikkunat2_6;

    // Seinän 3 ikkunoiden määrä
    const ikkunat3_1 = verho.wall3window1height === 0 ? 0 : 1;
    const ikkunat3_2 = verho.wall3window2height === 0 ? 0 : 1;
    const ikkunat3_3 = verho.wall3window3height === 0 ? 0 : 1;
    const ikkunat3_4 = verho.wall3window4height === 0 ? 0 : 1;
    const ikkunat3_5 = verho.wall3window5height === 0 ? 0 : 1;
    const ikkunat3_6 = verho.wall3window6height === 0 ? 0 : 1;
    const ikkunat3 = ikkunat3_1 + ikkunat3_2 + ikkunat3_3 + ikkunat3_4 + ikkunat3_5 + ikkunat3_6;

    // Seinän 4 ikkunoiden määrä
    const ikkunat4_1 = verho.wall4window1height === 0 ? 0 : 1;
    const ikkunat4_2 = verho.wall4window2height === 0 ? 0 : 1;
    const ikkunat4_3 = verho.wall4window3height === 0 ? 0 : 1;
    const ikkunat4_4 = verho.wall4window4height === 0 ? 0 : 1;
    const ikkunat4_5 = verho.wall4window5height === 0 ? 0 : 1;
    const ikkunat4_6 = verho.wall4window6height === 0 ? 0 : 1;
    const ikkunat4 = ikkunat4_1 + ikkunat4_2 + ikkunat4_3 + ikkunat4_4 + ikkunat4_5 + ikkunat4_6;

    // Seinän 5 ikkunoiden määrä
    const ikkunat5_1 = verho.wall5window1height === 0 ? 0 : 1;
    const ikkunat5_2 = verho.wall5window2height === 0 ? 0 : 1;
    const ikkunat5_3 = verho.wall5window3height === 0 ? 0 : 1;
    const ikkunat5_4 = verho.wall5window4height === 0 ? 0 : 1;
    const ikkunat5_5 = verho.wall5window5height === 0 ? 0 : 1;
    const ikkunat5_6 = verho.wall5window6height === 0 ? 0 : 1;
    const ikkunat5 = ikkunat5_1 + ikkunat5_2 + ikkunat5_3 + ikkunat5_4 + ikkunat5_5 + ikkunat5_6;

    // Seinän 6 ikkunoiden määrä
    const ikkunat6_1 = verho.wall6window1height === 0 ? 0 : 1;
    const ikkunat6_2 = verho.wall6window2height === 0 ? 0 : 1;
    const ikkunat6_3 = verho.wall6window3height === 0 ? 0 : 1;
    const ikkunat6_4 = verho.wall6window4height === 0 ? 0 : 1;
    const ikkunat6_5 = verho.wall6window5height === 0 ? 0 : 1;
    const ikkunat6_6 = verho.wall6window6height === 0 ? 0 : 1;
    const ikkunat6 = ikkunat6_1 + ikkunat6_2 + ikkunat6_3 + ikkunat6_4 + ikkunat6_5 + ikkunat6_6;

    // Seinän 7 ikkunoiden määrä
    const ikkunat7_1 = verho.wall7window1height === 0 ? 0 : 1;
    const ikkunat7_2 = verho.wall7window2height === 0 ? 0 : 1;
    const ikkunat7_3 = verho.wall7window3height === 0 ? 0 : 1;
    const ikkunat7_4 = verho.wall7window4height === 0 ? 0 : 1;
    const ikkunat7_5 = verho.wall7window5height === 0 ? 0 : 1;
    const ikkunat7_6 = verho.wall7window6height === 0 ? 0 : 1;
    const ikkunat7 = ikkunat7_1 + ikkunat7_2 + ikkunat7_3 + ikkunat7_4 + ikkunat7_5 + ikkunat7_6;

    // Seinän 8 ikkunoiden määrä
    const ikkunat8_1 = verho.wall8window1height === 0 ? 0 : 1;
    const ikkunat8_2 = verho.wall8window2height === 0 ? 0 : 1;
    const ikkunat8_3 = verho.wall8window3height === 0 ? 0 : 1;
    const ikkunat8_4 = verho.wall8window4height === 0 ? 0 : 1;
    const ikkunat8_5 = verho.wall8window5height === 0 ? 0 : 1;
    const ikkunat8_6 = verho.wall8window6height === 0 ? 0 : 1;
    const ikkunat8 = ikkunat8_1 + ikkunat8_2 + ikkunat8_3 + ikkunat8_4 + ikkunat8_5 + ikkunat8_6;

    // Kaikkien seinien ikkunat yhteensä
    const ikkunatYHT = ikkunat1 + ikkunat2 + ikkunat3 + ikkunat4 + ikkunat5 + ikkunat6 + ikkunat7 + ikkunat8 ;

    // Smyygilaudat = 2 * korkeus + leveys
    // Seinä 1 Smyygit
    const smyygi1_1 = 2 * verho.wall1window1height + parseFloat(verho.wall1window1width) ;
    const smyygi1_2 = 2 * verho.wall1window2height + parseFloat(verho.wall1window2width) ;
    const smyygi1_3 = 2 * verho.wall1window3height + parseFloat(verho.wall1window3width) ;
    const smyygi1_4 = 2 * verho.wall1window4height + parseFloat(verho.wall1window4width) ;
    const smyygi1_5 = 2 * verho.wall1window5height + parseFloat(verho.wall1window5width) ;
    const smyygi1_6 = 2 * verho.wall1window6height + parseFloat(verho.wall1window6width) ;
    const smyygi1 = Math.round((smyygi1_1 + smyygi1_2 + smyygi1_3 + smyygi1_4 + smyygi1_5 + smyygi1_6) * 100) / 100 ;

    // Seinä 2 Smyygit
    const smyygi2_1 = 2 * verho.wall2window1height + parseFloat(verho.wall2window1width) ;
    const smyygi2_2 = 2 * verho.wall2window2height + parseFloat(verho.wall2window2width) ;
    const smyygi2_3 = 2 * verho.wall2window3height + parseFloat(verho.wall2window3width) ;
    const smyygi2_4 = 2 * verho.wall2window4height + parseFloat(verho.wall2window4width) ;
    const smyygi2_5 = 2 * verho.wall2window5height + parseFloat(verho.wall2window5width) ;
    const smyygi2_6 = 2 * verho.wall2window6height + parseFloat(verho.wall2window6width) ;
    const smyygi2 = Math.round((smyygi2_1 + smyygi2_2 + smyygi2_3 + smyygi2_4 + smyygi2_5 + smyygi2_6) * 100) / 100 ;

    // Seinä 3 Smyygit
    const smyygi3_1 = 2 * verho.wall3window1height + parseFloat(verho.wall3window1width) ;
    const smyygi3_2 = 2 * verho.wall3window2height + parseFloat(verho.wall3window2width) ;
    const smyygi3_3 = 2 * verho.wall3window3height + parseFloat(verho.wall3window3width) ;
    const smyygi3_4 = 2 * verho.wall3window4height + parseFloat(verho.wall3window4width) ;
    const smyygi3_5 = 2 * verho.wall3window5height + parseFloat(verho.wall3window5width) ;
    const smyygi3_6 = 2 * verho.wall3window6height + parseFloat(verho.wall3window6width) ;
    const smyygi3 = Math.round((smyygi3_1 + smyygi3_2 + smyygi3_3 + smyygi3_4 + smyygi3_5 + smyygi3_6) * 100) / 100 ;

    // Seinä 4 Smyygit
    const smyygi4_1 = 2 * verho.wall4window1height + parseFloat(verho.wall4window1width) ;
    const smyygi4_2 = 2 * verho.wall4window2height + parseFloat(verho.wall4window2width) ;
    const smyygi4_3 = 2 * verho.wall4window3height + parseFloat(verho.wall4window3width) ;
    const smyygi4_4 = 2 * verho.wall4window4height + parseFloat(verho.wall4window4width) ;
    const smyygi4_5 = 2 * verho.wall4window5height + parseFloat(verho.wall4window5width) ;
    const smyygi4_6 = 2 * verho.wall4window6height + parseFloat(verho.wall4window6width) ;
    const smyygi4 = Math.round((smyygi4_1 + smyygi4_2 + smyygi4_3 + smyygi4_4 + smyygi4_5 + smyygi4_6) * 100) / 100 ;

    // Seinä 5 Smyygit
    const smyygi5_1 = 2 * verho.wall5window1height + parseFloat(verho.wall5window1width) ;
    const smyygi5_2 = 2 * verho.wall5window2height + parseFloat(verho.wall5window2width) ;
    const smyygi5_3 = 2 * verho.wall5window3height + parseFloat(verho.wall5window3width) ;
    const smyygi5_4 = 2 * verho.wall5window4height + parseFloat(verho.wall5window4width) ;
    const smyygi5_5 = 2 * verho.wall5window5height + parseFloat(verho.wall5window5width) ;
    const smyygi5_6 = 2 * verho.wall5window6height + parseFloat(verho.wall5window6width) ;
    const smyygi5 = Math.round((smyygi5_1 + smyygi5_2 + smyygi5_3 + smyygi5_4 + smyygi5_5 + smyygi5_6) * 100) / 100 ;

    // Seinä 6 Smyygit
    const smyygi6_1 = 2 * verho.wall6window1height + parseFloat(verho.wall6window1width) ;
    const smyygi6_2 = 2 * verho.wall6window2height + parseFloat(verho.wall6window2width) ;
    const smyygi6_3 = 2 * verho.wall6window3height + parseFloat(verho.wall6window3width) ;
    const smyygi6_4 = 2 * verho.wall6window4height + parseFloat(verho.wall6window4width) ;
    const smyygi6_5 = 2 * verho.wall6window5height + parseFloat(verho.wall6window5width) ;
    const smyygi6_6 = 2 * verho.wall6window6height + parseFloat(verho.wall6window6width) ;
    const smyygi6 = Math.round((smyygi6_1 + smyygi6_2 + smyygi6_3 + smyygi6_4 + smyygi6_5 + smyygi6_6) * 100) / 100 ;

    // Seinä 7 Smyygit
    const smyygi7_1 = 2 * verho.wall7window1height + parseFloat(verho.wall7window1width) ;
    const smyygi7_2 = 2 * verho.wall7window2height + parseFloat(verho.wall7window2width) ;
    const smyygi7_3 = 2 * verho.wall7window3height + parseFloat(verho.wall7window3width) ;
    const smyygi7_4 = 2 * verho.wall7window4height + parseFloat(verho.wall7window4width) ;
    const smyygi7_5 = 2 * verho.wall7window5height + parseFloat(verho.wall7window5width) ;
    const smyygi7_6 = 2 * verho.wall7window6height + parseFloat(verho.wall7window6width) ;
    const smyygi7 = Math.round((smyygi7_1 + smyygi7_2 + smyygi7_3 + smyygi7_4 + smyygi7_5 + smyygi7_6) * 100) / 100 ;

    // Seinä 8 Smyygit
    const smyygi8_1 = 2 * verho.wall8window1height + parseFloat(verho.wall8window1width) ;
    const smyygi8_2 = 2 * verho.wall8window2height + parseFloat(verho.wall8window2width) ;
    const smyygi8_3 = 2 * verho.wall8window3height + parseFloat(verho.wall8window3width) ;
    const smyygi8_4 = 2 * verho.wall8window4height + parseFloat(verho.wall8window4width) ;
    const smyygi8_5 = 2 * verho.wall8window5height + parseFloat(verho.wall8window5width) ;
    const smyygi8_6 = 2 * verho.wall8window6height + parseFloat(verho.wall8window6width) ;
    const smyygi8 = Math.round((smyygi8_1 + smyygi8_2 + smyygi8_3 + smyygi8_4 + smyygi8_5 + smyygi8_6) * 100) / 100 ;

    //Smyygit yhteensä
    const smyygiYHT = Math.ceil(smyygi1 + smyygi2 + smyygi3 + smyygi4 + smyygi5 + smyygi6 + smyygi7 + smyygi8) ; 

    // Vuorilauta = 2 * korkeus + 2 * leveys
    //Seinä 1 Vuorilaudat
    const vuori1_1 = 2 * verho.wall1window1height + 2 * verho.wall1window1width ;
    const vuori1_2 = 2 * verho.wall1window2height + 2 * verho.wall1window2width ;
    const vuori1_3 = 2 * verho.wall1window3height + 2 * verho.wall1window3width ;
    const vuori1_4 = 2 * verho.wall1window4height + 2 * verho.wall1window4width ;
    const vuori1_5 = 2 * verho.wall1window5height + 2 * verho.wall1window5width ;
    const vuori1_6 = 2 * verho.wall1window6height + 2 * verho.wall1window6width ;
    const vuori1 = Math.round((vuori1_1 + vuori1_2 + vuori1_3 + vuori1_4 + vuori1_5 + vuori1_6) * 100) / 100 ;

    //Seinä 2 Vuorilaudat
    const vuori2_1 = 2 * verho.wall2window1height + 2 * verho.wall2window1width ;
    const vuori2_2 = 2 * verho.wall2window2height + 2 * verho.wall2window2width ;
    const vuori2_3 = 2 * verho.wall2window3height + 2 * verho.wall2window3width ;
    const vuori2_4 = 2 * verho.wall2window4height + 2 * verho.wall2window4width ;
    const vuori2_5 = 2 * verho.wall2window5height + 2 * verho.wall2window5width ;
    const vuori2_6 = 2 * verho.wall2window6height + 2 * verho.wall2window6width ;
    const vuori2 = Math.round((vuori2_1 + vuori2_2 + vuori2_3 + vuori2_4 + vuori2_5 + vuori2_6) * 100) / 100 ;

    //Seinä 3 Vuorilaudat
    const vuori3_1 = 2 * verho.wall3window1height + 2 * verho.wall3window1width ;
    const vuori3_2 = 2 * verho.wall3window2height + 2 * verho.wall3window2width ;
    const vuori3_3 = 2 * verho.wall3window3height + 2 * verho.wall3window3width ;
    const vuori3_4 = 2 * verho.wall3window4height + 2 * verho.wall3window4width ;
    const vuori3_5 = 2 * verho.wall3window5height + 2 * verho.wall3window5width ;
    const vuori3_6 = 2 * verho.wall3window6height + 2 * verho.wall3window6width ;
    const vuori3 = Math.round((vuori3_1 + vuori3_2 + vuori3_3 + vuori3_4 + vuori3_5 + vuori3_6) * 100) / 100 ;

    //Seinä 4 Vuorilaudat
    const vuori4_1 = 2 * verho.wall4window1height + 2 * verho.wall4window1width ;
    const vuori4_2 = 2 * verho.wall4window2height + 2 * verho.wall4window2width ;
    const vuori4_3 = 2 * verho.wall4window3height + 2 * verho.wall4window3width ;
    const vuori4_4 = 2 * verho.wall4window4height + 2 * verho.wall4window4width ;
    const vuori4_5 = 2 * verho.wall4window5height + 2 * verho.wall4window5width ;
    const vuori4_6 = 2 * verho.wall4window6height + 2 * verho.wall4window6width ;
    const vuori4 = Math.round((vuori4_1 + vuori4_2 + vuori4_3 + vuori4_4 + vuori4_5 + vuori4_6) * 100) / 100 ;

    //Seinä 5 Vuorilaudat
    const vuori5_1 = 2 * verho.wall5window1height + 2 * verho.wall5window1width ;
    const vuori5_2 = 2 * verho.wall5window2height + 2 * verho.wall5window2width ;
    const vuori5_3 = 2 * verho.wall5window3height + 2 * verho.wall5window3width ;
    const vuori5_4 = 2 * verho.wall5window4height + 2 * verho.wall5window4width ;
    const vuori5_5 = 2 * verho.wall5window5height + 2 * verho.wall5window5width ;
    const vuori5_6 = 2 * verho.wall5window6height + 2 * verho.wall5window6width ;
    const vuori5 = Math.round((vuori5_1 + vuori5_2 + vuori5_3 + vuori5_4 + vuori5_5 + vuori5_6) * 100) / 100 ;

    //Seinä 6 Vuorilaudat
    const vuori6_1 = 2 * verho.wall6window1height + 2 * verho.wall6window1width ;
    const vuori6_2 = 2 * verho.wall6window2height + 2 * verho.wall6window2width ;
    const vuori6_3 = 2 * verho.wall6window3height + 2 * verho.wall6window3width ;
    const vuori6_4 = 2 * verho.wall6window4height + 2 * verho.wall6window4width ;
    const vuori6_5 = 2 * verho.wall6window5height + 2 * verho.wall6window5width ;
    const vuori6_6 = 2 * verho.wall6window6height + 2 * verho.wall6window6width ;
    const vuori6 = Math.round((vuori6_1 + vuori6_2 + vuori6_3 + vuori6_4 + vuori6_5 + vuori6_6) * 100) / 100 ;

    //Seinä 7 Vuorilaudat
    const vuori7_1 = 2 * verho.wall7window1height + 2 * verho.wall7window1width ;
    const vuori7_2 = 2 * verho.wall7window2height + 2 * verho.wall7window2width ;
    const vuori7_3 = 2 * verho.wall7window3height + 2 * verho.wall7window3width ;
    const vuori7_4 = 2 * verho.wall7window4height + 2 * verho.wall7window4width ;
    const vuori7_5 = 2 * verho.wall7window5height + 2 * verho.wall7window5width ;
    const vuori7_6 = 2 * verho.wall7window6height + 2 * verho.wall7window6width ;
    const vuori7 = Math.round((vuori7_1 + vuori7_2 + vuori7_3 + vuori7_4 + vuori7_5 + vuori7_6) * 100) / 100 ;

    //Seinä 8 Vuorilaudat
    const vuori8_1 = 2 * verho.wall8window1height + 2 * verho.wall8window1width ;
    const vuori8_2 = 2 * verho.wall8window2height + 2 * verho.wall8window2width ;
    const vuori8_3 = 2 * verho.wall8window3height + 2 * verho.wall8window3width ;
    const vuori8_4 = 2 * verho.wall8window4height + 2 * verho.wall8window4width ;
    const vuori8_5 = 2 * verho.wall8window5height + 2 * verho.wall8window5width ;
    const vuori8_6 = 2 * verho.wall8window6height + 2 * verho.wall8window6width ;
    const vuori8 = Math.round((vuori8_1 + vuori8_2 + vuori8_3 + vuori8_4 + vuori8_5 + vuori8_6) * 100) / 100 ;

    // Vuorilaudat yhteensä
    const vuoriYHT = Math.ceil(vuori1 + vuori2 + vuori3 + vuori4 + vuori5 + vuori6 + vuori7 + vuori8) ;

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
                <div className='xyz-nested'>Tavaroiden yhteishinta:&nbsp;<b>? €</b> </div>
               { verho.freeWord === "" ? " " : <div className='xyz-nested'>Kommentteja:&nbsp; <b>{verho.freeWord} </b></div> }
            </div>         
   
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-5">   
                <h3 className='xyz-nested'>SEINÄT</h3>        
                <div className='xyz-nested'>Seinien pinta-ala:&nbsp; <b> {wallAreaYHT} m² </b></div>
                <div className='xyz-nested'>Uuden seinän malli:&nbsp; <b>{verho.wallType}</b></div>
                <div className='xyz-nested'>Uuden seinän väri:&nbsp; <b>{verho.wallColor}</b></div>
                <div className='xyz-nested'>Tuulensuojat:&nbsp; <b>{wallAreaYHT} m² </b> </div> 
                <div className='xyz-nested'>Pystykoolaus(22*100):&nbsp; <b>{PKYHT} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit:&nbsp; <b>{wallAreaYHT} m²</b> </div>
                <div className='xyz-nested'>Nurkkalauta:&nbsp; <b>{nurkkaYHT} Metriä</b> </div>
                <div className='xyz-nested'>Varjolista:&nbsp; <b>{varjoYHT} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoita:&nbsp; <b>{ikkunatYHT} kpl</b></div>
                { smyygiYHT > 0 ? <div className='xyz-nested'>Smyygilauta:&nbsp; <b>{smyygiYHT} Metriä</b></div> : "" }
                { vuoriYHT > 0 ? <div className='xyz-nested'>Vuorilauta:&nbsp; <b>{vuoriYHT} Metriä</b></div> : "" }
            </div>

            <div className={style1}>
            <div className={styles.fulliteminfo_box} xyz="fade left stagger delay-10">
                <h3 className='xyz-nested'>Seinä 1</h3>              
                <div className='xyz-nested'>Seinän korkeus: <b>{verho.korkeus1} Metriä </b></div>
                <div className='xyz-nested'>Seinän leveys: <b>{verho.leveys1} Metriä </b></div>
                <div className='xyz-nested'>Seinän muoto: <b>{verho.kulmat1} </b></div>
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea1} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea1} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK1} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea1} m²</b> </div>   
                { verho.kulmat1 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka1} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo1} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat1} kpl</b></div>
                { smyygi1 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi1} Metriä</b></div> : "" }
                { vuori1 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori1} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea2} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea2} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK2} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea2} m²</b> </div>   
                { verho.kulmat2 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka2} Metriä</b> </div> : ""}
                <div className='xyz-nested'>Varjolista: <b>{varjo2} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat2} kpl</b></div>
                { smyygi2 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi2} Metriä</b></div> : "" }
                { vuori2 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori2} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea3} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea3} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK3} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea3} m²</b> </div>   
                { verho.kulmat3 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka3} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo3} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat3} kpl</b></div>
                { smyygi3 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi3} Metriä</b></div> : "" }
                { vuori3 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori3} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea4} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea4} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK4} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea4} m²</b> </div>   
                { verho.kulmat4 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka4} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo4} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat4} kpl</b></div>
                { smyygi4 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi4} Metriä</b></div> : "" }
                { vuori4 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori4} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea5} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea5} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK5} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea5} m²</b> </div>   
                { verho.kulmat5 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka5} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo5} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat5} kpl</b></div>
                { smyygi5 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi5} Metriä</b></div> : "" }
                { vuori5 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori5} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea6} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea6} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK6} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea6} m²</b> </div>   
                { verho.kulmat6 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka6} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo6} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat6} kpl</b></div>
                { smyygi6 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi6} Metriä</b></div> : "" }
                { vuori6 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori6} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea7} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea7} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK7} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea7} m²</b> </div>   
                { verho.kulmat7 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka7} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo7} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat7} kpl</b></div>
                { smyygi7 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi7} Metriä</b></div> : "" }
                { vuori7 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori7} Metriä</b></div> : "" }
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
                <div className='xyz-nested'>Seinän pinta-ala: <b>{wallArea8} m² </b></div>
                <div className='xyz-nested'>Tuulensuoja: <b>{wallArea8} m² </b></div>
                <div className='xyz-nested'>Pystykoolaus(22*100): <b>{PK8} Metriä</b> </div> 
                <div className='xyz-nested'>Paneelit: <b>{wallArea8} m²</b> </div>   
                { verho.kulmat8 === "Suorakulmio" ? <div className='xyz-nested'>Nurkkalauta: <b>{nurkka8} Metriä</b> </div> : "" }
                <div className='xyz-nested'>Varjolista: <b>{varjo8} Metriä</b> </div>
                <div className='xyz-nested'>Ikkunoiden määrä: <b>{ikkunat8} kpl</b></div>
                { smyygi8 > 0 ? <div className='xyz-nested'>Smyygilauta: <b>{smyygi8} Metriä</b></div> : "" }
                { vuori8 > 0 ? <div className='xyz-nested'>Vuorilauta: <b>{vuori8} Metriä</b></div> : ""}
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