import styles from './verhoform.module.scss';
import { useState } from 'react';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function VerhoForm(props) {

    const history = useHistory();

    // Tiedot lähettämällä luodaan tallennetaan tiedot 
    const submit = () => {
      let storedvalues = Object.assign({}, values);
      storedvalues.amount = parseFloat(storedvalues.amount);
      storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
      props.onItemSubmit(storedvalues);
      history.push("/verhous");
    }

    // Tietojen alkutiedot
    const initialState = props.data ? props.data : {
        nimi: "",
        location: "",
        address: "",
        postal: "",
        amount: 0,
        periodStart: "",
        periodEnd: "",
        wallType: "Vaakapaneeli",
        wallColor: "",
        korkeus1: 0,
        leveys1: 0,
        pystykoolaus1: 0.6,
        kulmat1: "Suorakulmio",
        wall1window1height: 0,
        wall1window1width: 0,
        wall1window2height: 0,
        wall1window2width: 0,
        wall1window3height: 0,
        wall1window3width: 0,
        wall1window4height: 0,
        wall1window4width: 0,
        wall1window5height: 0,
        wall1window5width: 0,
        wall1window6height: 0,
        wall1window6width: 0,
        korkeus2: 0,
        leveys2: 0,
        pystykoolaus2: 0.6,
        kulmat2: "Suorakulmio",
        wall2window1height: 0,
        wall2window1width: 0,
        wall2window2height: 0,
        wall2window2width: 0,
        wall2window3height: 0,
        wall2window3width: 0,
        wall2window4height: 0,
        wall2window4width: 0,
        wall2window5height: 0,
        wall2window5width: 0,
        wall2window6height: 0,
        wall2window6width: 0,
        korkeus3: 0,
        leveys3: 0,
        pystykoolaus3: 0.6,
        kulmat3: "Suorakulmio",
        wall3window1height: 0,
        wall3window1width: 0,
        wall3window2height: 0,
        wall3window2width: 0,
        wall3window3height: 0,
        wall3window3width: 0,
        wall3window4height: 0,
        wall3window4width: 0,
        wall3window5height: 0,
        wall3window5width: 0,
        wall3window6height: 0,
        wall3window6width: 0,
        korkeus4: 0,
        leveys4: 0,
        pystykoolaus4: 0.6,
        kulmat4: "Suorakulmio",
        wall4window1height: 0,
        wall4window1width: 0,
        wall4window2height: 0,
        wall4window2width: 0,
        wall4window3height: 0,
        wall4window3width: 0,
        wall4window4height: 0,
        wall4window4width: 0,
        wall4window5height: 0,
        wall4window5width: 0,
        wall4window6height: 0,
        wall4window6width: 0,
        korkeus5: 0,
        leveys5: 0,
        pystykoolaus5: 0.6,
        kulmat5: "Suorakulmio",
        wall5window1height: 0,
        wall5window1width: 0,
        wall5window2height: 0,
        wall5window2width: 0,
        wall5window3height: 0,
        wall5window3width: 0,
        wall5window4height: 0,
        wall5window4width: 0,
        wall5window5height: 0,
        wall5window5width: 0,
        wall5window6height: 0,
        wall5window6width: 0,
        korkeus6: 0,
        leveys6: 0,
        pystykoolaus6: 0.6,
        kulmat6: "Suorakulmio",
        wall6window1height: 0,
        wall6window1width: 0,
        wall6window2height: 0,
        wall6window2width: 0,
        wall6window3height: 0,
        wall6window3width: 0,
        wall6window4height: 0,
        wall6window4width: 0,
        wall6window5height: 0,
        wall6window5width: 0,
        wall6window6height: 0,
        wall6window6width: 0,
        korkeus7: 0,
        leveys7: 0,
        pystykoolaus7: 0.6,
        kulmat7: "Suorakulmio",
        wall7window1height: 0,
        wall7window1width: 0,
        wall7window2height: 0,
        wall7window2width: 0,
        wall7window3height: 0,
        wall7window3width: 0,
        wall7window4height: 0,
        wall7window4width: 0,
        wall7window5height: 0,
        wall7window5width: 0,
        wall7window6height: 0,
        wall7window6width: 0,
        korkeus8: 0,
        leveys8: 0,
        pystykoolaus8: 0.6,
        kulmat8: "Suorakulmio",
        wall8window1height: 0,
        wall8window1width: 0,
        wall8window2height: 0,
        wall8window2width: 0,
        wall8window3height: 0,
        wall8window3width: 0,
        wall8window4height: 0,
        wall8window4width: 0,
        wall8window5height: 0,
        wall8window5width: 0,
        wall8window6height: 0,
        wall8window6width: 0,
        korkeus9: 0,
        leveys9: 0,
        pystykoolaus9: 0.6,
        kulmat9: "Suorakulmio",
        wall9window1height: 0,
        wall9window1width: 0,
        wall9window2height: 0,
        wall9window2width: 0,
        wall9window3height: 0,
        wall9window3width: 0,
        wall9window4height: 0,
        wall9window4width: 0,
        wall9window5height: 0,
        wall9window5width: 0,
        wall9window6height: 0,
        wall9window6width: 0,
        korkeus10: 0,
        leveys10: 0,
        pystykoolaus10: 0.6,
        kulmat10: "Suorakulmio",
        wall10window1height: 0,
        wall10window1width: 0,
        wall10window2height: 0,
        wall10window2width: 0,
        wall10window3height: 0,
        wall10window3width: 0,
        wall10window4height: 0,
        wall10window4width: 0,
        wall10window5height: 0,
        wall10window5width: 0,
        wall10window6height: 0,
        wall10window6width: 0,
        korkeus11: 0,
        leveys11: 0,
        pystykoolaus11: 0.6,
        kulmat11: "Suorakulmio",
        wall11window1height: 0,
        wall11window1width: 0,
        wall11window2height: 0,
        wall11window2width: 0,
        wall11window3height: 0,
        wall11window3width: 0,
        wall11window4height: 0,
        wall11window4width: 0,
        wall11window5height: 0,
        wall11window5width: 0,
        wall11window6height: 0,
        wall11window6width: 0,
        korkeus12: 0,
        leveys12: 0,
        pystykoolaus12: 0.6,
        kulmat12: "Suorakulmio",
        wall12window1height: 0,
        wall12window1width: 0,
        wall12window2height: 0,
        wall12window2width: 0,
        wall12window3height: 0,
        wall12window3width: 0,
        wall12window4height: 0,
        wall12window4width: 0,
        wall12window5height: 0,
        wall12window5width: 0,
        wall12window6height: 0,
        wall12window6width: 0,
        freeWord: ""
      };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    // peruttaa tapahtuman ja palaa edelliselle sivulle muokkaussivulta
    const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
    }

    // Poistaa tapahtuman
    const handleDelete = (event) => {
      event.preventDefault();
      props.onItemDelete(values.id);
      history.push("/verhous");
    }

    // Jokaisella seinällä lomakekohdalla Button millä saa lomakkeen osan näkyviin/piiloon
    let [style1, setStyle1] = useState(styles.wall1hide);
    let [style2, setStyle2] = useState(styles.wall2hide);
    let [style3, setStyle3] = useState(styles.wall3hide);
    let [style4, setStyle4] = useState(styles.wall4hide);
    let [style5, setStyle5] = useState(styles.wall5hide);
    let [style6, setStyle6] = useState(styles.wall6hide);
    let [style7, setStyle7] = useState(styles.wall7hide);
    let [style8, setStyle8] = useState(styles.wall8hide);
    let [style9, setStyle9] = useState(styles.wall9hide);
    let [style10, setStyle10] = useState(styles.wall10hide);
    let [style11, setStyle11] = useState(styles.wall11hide);
    let [style12, setStyle12] = useState(styles.wall12hide);
    let [style1_1, setStyle1_1] = useState(styles.wall1window1hide);
    let [style1_2, setStyle1_2] = useState(styles.wall1window2hide);
    let [style1_3, setStyle1_3] = useState(styles.wall1window3hide);
    let [style1_4, setStyle1_4] = useState(styles.wall1window4hide);
    let [style1_5, setStyle1_5] = useState(styles.wall1window5hide);
    let [style1_6, setStyle1_6] = useState(styles.wall1window6hide);
    let [style2_1, setStyle2_1] = useState(styles.wall2window1hide);
    let [style2_2, setStyle2_2] = useState(styles.wall2window2hide);
    let [style2_3, setStyle2_3] = useState(styles.wall2window3hide);
    let [style2_4, setStyle2_4] = useState(styles.wall2window4hide);
    let [style2_5, setStyle2_5] = useState(styles.wall2window5hide);
    let [style2_6, setStyle2_6] = useState(styles.wall2window6hide);
    let [style3_1, setStyle3_1] = useState(styles.wall3window1hide);
    let [style3_2, setStyle3_2] = useState(styles.wall3window2hide);
    let [style3_3, setStyle3_3] = useState(styles.wall3window3hide);
    let [style3_4, setStyle3_4] = useState(styles.wall3window4hide);
    let [style3_5, setStyle3_5] = useState(styles.wall3window5hide);
    let [style3_6, setStyle3_6] = useState(styles.wall3window6hide);
    let [style4_1, setStyle4_1] = useState(styles.wall4window1hide);
    let [style4_2, setStyle4_2] = useState(styles.wall4window2hide);
    let [style4_3, setStyle4_3] = useState(styles.wall4window3hide);
    let [style4_4, setStyle4_4] = useState(styles.wall4window4hide);
    let [style4_5, setStyle4_5] = useState(styles.wall4window5hide);
    let [style4_6, setStyle4_6] = useState(styles.wall4window6hide);
    let [style5_1, setStyle5_1] = useState(styles.wall5window1hide);
    let [style5_2, setStyle5_2] = useState(styles.wall5window2hide);
    let [style5_3, setStyle5_3] = useState(styles.wall5window3hide);
    let [style5_4, setStyle5_4] = useState(styles.wall5window4hide);
    let [style5_5, setStyle5_5] = useState(styles.wall5window5hide);
    let [style5_6, setStyle5_6] = useState(styles.wall5window6hide);
    let [style6_1, setStyle6_1] = useState(styles.wall6window1hide);
    let [style6_2, setStyle6_2] = useState(styles.wall6window2hide);
    let [style6_3, setStyle6_3] = useState(styles.wall6window3hide);
    let [style6_4, setStyle6_4] = useState(styles.wall6window4hide);
    let [style6_5, setStyle6_5] = useState(styles.wall6window5hide);
    let [style6_6, setStyle6_6] = useState(styles.wall6window6hide);
    let [style7_1, setStyle7_1] = useState(styles.wall7window1hide);
    let [style7_2, setStyle7_2] = useState(styles.wall7window2hide);
    let [style7_3, setStyle7_3] = useState(styles.wall7window3hide);
    let [style7_4, setStyle7_4] = useState(styles.wall7window4hide);
    let [style7_5, setStyle7_5] = useState(styles.wall7window5hide);
    let [style7_6, setStyle7_6] = useState(styles.wall7window6hide);
    let [style8_1, setStyle8_1] = useState(styles.wall8window1hide);
    let [style8_2, setStyle8_2] = useState(styles.wall8window2hide);
    let [style8_3, setStyle8_3] = useState(styles.wall8window3hide);
    let [style8_4, setStyle8_4] = useState(styles.wall8window4hide);
    let [style8_5, setStyle8_5] = useState(styles.wall8window5hide);
    let [style8_6, setStyle8_6] = useState(styles.wall8window6hide);
    let [style9_1, setStyle9_1] = useState(styles.wall9window1hide);
    let [style9_2, setStyle9_2] = useState(styles.wall9window2hide);
    let [style9_3, setStyle9_3] = useState(styles.wall9window3hide);
    let [style9_4, setStyle9_4] = useState(styles.wall9window4hide);
    let [style9_5, setStyle9_5] = useState(styles.wall9window5hide);
    let [style9_6, setStyle9_6] = useState(styles.wall9window6hide);
    let [style10_1, setStyle10_1] = useState(styles.wall10window1hide);
    let [style10_2, setStyle10_2] = useState(styles.wall10window2hide);
    let [style10_3, setStyle10_3] = useState(styles.wall10window3hide);
    let [style10_4, setStyle10_4] = useState(styles.wall10window4hide);
    let [style10_5, setStyle10_5] = useState(styles.wall10window5hide);
    let [style10_6, setStyle10_6] = useState(styles.wall10window6hide);
    let [style11_1, setStyle11_1] = useState(styles.wall11window1hide);
    let [style11_2, setStyle11_2] = useState(styles.wall11window2hide);
    let [style11_3, setStyle11_3] = useState(styles.wall11window3hide);
    let [style11_4, setStyle11_4] = useState(styles.wall11window4hide);
    let [style11_5, setStyle11_5] = useState(styles.wall11window5hide);
    let [style11_6, setStyle11_6] = useState(styles.wall11window6hide);
    let [style12_1, setStyle12_1] = useState(styles.wall12window1hide);
    let [style12_2, setStyle12_2] = useState(styles.wall12window2hide);
    let [style12_3, setStyle12_3] = useState(styles.wall12window3hide);
    let [style12_4, setStyle12_4] = useState(styles.wall12window4hide);
    let [style12_5, setStyle12_5] = useState(styles.wall12window5hide);
    let [style12_6, setStyle12_6] = useState(styles.wall12window6hide);

  
    const wallYksi = () => {
       style1 = style1 ? setStyle1(styles.wall1show) : setStyle1(styles.wall1hide);
    };
    const wallKaksi = () => {
      style2 = style2 ? setStyle2(styles.wall2show) : setStyle2(styles.wall2hide);
    }
    const wallKolme = () => {
      style3 = style3 ? setStyle3(styles.wall3show) : setStyle3(styles.wall3hide);
    }
    const wallNelja = () => {
       style4 = style4 ? setStyle4(styles.wall4show) : setStyle4(styles.wall4hide);
    };
    const wallViisi = () => {
      style5 = style5 ? setStyle5(styles.wall5show) : setStyle5(styles.wall5hide);
    }
    const wallKuusi = () => {
      style6 = style6 ? setStyle6(styles.wall6show) : setStyle6(styles.wall6hide);
    }
    const wallSeiska = () => {
      style7 = style7 ? setStyle7(styles.wall7show) : setStyle7(styles.wall7hide);
    }
    const wallKasi = () => {
      style8 = style8 ? setStyle8(styles.wall8show) : setStyle8(styles.wall8hide); 
    }
    const wallYsi = () => {
      style9 = style9 ? setStyle9(styles.wall9show) : setStyle9(styles.wall9hide); 
    }
    const wallKymppi = () => {
      style10 = style10 ? setStyle10(styles.wall10show) : setStyle10(styles.wall10hide); 
    }
    const wallYksitoista = () => {
      style11 = style11 ? setStyle11(styles.wall11show) : setStyle11(styles.wall11hide); 
    }
    const wallKaksitoista = () => {
      style12 = style12 ? setStyle12(styles.wall12show) : setStyle12(styles.wall12hide); 
    }
    const wallYksiIkkunaYksi = () => {
      style1_1 = style1_1 ? setStyle1_1(styles.wall1window1show) : setStyle1_1(styles.wall1window1hide);
    }
    const wallYksiIkkunaKaksi = () => {
      style1_2 = style1_2 ? setStyle1_2(styles.wall1window2show) : setStyle1_2(styles.wall1window2hide);
    }
    const wallYksiIkkunaKolme = () => {
      style1_3 = style1_3 ? setStyle1_3(styles.wall1window3show) : setStyle1_3(styles.wall1window3hide);
    }
    const wallYksiIkkunaNelja = () => {
      style1_4 = style1_4 ? setStyle1_4(styles.wall1window4show) : setStyle1_4(styles.wall1window4hide);
    }
    const wallYksiIkkunaViisi = () => {
      style1_5 = style1_5 ? setStyle1_5(styles.wall1window5show) : setStyle1_5(styles.wall1window5hide);
    }
    const wallYksiIkkunaKuusi = () => {
      style1_6 = style1_6 ? setStyle1_6(styles.wall1window6show) : setStyle1_6(styles.wall1window6hide);
    }
    const wallKaksiIkkunaYksi = () => {
      style2_1 = style2_1 ? setStyle2_1(styles.wall2window1show) : setStyle2_1(styles.wall2window1hide);
    }
    const wallKaksiIkkunaKaksi = () => {
      style2_2 = style2_2 ? setStyle2_2(styles.wall2window2show) : setStyle2_2(styles.wall2window2hide);
    }
    const wallKaksiIkkunaKolme = () => {
      style2_3 = style2_3 ? setStyle2_3(styles.wall2window3show) : setStyle2_3(styles.wall2window3hide);
    }
    const wallKaksiIkkunaNelja = () => {
      style2_4 = style2_4 ? setStyle2_4(styles.wall2window4show) : setStyle2_4(styles.wall2window4hide);
    }
    const wallKaksiIkkunaViisi = () => {
      style2_5 = style2_5 ? setStyle2_5(styles.wall2window5show) : setStyle2_5(styles.wall2window5hide);
    }
    const wallKaksiIkkunaKuusi = () => {
      style2_6 = style2_6 ? setStyle2_6(styles.wall2window6show) : setStyle2_6(styles.wall2window6hide);
    }
    const wallKolmeIkkunaYksi = () => {
      style3_1 = style3_1 ? setStyle3_1(styles.wall3window1show) : setStyle3_1(styles.wall3window1hide);
    }
    const wallKolmeIkkunaKaksi = () => {
      style3_2 = style3_2 ? setStyle3_2(styles.wall3window2show) : setStyle3_2(styles.wall3window2hide);
    }
    const wallKolmeIkkunaKolme = () => {
      style3_3 = style3_3 ? setStyle3_3(styles.wall3window3show) : setStyle3_3(styles.wall3window3hide);
    }
    const wallKolmeIkkunaNelja = () => {
      style3_4 = style3_4 ? setStyle3_4(styles.wall3window4show) : setStyle3_4(styles.wall3window4hide);
    }
    const wallKolmeIkkunaViisi = () => {
      style3_5 = style3_5 ? setStyle3_5(styles.wall3window5show) : setStyle3_5(styles.wall3window5hide);
    }
    const wallKolmeIkkunaKuusi = () => {
      style3_6 = style3_6 ? setStyle3_6(styles.wall3window6show) : setStyle3_6(styles.wall3window6hide);
    }
    const wallNeljaIkkunaYksi = () => {
      style4_1 = style4_1 ? setStyle4_1(styles.wall4window1show) : setStyle4_1(styles.wall4window1hide);
    }
    const wallNeljaIkkunaKaksi = () => {
      style4_2 = style4_2 ? setStyle4_2(styles.wall4window2show) : setStyle4_2(styles.wall4window2hide);
    }
    const wallNeljaIkkunaKolme = () => {
      style4_3 = style4_3 ? setStyle4_3(styles.wall4window3show) : setStyle4_3(styles.wall4window3hide);
    }
    const wallNeljaIkkunaNelja = () => {
      style4_4 = style4_4 ? setStyle4_4(styles.wall4window4show) : setStyle4_4(styles.wall4window4hide);
    }
    const wallNeljaIkkunaViisi = () => {
      style4_5 = style4_5 ? setStyle4_5(styles.wall4window5show) : setStyle4_5(styles.wall4window5hide);
    }
    const wallNeljaIkkunaKuusi = () => {
      style4_6 = style4_6 ? setStyle4_6(styles.wall4window6show) : setStyle4_6(styles.wall4window6hide);
    }
    const wallViisiIkkunaYksi = () => {
      style5_1 = style5_1 ? setStyle5_1(styles.wall5window1show) : setStyle5_1(styles.wall5window1hide);
    }
    const wallViisiIkkunaKaksi = () => {
      style5_2 = style5_2 ? setStyle5_2(styles.wall5window2show) : setStyle5_2(styles.wall5window2hide);
    }
    const wallViisiIkkunaKolme = () => {
      style5_3 = style5_3 ? setStyle5_3(styles.wall5window3show) : setStyle5_3(styles.wall5window3hide);
    }
    const wallViisiIkkunaNelja = () => {
      style5_4 = style5_4 ? setStyle5_4(styles.wall5window4show) : setStyle5_4(styles.wall5window4hide);
    }
    const wallViisiIkkunaViisi = () => {
      style5_5 = style5_5 ? setStyle5_5(styles.wall5window5show) : setStyle5_5(styles.wall5window5hide);
    }
    const wallViisiIkkunaKuusi = () => {
      style5_6 = style5_6 ? setStyle5_6(styles.wall5window6show) : setStyle5_6(styles.wall5window6hide);
    }
    const wallKuusiIkkunaYksi = () => {
      style6_1 = style6_1 ? setStyle6_1(styles.wall6window1show) : setStyle6_1(styles.wall6window1hide);
    }
    const wallKuusiIkkunaKaksi = () => {
      style6_2 = style6_2 ? setStyle6_2(styles.wall6window2show) : setStyle6_2(styles.wall6window2hide);
    }
    const wallKuusiIkkunaKolme = () => {
      style6_3 = style6_3 ? setStyle6_3(styles.wall6window3show) : setStyle6_3(styles.wall6window3hide);
    }
    const wallKuusiIkkunaNelja = () => {
      style6_4 = style6_4 ? setStyle6_4(styles.wall6window4show) : setStyle6_4(styles.wall6window4hide);
    }
    const wallKuusiIkkunaViisi = () => {
      style6_5 = style6_5 ? setStyle6_5(styles.wall6window5show) : setStyle6_5(styles.wall6window5hide);
    }
    const wallKuusiIkkunaKuusi = () => {
      style6_6 = style6_6 ? setStyle6_6(styles.wall6window6show) : setStyle6_6(styles.wall6window6hide);
    }
    const wallSeiskaIkkunaYksi = () => {
      style7_1 = style7_1 ? setStyle7_1(styles.wall7window1show) : setStyle7_1(styles.wall7window1hide);
    }
    const wallSeiskaIkkunaKaksi = () => {
      style7_2 = style7_2 ? setStyle7_2(styles.wall7window2show) : setStyle7_2(styles.wall7window2hide);
    }
    const wallSeiskaIkkunaKolme = () => {
      style7_3 = style7_3 ? setStyle7_3(styles.wall7window3show) : setStyle7_3(styles.wall7window3hide);
    }
    const wallSeiskaIkkunaNelja = () => {
      style7_4 = style7_4 ? setStyle7_4(styles.wall7window4show) : setStyle7_4(styles.wall7window4hide);
    }
    const wallSeiskaIkkunaViisi = () => {
      style7_5 = style7_5 ? setStyle7_5(styles.wall7window5show) : setStyle7_5(styles.wall7window5hide);
    }
    const wallSeiskaIkkunaKuusi = () => {
      style7_6 = style7_6 ? setStyle7_6(styles.wall7window6show) : setStyle7_6(styles.wall7window6hide);
    }
    const wallKasiIkkunaYksi = () => {
      style8_1 = style8_1 ? setStyle8_1(styles.wall8window1show) : setStyle8_1(styles.wall8window1hide);
    }
    const wallKasiIkkunaKaksi = () => {
      style8_2 = style8_2 ? setStyle8_2(styles.wall8window2show) : setStyle8_2(styles.wall8window2hide);
    }
    const wallKasiIkkunaKolme = () => {
      style8_3 = style8_3 ? setStyle8_3(styles.wall8window3show) : setStyle8_3(styles.wall8window3hide);
    }
    const wallKasiIkkunaNelja = () => {
      style8_4 = style8_4 ? setStyle8_4(styles.wall8window4show) : setStyle8_4(styles.wall8window4hide);
    }
    const wallKasiIkkunaViisi = () => {
      style8_5 = style8_5 ? setStyle8_5(styles.wall8window5show) : setStyle8_5(styles.wall8window5hide);
    }
    const wallKasiIkkunaKuusi = () => {
      style8_6 = style8_6 ? setStyle8_6(styles.wall8window6show) : setStyle8_6(styles.wall8window6hide);
    }
    const wallYsiIkkunaYksi = () => {
      style9_1 = style9_1 ? setStyle9_1(styles.wall9window1show) : setStyle9_1(styles.wall9window1hide);
    }
    const wallYsiIkkunaKaksi = () => {
      style9_2 = style9_2 ? setStyle9_2(styles.wall9window2show) : setStyle9_2(styles.wall9window2hide);
    }
    const wallYsiIkkunaKolme = () => {
      style9_3 = style9_3 ? setStyle9_3(styles.wall9window3show) : setStyle9_3(styles.wall9window3hide);
    }
    const wallYsiIkkunaNelja = () => {
      style9_4 = style9_4 ? setStyle9_4(styles.wall9window4show) : setStyle9_4(styles.wall9window4hide);
    }
    const wallYsiIkkunaViisi = () => {
      style9_5 = style9_5 ? setStyle9_5(styles.wall9window5show) : setStyle9_5(styles.wall9window5hide);
    }
    const wallYsiIkkunaKuusi = () => {
      style9_6 = style9_6 ? setStyle9_6(styles.wall9window6show) : setStyle9_6(styles.wall9window6hide);
    }
    const wallKymppiIkkunaYksi = () => {
      style10_1 = style10_1 ? setStyle10_1(styles.wall10window1show) : setStyle10_1(styles.wall10window1hide);
    }
    const wallKymppiIkkunaKaksi = () => {
      style10_2 = style10_2 ? setStyle10_2(styles.wall10window2show) : setStyle10_2(styles.wall10window2hide);
    }
    const wallKymppiIkkunaKolme = () => {
      style10_3 = style10_3 ? setStyle10_3(styles.wall10window3show) : setStyle10_3(styles.wall10window3hide);
    }
    const wallKymppiIkkunaNelja = () => {
      style10_4 = style10_4 ? setStyle10_4(styles.wall10window4show) : setStyle10_4(styles.wall10window4hide);
    }
    const wallKymppiIkkunaViisi = () => {
      style10_5 = style10_5 ? setStyle10_5(styles.wall10window5show) : setStyle10_5(styles.wall10window5hide);
    }
    const wallKymppiIkkunaKuusi = () => {
      style10_6 = style10_6 ? setStyle10_6(styles.wall10window6show) : setStyle10_6(styles.wall10window6hide);
    }
    const wallYksitoistaIkkunaYksi = () => {
      style11_1 = style11_1 ? setStyle11_1(styles.wall11window1show) : setStyle11_1(styles.wall11window1hide);
    }
    const wallYksitoistaIkkunaKaksi = () => {
      style11_2 = style11_2 ? setStyle11_2(styles.wall11window2show) : setStyle11_2(styles.wall11window2hide);
    }
    const wallYksitoistaIkkunaKolme = () => {
      style11_3 = style11_3 ? setStyle11_3(styles.wall11window3show) : setStyle11_3(styles.wall11window3hide);
    }
    const wallYksitoistaIkkunaNelja = () => {
      style11_4 = style11_4 ? setStyle11_4(styles.wall11window4show) : setStyle11_4(styles.wall11window4hide);
    }
    const wallYksitoistaIkkunaViisi = () => {
      style11_5 = style11_5 ? setStyle11_5(styles.wall11window5show) : setStyle11_5(styles.wall11window5hide);
    }
    const wallYksitoistaIkkunaKuusi = () => {
      style11_6 = style11_6 ? setStyle11_6(styles.wall11window6show) : setStyle11_6(styles.wall11window6hide);
    }
    const wallKaksitoistaIkkunaYksi = () => {
      style12_1 = style12_1 ? setStyle12_1(styles.wall12window1show) : setStyle12_1(styles.wall12window1hide);
    }
    const wallKaksitoistaIkkunaKaksi = () => {
      style12_2 = style12_2 ? setStyle12_2(styles.wall12window2show) : setStyle12_2(styles.wall12window2hide);
    }
    const wallKaksitoistaIkkunaKolme = () => {
      style12_3 = style12_3 ? setStyle12_3(styles.wall12window3show) : setStyle12_3(styles.wall12window3hide);
    }
    const wallKaksitoistaIkkunaNelja = () => {
      style12_4 = style12_4 ? setStyle12_4(styles.wall12window4show) : setStyle12_4(styles.wall12window4hide);
    }
    const wallKaksitoistaIkkunaViisi = () => {
      style12_5 = style12_5 ? setStyle12_5(styles.wall12window5show) : setStyle12_5(styles.wall12window5hide);
    }
    const wallKaksitoistaIkkunaKuusi = () => {
      style12_6 = style12_6 ? setStyle12_6(styles.wall12window6show) : setStyle12_6(styles.wall12window6hide);
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='nimi'>Asiakkaan nimi</label>
                    <input type="text" name='nimi' onChange={handleChange} value={values.nimi} required />                            
                </div>
                <div>
                    <label htmlFor='address'>Katuosoite</label>
                    <input type="text" name='address' onChange={handleChange} value={values.address} required />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='postal'>Postinumero</label>
                    <input type="text" name='postal' onChange={handleChange} value={values.postal} required />
                </div>
                <div>
                    <label htmlFor='location'>Paikkakunta</label>
                    <input type="text" name='location' onChange={handleChange} value={values.location} required />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='periodStart'>Aloitus päivämäärä</label>
                    <input type="date" name='periodStart' onChange={handleChange} value={values.periodStart} />
                </div>
                <div>
                    <label htmlFor='periodEnd'>Lopetus päivämäärä</label>
                    <input type="date" name='periodEnd' onChange={handleChange} value={values.periodEnd} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='wallType'>Seinän tyyppi</label>
                    <select name='wallType' onChange={handleChange} value={values.wallType}>
                        <option value="Vaakapaneeli">Vaakapaneeli</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='wallColor'>Seinän väri</label>
                    <input type="text" name='wallColor' onChange={handleChange} value={values.wallColor} />
                </div>
              </div>      

              <div className={styles.form_row}> 
                <div>
                  <Button secondary onClick={wallYksi}>Seinä 1</Button>
                  <Button secondary onClick={wallKolme}>Seinä 3</Button>
                  <Button secondary onClick={wallViisi}>Seinä 5</Button>
                  <Button secondary onClick={wallSeiska}>Seinä 7</Button>
                  <Button secondary onClick={wallYsi}>Seinä 9</Button>
                  <Button secondary onClick={wallYksitoista}>Seinä 11</Button>
                </div>
                <div>
                  <Button secondary onClick={wallKaksi}>Seinä 2</Button>
                  <Button secondary onClick={wallNelja}>Seinä 4</Button>
                  <Button secondary onClick={wallKuusi}>Seinä 6</Button>
                  <Button secondary onClick={wallKasi}>Seinä 8</Button>
                  <Button secondary onClick={wallKymppi}>Seinä 10</Button>
                  <Button secondary onClick={wallKaksitoista}>Seinä 12</Button>
                </div>
              </div>
          
            <div id="wallyksi" className={style1}>
              <h2>Seinä 1</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus1'>Korkeus(m)</label>
                  <input type="number" name='korkeus1' step="0.01" onChange={handleChange} value={values.korkeus1} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys1'>Leveys(m)</label>
                  <input type="number" name='leveys1' step="0.01" onChange={handleChange} value={values.leveys1} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus1'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus1' step="0.1" onChange={handleChange} value={values.pystykoolaus1} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat1'>Muoto</label>
                  <select name='kulmat1' onChange={handleChange} value={values.kulmat1}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallYksiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallYksiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallYksiIkkunaViisi}>Ikkuna 5</Button>
                  
                </div>
                <div>
                  <Button secondary onClick={wallYksiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallYksiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallYksiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall1window1" className={style1_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall1window1height'>Korkeus(m)</label>
                    <input type="number" name='wall1window1height' step="0.01" onChange={handleChange} value={values.wall1window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall1window1width'>Leveys(m)</label>
                    <input type="number" name='wall1window1width' step="0.01" onChange={handleChange} value={values.wall1window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall1window2" className={style1_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall1window2height'>Korkeus(m)</label>
                    <input type="number" name='wall1window2height' step="0.01" onChange={handleChange} value={values.wall1window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall1window2width'>Leveys(m)</label>
                    <input type="number" name='wall1window2width' step="0.01" onChange={handleChange} value={values.wall1window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall1window3" className={style1_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall1window3height'>Korkeus(m)</label>
                    <input type="number" name='wall1window3height' step="0.01" onChange={handleChange} value={values.wall1window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall1window3width'>Leveys(m)</label>
                    <input type="number" name='wall1window3width' step="0.01" onChange={handleChange} value={values.wall1window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall1window4" className={style1_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall1window4height'>Korkeus(m)</label>
                    <input type="number" name='wall1window4height' step="0.01" onChange={handleChange} value={values.wall1window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall1window4width'>Leveys(m)</label>
                    <input type="number" name='wall1window4width' step="0.01" onChange={handleChange} value={values.wall1window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall1window5" className={style1_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall1window5height'>Korkeus(m)</label>
                    <input type="number" name='wall1window5height' step="0.01" onChange={handleChange} value={values.wall1window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall1window5width'>Leveys(m)</label>
                    <input type="number" name='wall1window5width' step="0.01" onChange={handleChange} value={values.wall1window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall1window6" className={style1_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall1window6height'>Korkeus(m)</label>
                    <input type="number" name='wall1window6height' step="0.01" onChange={handleChange} value={values.wall1window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall1window6width'>Leveys(m)</label>
                    <input type="number" name='wall1window6width' step="0.01" onChange={handleChange} value={values.wall1window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallkaksi" className={style2}>
              <h2>Seinä 2</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus2'>Korkeus(m)</label>
                  <input type="number" name='korkeus2' step="0.01" onChange={handleChange} value={values.korkeus2} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys2'>Leveys(m)</label>
                  <input type="number" name='leveys2' step="0.01" onChange={handleChange} value={values.leveys2} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus2'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus2' step="0.1" onChange={handleChange} value={values.pystykoolaus2} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat2'>Muoto</label>
                  <select name='kulmat2' onChange={handleChange} value={values.kulmat2}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallKaksiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallKaksiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallKaksiIkkunaViisi}>Ikkuna 5</Button>
                </div>
                <div>
                  <Button secondary onClick={wallKaksiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallKaksiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallKaksiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall2window1" className={style2_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall2window1height'>Korkeus(m)</label>
                    <input type="number" name='wall2window1height' step="0.01" onChange={handleChange} value={values.wall2window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall2window1width'>Leveys(m)</label>
                    <input type="number" name='wall2window1width' step="0.01" onChange={handleChange} value={values.wall2window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall2window2" className={style2_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall2window2height'>Korkeus(m)</label>
                    <input type="number" name='wall2window2height' step="0.01" onChange={handleChange} value={values.wall2window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall2window2width'>Leveys(m)</label>
                    <input type="number" name='wall2window2width' step="0.01" onChange={handleChange} value={values.wall2window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall2window3" className={style2_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall2window3height'>Korkeus(m)</label>
                    <input type="number" name='wall2window3height' step="0.01" onChange={handleChange} value={values.wall2window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall2window3width'>Leveys(m)</label>
                    <input type="number" name='wall2window3width' step="0.01" onChange={handleChange} value={values.wall2window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall2window4" className={style2_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall2window4height'>Korkeus(m)</label>
                    <input type="number" name='wall2window4height' step="0.01" onChange={handleChange} value={values.wall2window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall2window4width'>Leveys(m)</label>
                    <input type="number" name='wall2window4width' step="0.01" onChange={handleChange} value={values.wall2window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall2window5" className={style2_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall2window5height'>Korkeus(m)</label>
                    <input type="number" name='wall2window5height' step="0.01" onChange={handleChange} value={values.wall2window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall2window5width'>Leveys(m)</label>
                    <input type="number" name='wall2window5width' step="0.01" onChange={handleChange} value={values.wall2window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall2window6" className={style2_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall2window6height'>Korkeus(m)</label>
                    <input type="number" name='wall2window6height' step="0.01" onChange={handleChange} value={values.wall2window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall2window6width'>Leveys(m)</label>
                    <input type="number" name='wall2window6width' step="0.01" onChange={handleChange} value={values.wall2window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallkolme" className={style3}>
              <h2>Seinä 3</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus3'>Korkeus(m)</label>
                  <input type="number" name='korkeus3' step="0.01" onChange={handleChange} value={values.korkeus3} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys3'>Leveys(m)</label>
                  <input type="number" name='leveys3' step="0.01" onChange={handleChange} value={values.leveys3} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus3'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus3' step="0.1" onChange={handleChange} value={values.pystykoolaus3} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat3'>Muoto</label>
                  <select name='kulmat3' onChange={handleChange} value={values.kulmat3}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallKolmeIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallKolmeIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallKolmeIkkunaViisi}>Ikkuna 5</Button>
                </div>
                <div>
                  <Button secondary onClick={wallKolmeIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallKolmeIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallKolmeIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall3window1" className={style3_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall3window1height'>Korkeus(m)</label>
                    <input type="number" name='wall3window1height' step="0.01" onChange={handleChange} value={values.wall3window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall3window1width'>Leveys(m)</label>
                    <input type="number" name='wall3window1width' step="0.01" onChange={handleChange} value={values.wall3window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall3window2" className={style3_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall3window2height'>Korkeus(m)</label>
                    <input type="number" name='wall3window2height' step="0.01" onChange={handleChange} value={values.wall3window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall3window2width'>Leveys(m)</label>
                    <input type="number" name='wall3window2width' step="0.01" onChange={handleChange} value={values.wall3window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall3window3" className={style3_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall3window3height'>Korkeus(m)</label>
                    <input type="number" name='wall3window3height' step="0.01" onChange={handleChange} value={values.wall3window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall3window3width'>Leveys(m)</label>
                    <input type="number" name='wall3window3width' step="0.01" onChange={handleChange} value={values.wall3window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall3window4" className={style3_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall3window4height'>Korkeus(m)</label>
                    <input type="number" name='wall3window4height' step="0.01" onChange={handleChange} value={values.wall3window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall3window4width'>Leveys(m)</label>
                    <input type="number" name='wall3window4width' step="0.01" onChange={handleChange} value={values.wall3window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall3window5" className={style3_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall3window5height'>Korkeus(m)</label>
                    <input type="number" name='wall3window5height' step="0.01" onChange={handleChange} value={values.wall3window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall3window5width'>Leveys(m)</label>
                    <input type="number" name='wall3window5width' step="0.01" onChange={handleChange} value={values.wall3window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall3window6" className={style3_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall3window6height'>Korkeus(m)</label>
                    <input type="number" name='wall3window6height' step="0.01" onChange={handleChange} value={values.wall3window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall3window6width'>Leveys(m)</label>
                    <input type="number" name='wall3window6width' step="0.01" onChange={handleChange} value={values.wall3window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallnelja" className={style4}>
              <h2>Seinä 4</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus4'>Korkeus(m)</label>
                  <input type="number" name='korkeus4' step="0.01" onChange={handleChange} value={values.korkeus4} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys4'>Leveys(m)</label>
                  <input type="number" name='leveys4' step="0.01" onChange={handleChange} value={values.leveys4} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus4'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus4' step="0.1" onChange={handleChange} value={values.pystykoolaus4} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat4'>Muoto</label>
                  <select name='kulmat4' onChange={handleChange} value={values.kulmat4}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallNeljaIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallNeljaIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallNeljaIkkunaViisi}>Ikkuna 5</Button>
                </div>
                <div>
                  <Button secondary onClick={wallNeljaIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallNeljaIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallNeljaIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall4window1" className={style4_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall4window1height'>Korkeus(m)</label>
                    <input type="number" name='wall4window1height' step="0.01" onChange={handleChange} value={values.wall4window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall4window1width'>Leveys(m)</label>
                    <input type="number" name='wall4window1width' step="0.01" onChange={handleChange} value={values.wall4window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall4window2" className={style4_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall4window2height'>Korkeus(m)</label>
                    <input type="number" name='wall4window2height' step="0.01" onChange={handleChange} value={values.wall4window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall4window2width'>Leveys(m)</label>
                    <input type="number" name='wall4window2width' step="0.01" onChange={handleChange} value={values.wall4window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall4window3" className={style4_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall4window3height'>Korkeus(m)</label>
                    <input type="number" name='wall4window3height' step="0.01" onChange={handleChange} value={values.wall4window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall4window3width'>Leveys(m)</label>
                    <input type="number" name='wall4window3width' step="0.01" onChange={handleChange} value={values.wall4window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall4window4" className={style4_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall4window4height'>Korkeus(m)</label>
                    <input type="number" name='wall4window4height' step="0.01" onChange={handleChange} value={values.wall4window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall4window4width'>Leveys(m)</label>
                    <input type="number" name='wall4window4width' step="0.01" onChange={handleChange} value={values.wall4window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall4window5" className={style4_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall4window5height'>Korkeus(m)</label>
                    <input type="number" name='wall4window5height' step="0.01" onChange={handleChange} value={values.wall4window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall4window5width'>Leveys(m)</label>
                    <input type="number" name='wall4window5width' step="0.01" onChange={handleChange} value={values.wall4window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall4window6" className={style4_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall4window6height'>Korkeus(m)</label>
                    <input type="number" name='wall4window6height' step="0.01" onChange={handleChange} value={values.wall4window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall4window6width'>Leveys(m)</label>
                    <input type="number" name='wall4window6width' step="0.01" onChange={handleChange} value={values.wall4window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallviisi" className={style5}>
              <h2>Seinä 5</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus5'>Korkeus(m)</label>
                  <input type="number" name='korkeus5' step="0.01" onChange={handleChange} value={values.korkeus5} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys5'>Leveys(m)</label>
                  <input type="number" name='leveys5' step="0.01" onChange={handleChange} value={values.leveys5} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus5'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus5' step="0.1" onChange={handleChange} value={values.pystykoolaus5} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat5'>Muoto</label>
                  <select name='kulmat5' onChange={handleChange} value={values.kulmat5}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallViisiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallViisiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallViisiIkkunaViisi}>Ikkuna 5</Button> 
                </div>
                <div>
                  <Button secondary onClick={wallViisiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallViisiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallViisiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall5window1" className={style5_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall5window1height'>Korkeus(m)</label>
                    <input type="number" name='wall5window1height' step="0.01" onChange={handleChange} value={values.wall5window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall5window1width'>Leveys(m)</label>
                    <input type="number" name='wall5window1width' step="0.01" onChange={handleChange} value={values.wall5window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall5window2" className={style5_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall5window2height'>Korkeus(m)</label>
                    <input type="number" name='wall5window2height' step="0.01" onChange={handleChange} value={values.wall5window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall5window2width'>Leveys(m)</label>
                    <input type="number" name='wall5window2width' step="0.01" onChange={handleChange} value={values.wall5window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall5window3" className={style5_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall5window3height'>Korkeus(m)</label>
                    <input type="number" name='wall5window3height' step="0.01" onChange={handleChange} value={values.wall5window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall5window3width'>Leveys(m)</label>
                    <input type="number" name='wall5window3width' step="0.01" onChange={handleChange} value={values.wall5window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall5window4" className={style5_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall5window4height'>Korkeus(m)</label>
                    <input type="number" name='wall5window4height' step="0.01" onChange={handleChange} value={values.wall5window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall5window4width'>Leveys(m)</label>
                    <input type="number" name='wall5window4width' step="0.01" onChange={handleChange} value={values.wall5window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall5window5" className={style5_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall5window5height'>Korkeus(m)</label>
                    <input type="number" name='wall5window5height' step="0.01" onChange={handleChange} value={values.wall5window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall5window5width'>Leveys(m)</label>
                    <input type="number" name='wall5window5width' step="0.01" onChange={handleChange} value={values.wall5window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall5window6" className={style5_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall5window6height'>Korkeus(m)</label>
                    <input type="number" name='wall5window6height' step="0.01" onChange={handleChange} value={values.wall5window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall5window6width'>Leveys(m)</label>
                    <input type="number" name='wall5window6width' step="0.01" onChange={handleChange} value={values.wall5window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallkuusi" className={style6}>
              <h2>Seinä 6</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus6'>Korkeus(m)</label>
                  <input type="number" name='korkeus6' step="0.01" onChange={handleChange} value={values.korkeus6} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys6'>Leveys(m)</label>
                  <input type="number" name='leveys6' step="0.01" onChange={handleChange} value={values.leveys6} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus6'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus6' step="0.1" onChange={handleChange} value={values.pystykoolaus6} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat6'>Muoto</label>
                  <select name='kulmat6' onChange={handleChange} value={values.kulmat6}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallKuusiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallKuusiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallKuusiIkkunaViisi}>Ikkuna 5</Button>                 
                </div>
                <div>
                  <Button secondary onClick={wallKuusiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallKuusiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallKuusiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall6window1" className={style6_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall6window1height'>Korkeus(m)</label>
                    <input type="number" name='wall6window1height' step="0.01" onChange={handleChange} value={values.wall6window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall6window1width'>Leveys(m)</label>
                    <input type="number" name='wall6window1width' step="0.01" onChange={handleChange} value={values.wall6window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall6window2" className={style6_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall6window2height'>Korkeus(m)</label>
                    <input type="number" name='wall6window2height' step="0.01" onChange={handleChange} value={values.wall6window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall6window2width'>Leveys(m)</label>
                    <input type="number" name='wall6window2width' step="0.01" onChange={handleChange} value={values.wall6window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall6window3" className={style6_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall6window3height'>Korkeus(m)</label>
                    <input type="number" name='wall6window3height' step="0.01" onChange={handleChange} value={values.wall6window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall6window3width'>Leveys(m)</label>
                    <input type="number" name='wall6window3width' step="0.01" onChange={handleChange} value={values.wall6window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall6window4" className={style6_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall6window4height'>Korkeus(m)</label>
                    <input type="number" name='wall6window4height' step="0.01" onChange={handleChange} value={values.wall6window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall6window4width'>Leveys(m)</label>
                    <input type="number" name='wall6window4width' step="0.01" onChange={handleChange} value={values.wall6window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall6window5" className={style6_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall6window5height'>Korkeus(m)</label>
                    <input type="number" name='wall6window5height' step="0.01" onChange={handleChange} value={values.wall6window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall6window5width'>Leveys(m)</label>
                    <input type="number" name='wall6window5width' step="0.01" onChange={handleChange} value={values.wall6window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall6window6" className={style6_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall6window6height'>Korkeus(m)</label>
                    <input type="number" name='wall6window6height' step="0.01" onChange={handleChange} value={values.wall6window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall6window6width'>Leveys(m)</label>
                    <input type="number" name='wall6window6width' step="0.01" onChange={handleChange} value={values.wall6window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallseiska" className={style7}>
              <h2>Seinä 7</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus7'>Korkeus(m)</label>
                  <input type="number" name='korkeus7' step="0.01" onChange={handleChange} value={values.korkeus7} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys7'>Leveys(m)</label>
                  <input type="number" name='leveys7' step="0.01" onChange={handleChange} value={values.leveys7} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus7'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus7' step="0.1" onChange={handleChange} value={values.pystykoolaus7} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat7'>Muoto</label>
                  <select name='kulmat7' onChange={handleChange} value={values.kulmat7}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallSeiskaIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallSeiskaIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallSeiskaIkkunaViisi}>Ikkuna 5</Button>
                </div>
                <div>
                  <Button secondary onClick={wallSeiskaIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallSeiskaIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallSeiskaIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall7window1" className={style7_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall7window1height'>Korkeus(m)</label>
                    <input type="number" name='wall7window1height' step="0.01" onChange={handleChange} value={values.wall7window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall7window1width'>Leveys(m)</label>
                    <input type="number" name='wall7window1width' step="0.01" onChange={handleChange} value={values.wall7window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall7window2" className={style7_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall7window2height'>Korkeus(m)</label>
                    <input type="number" name='wall7window2height' step="0.01" onChange={handleChange} value={values.wall7window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall7window2width'>Leveys(m)</label>
                    <input type="number" name='wall7window2width' step="0.01" onChange={handleChange} value={values.wall7window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall7window3" className={style7_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall7window3height'>Korkeus(m)</label>
                    <input type="number" name='wall7window3height' step="0.01" onChange={handleChange} value={values.wall7window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall7window3width'>Leveys(m)</label>
                    <input type="number" name='wall7window3width' step="0.01" onChange={handleChange} value={values.wall7window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall7window4" className={style7_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall7window4height'>Korkeus(m)</label>
                    <input type="number" name='wall7window4height' step="0.01" onChange={handleChange} value={values.wall7window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall7window4width'>Leveys(m)</label>
                    <input type="number" name='wall7window4width' step="0.01" onChange={handleChange} value={values.wall7window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall7window5" className={style7_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall7window5height'>Korkeus(m)</label>
                    <input type="number" name='wall7window5height' step="0.01" onChange={handleChange} value={values.wall7window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall7window5width'>Leveys(m)</label>
                    <input type="number" name='wall7window5width' step="0.01" onChange={handleChange} value={values.wall7window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall7window6" className={style7_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall7window6height'>Korkeus(m)</label>
                    <input type="number" name='wall7window6height' step="0.01" onChange={handleChange} value={values.wall7window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall7window6width'>Leveys(m)</label>
                    <input type="number" name='wall7window6width' step="0.01" onChange={handleChange} value={values.wall7window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallkasi" className={style8}>
              <h2>Seinä 8</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus8'>Korkeus(m)</label>
                  <input type="number" name='korkeus8' step="0.01" onChange={handleChange} value={values.korkeus8} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys8'>Leveys(m)</label>
                  <input type="number" name='leveys8' step="0.01" onChange={handleChange} value={values.leveys8} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus8'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus8' step="0.1" onChange={handleChange} value={values.pystykoolaus8} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat8'>Muoto</label>
                  <select name='kulmat8' onChange={handleChange} value={values.kulmat8}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallKasiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallKasiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallKasiIkkunaViisi}>Ikkuna 5</Button>
                </div>
                <div>
                  <Button secondary onClick={wallKasiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallKasiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallKasiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall8window1" className={style8_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall8window1height'>Korkeus(m)</label>
                    <input type="number" name='wall8window1height' step="0.01" onChange={handleChange} value={values.wall8window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall8window1width'>Leveys(m)</label>
                    <input type="number" name='wall8window1width' step="0.01" onChange={handleChange} value={values.wall8window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall8window2" className={style8_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall8window2height'>Korkeus(m)</label>
                    <input type="number" name='wall8window2height' step="0.01" onChange={handleChange} value={values.wall8window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall8window2width'>Leveys(m)</label>
                    <input type="number" name='wall8window2width' step="0.01" onChange={handleChange} value={values.wall8window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall8window3" className={style8_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall8window3height'>Korkeus(m)</label>
                    <input type="number" name='wall8window3height' step="0.01" onChange={handleChange} value={values.wall8window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall8window3width'>Leveys(m)</label>
                    <input type="number" name='wall8window3width' step="0.01" onChange={handleChange} value={values.wall8window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall8window4" className={style8_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall8window4height'>Korkeus(m)</label>
                    <input type="number" name='wall8window4height' step="0.01" onChange={handleChange} value={values.wall8window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall8window4width'>Leveys(m)</label>
                    <input type="number" name='wall8window4width' step="0.01" onChange={handleChange} value={values.wall8window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall8window5" className={style8_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall8window5height'>Korkeus(m)</label>
                    <input type="number" name='wall8window5height' step="0.01" onChange={handleChange} value={values.wall8window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall8window5width'>Leveys(m)</label>
                    <input type="number" name='wall8window5width' step="0.01" onChange={handleChange} value={values.wall8window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall8window6" className={style8_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall8window6height'>Korkeus(m)</label>
                    <input type="number" name='wall8window6height' step="0.01" onChange={handleChange} value={values.wall8window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall8window6width'>Leveys(m)</label>
                    <input type="number" name='wall8window6width' step="0.01" onChange={handleChange} value={values.wall8window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallysi" className={style9}>
              <h2>Seinä 9</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus9'>Korkeus(m)</label>
                  <input type="number" name='korkeus9' step="0.01" onChange={handleChange} value={values.korkeus9} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys9'>Leveys(m)</label>
                  <input type="number" name='leveys9' step="0.01" onChange={handleChange} value={values.leveys9} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus9'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus9' step="0.1" onChange={handleChange} value={values.pystykoolaus9} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat9'>Muoto</label>
                  <select name='kulmat9' onChange={handleChange} value={values.kulmat9}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallYsiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallYsiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallYsiIkkunaViisi}>Ikkuna 5</Button>
                  
                </div>
                <div>
                  <Button secondary onClick={wallYsiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallYsiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallYsiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall9window1" className={style9_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall9window1height'>Korkeus(m)</label>
                    <input type="number" name='wall9window1height' step="0.01" onChange={handleChange} value={values.wall9window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall9window1width'>Leveys(m)</label>
                    <input type="number" name='wall9window1width' step="0.01" onChange={handleChange} value={values.wall9window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall9window2" className={style9_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall9window2height'>Korkeus(m)</label>
                    <input type="number" name='wall9window2height' step="0.01" onChange={handleChange} value={values.wall9window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall9window2width'>Leveys(m)</label>
                    <input type="number" name='wall9window2width' step="0.01" onChange={handleChange} value={values.wall9window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall9window3" className={style9_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall9window3height'>Korkeus(m)</label>
                    <input type="number" name='wall9window3height' step="0.01" onChange={handleChange} value={values.wall9window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall9window3width'>Leveys(m)</label>
                    <input type="number" name='wall9window3width' step="0.01" onChange={handleChange} value={values.wall9window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall9window4" className={style9_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall9window4height'>Korkeus(m)</label>
                    <input type="number" name='wall9window4height' step="0.01" onChange={handleChange} value={values.wall9window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall9window4width'>Leveys(m)</label>
                    <input type="number" name='wall9window4width' step="0.01" onChange={handleChange} value={values.wall9window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall9window5" className={style9_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall9window5height'>Korkeus(m)</label>
                    <input type="number" name='wall9window5height' step="0.01" onChange={handleChange} value={values.wall9window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall9window5width'>Leveys(m)</label>
                    <input type="number" name='wall9window5width' step="0.01" onChange={handleChange} value={values.wall9window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall9window6" className={style9_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall9window6height'>Korkeus(m)</label>
                    <input type="number" name='wall9window6height' step="0.01" onChange={handleChange} value={values.wall9window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall9window6width'>Leveys(m)</label>
                    <input type="number" name='wall9window6width' step="0.01" onChange={handleChange} value={values.wall9window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallkymppi" className={style10}>
              <h2>Seinä 10</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus10'>Korkeus(m)</label>
                  <input type="number" name='korkeus10' step="0.01" onChange={handleChange} value={values.korkeus10} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys10'>Leveys(m)</label>
                  <input type="number" name='leveys10' step="0.01" onChange={handleChange} value={values.leveys10} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus10'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus10' step="0.1" onChange={handleChange} value={values.pystykoolaus10} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat10'>Muoto</label>
                  <select name='kulmat10' onChange={handleChange} value={values.kulmat10}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallKymppiIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallKymppiIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallKymppiIkkunaViisi}>Ikkuna 5</Button>
                  
                </div>
                <div>
                  <Button secondary onClick={wallKymppiIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallKymppiIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallKymppiIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall10window1" className={style10_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall10window1height'>Korkeus(m)</label>
                    <input type="number" name='wall10window1height' step="0.01" onChange={handleChange} value={values.wall10window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall10window1width'>Leveys(m)</label>
                    <input type="number" name='wall10window1width' step="0.01" onChange={handleChange} value={values.wall10window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall10window2" className={style10_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall10window2height'>Korkeus(m)</label>
                    <input type="number" name='wall10window2height' step="0.01" onChange={handleChange} value={values.wall10window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall10window2width'>Leveys(m)</label>
                    <input type="number" name='wall10window2width' step="0.01" onChange={handleChange} value={values.wall10window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall10window3" className={style10_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall10window3height'>Korkeus(m)</label>
                    <input type="number" name='wall10window3height' step="0.01" onChange={handleChange} value={values.wall10window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall10window3width'>Leveys(m)</label>
                    <input type="number" name='wall10window3width' step="0.01" onChange={handleChange} value={values.wall10window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall10window4" className={style10_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall10window4height'>Korkeus(m)</label>
                    <input type="number" name='wall10window4height' step="0.01" onChange={handleChange} value={values.wall10window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall10window4width'>Leveys(m)</label>
                    <input type="number" name='wall10window4width' step="0.01" onChange={handleChange} value={values.wall10window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall10window5" className={style10_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall10window5height'>Korkeus(m)</label>
                    <input type="number" name='wall10window5height' step="0.01" onChange={handleChange} value={values.wall10window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall10window5width'>Leveys(m)</label>
                    <input type="number" name='wall10window5width' step="0.01" onChange={handleChange} value={values.wall10window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall10window6" className={style10_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall10window6height'>Korkeus(m)</label>
                    <input type="number" name='wall10window6height' step="0.01" onChange={handleChange} value={values.wall10window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall10window6width'>Leveys(m)</label>
                    <input type="number" name='wall10window6width' step="0.01" onChange={handleChange} value={values.wall10window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallyksitoista" className={style11}>
              <h2>Seinä 11</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus11'>Korkeus(m)</label>
                  <input type="number" name='korkeus11' step="0.01" onChange={handleChange} value={values.korkeus11} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys11'>Leveys(m)</label>
                  <input type="number" name='leveys11' step="0.01" onChange={handleChange} value={values.leveys11} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus11'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus11' step="0.1" onChange={handleChange} value={values.pystykoolaus11} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat11'>Muoto</label>
                  <select name='kulmat11' onChange={handleChange} value={values.kulmat11}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallYksitoistaIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallYksitoistaIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallYksitoistaIkkunaViisi}>Ikkuna 5</Button>
                  
                </div>
                <div>
                  <Button secondary onClick={wallYksitoistaIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallYksitoistaIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallYksitoistaIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall11window1" className={style11_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall11window1height'>Korkeus(m)</label>
                    <input type="number" name='wall11window1height' step="0.01" onChange={handleChange} value={values.wall11window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall11window1width'>Leveys(m)</label>
                    <input type="number" name='wall11window1width' step="0.01" onChange={handleChange} value={values.wall11window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall11window2" className={style11_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall11window2height'>Korkeus(m)</label>
                    <input type="number" name='wall11window2height' step="0.01" onChange={handleChange} value={values.wall11window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall11window2width'>Leveys(m)</label>
                    <input type="number" name='wall11window2width' step="0.01" onChange={handleChange} value={values.wall11window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall11window3" className={style11_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall11window3height'>Korkeus(m)</label>
                    <input type="number" name='wall11window3height' step="0.01" onChange={handleChange} value={values.wall11window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall11window3width'>Leveys(m)</label>
                    <input type="number" name='wall11window3width' step="0.01" onChange={handleChange} value={values.wall11window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall11window4" className={style11_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall11window4height'>Korkeus(m)</label>
                    <input type="number" name='wall11window4height' step="0.01" onChange={handleChange} value={values.wall11window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall11window4width'>Leveys(m)</label>
                    <input type="number" name='wall11window4width' step="0.01" onChange={handleChange} value={values.wall11window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall11window5" className={style11_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall11window5height'>Korkeus(m)</label>
                    <input type="number" name='wall11window5height' step="0.01" onChange={handleChange} value={values.wall11window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall11window5width'>Leveys(m)</label>
                    <input type="number" name='wall11window5width' step="0.01" onChange={handleChange} value={values.wall11window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall11window6" className={style11_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall11window6height'>Korkeus(m)</label>
                    <input type="number" name='wall11window6height' step="0.01" onChange={handleChange} value={values.wall11window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall11window6width'>Leveys(m)</label>
                    <input type="number" name='wall11window6width' step="0.01" onChange={handleChange} value={values.wall11window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

            <div id="wallkaksitoista" className={style12}>
              <h2>Seinä 12</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus12'>Korkeus(m)</label>
                  <input type="number" name='korkeus12' step="0.01" onChange={handleChange} value={values.korkeus12} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys12'>Leveys(m)</label>
                  <input type="number" name='leveys12' step="0.01" onChange={handleChange} value={values.leveys12} min="0"/>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='pystykoolaus12'>Pystykoolaus</label>
                  <input type="number" name='pystykoolaus12' step="0.1" onChange={handleChange} value={values.pystykoolaus12} min="0" />
                </div>
                <div>
                  <label htmlFor='kulmat12'>Muoto</label>
                  <select name='kulmat12' onChange={handleChange} value={values.kulmat12}>
                    <option value="Suorakulmio">Suorakulmio</option>
                    <option value="Kolmio">Kolmio</option>
                  </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button secondary onClick={wallKaksitoistaIkkunaYksi}>Ikkuna 1</Button>
                  <Button secondary onClick={wallKaksitoistaIkkunaKolme}>Ikkuna 3</Button>
                  <Button secondary onClick={wallKaksitoistaIkkunaViisi}>Ikkuna 5</Button>
                  
                </div>
                <div>
                  <Button secondary onClick={wallKaksitoistaIkkunaKaksi}>Ikkuna 2</Button>
                  <Button secondary onClick={wallKaksitoistaIkkunaNelja}>Ikkuna 4</Button>
                  <Button secondary onClick={wallKaksitoistaIkkunaKuusi}>Ikkuna 6</Button>
                </div>
              </div>

              <div id="wall12window1" className={style12_1}>
                <h2>Ikkuna 1</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall12window1height'>Korkeus(m)</label>
                    <input type="number" name='wall12window1height' step="0.01" onChange={handleChange} value={values.wall12window1height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall12window1width'>Leveys(m)</label>
                    <input type="number" name='wall12window1width' step="0.01" onChange={handleChange} value={values.wall12window1width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall12window2" className={style12_2}>
                <h2>Ikkuna 2</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall12window2height'>Korkeus(m)</label>
                    <input type="number" name='wall12window2height' step="0.01" onChange={handleChange} value={values.wall12window2height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall12window2width'>Leveys(m)</label>
                    <input type="number" name='wall12window2width' step="0.01" onChange={handleChange} value={values.wall12window2width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall12window3" className={style12_3}>
                <h2>Ikkuna 3</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall12window3height'>Korkeus(m)</label>
                    <input type="number" name='wall12window3height' step="0.01" onChange={handleChange} value={values.wall12window3height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall12window3width'>Leveys(m)</label>
                    <input type="number" name='wall12window3width' step="0.01" onChange={handleChange} value={values.wall12window3width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall12window4" className={style12_4}>
                <h2>Ikkuna 4</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall12window4height'>Korkeus(m)</label>
                    <input type="number" name='wall12window4height' step="0.01" onChange={handleChange} value={values.wall12window4height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall12window4width'>Leveys(m)</label>
                    <input type="number" name='wall12window4width' step="0.01" onChange={handleChange} value={values.wall12window4width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall12window5" className={style12_5}>
                <h2>Ikkuna 5</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall12window5height'>Korkeus(m)</label>
                    <input type="number" name='wall12window5height' step="0.01" onChange={handleChange} value={values.wall12window5height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall12window5width'>Leveys(m)</label>
                    <input type="number" name='wall12window5width' step="0.01" onChange={handleChange} value={values.wall12window5width} min="0"/>
                  </div>
                </div>
              </div>

              <div id="wall12window6" className={style12_6}>
                <h2>Ikkuna 6</h2>
                <div className={styles.form_row}>
                  <div>
                    <label htmlFor='wall12window6height'>Korkeus(m)</label>
                    <input type="number" name='wall12window6height' step="0.01" onChange={handleChange} value={values.wall12window6height} min="0" />
                  </div>
                  <div>
                    <label htmlFor='wall12window6width'>Leveys(m)</label>
                    <input type="number" name='wall12window6width' step="0.01" onChange={handleChange} value={values.wall12window6width} min="0"/>
                  </div>
                </div>
              </div>

            </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='freeWord'>Kommentteja urakasta</label>
                    <textarea name="freeWord" rows='4' cols='10' onChange={handleChange} value={values.freeWord} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <Button onClick={handleCancel}>PERUUTA</Button>
                </div>
                <div>
                  <Button primary type="submit">{ props.data ? "TALLENNA" : "LISÄÄ"}</Button>
                </div>
              </div>

              { props.onItemDelete ? 
              <div className={styles.form_row}>
                <div>
                  <Button onClick={handleDelete}>POISTA</Button>
                </div>
                <div></div>
              </div> : ""}

            </div>
          </form>
        </div>
    );
}

export default VerhoForm;