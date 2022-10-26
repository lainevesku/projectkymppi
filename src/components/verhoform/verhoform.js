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
      history.push("/calculator");
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
        pystykoolaus1: 0,
        kulmat1: "suorakulmio",
        korkeus2: 0,
        leveys2: 0,
        pystykoolaus2: 0,
        kulmat2: "suorakulmio",
        korkeus3: 0,
        leveys3: 0,
        pystykoolaus3: 0,
        kulmat3: "suorakulmio",
        korkeus4: 0,
        leveys4: 0,
        pystykoolaus4: 0,
        kulmat4: "suorakulmio",
        korkeus5: 0,
        leveys5: 0,
        pystykoolaus5: 0,
        kulmat5: "suorakulmio",
        korkeus6: 0,
        leveys6: 0,
        pystykoolaus6: 0,
        kulmat6: "suorakulmio",
        korkeus7: 0,
        leveys7: 0,
        pystykoolaus7: 0,
        kulmat7: "suorakulmio",
        korkeus8: 0,
        leveys8: 0,
        pystykoolaus8: 0,
        kulmat8: "suorakulmio",
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
      history.push("/calculator");
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
                    <label htmlFor='wallColor'>Katon väri</label>
                    <input type="text" name='wallColor' onChange={handleChange} value={values.wallColor} />
                </div>
              </div>      

              <div className={styles.form_row}> 
                <div>
                  <Button secondary onClick={wallYksi}>Seinä 1</Button>
                  <Button secondary onClick={wallKaksi}>Seinä 2</Button>
                </div>
                <div>
                  <Button secondary onClick={wallKolme}>Seinä 3</Button>
                  <Button secondary onClick={wallNelja}>Seinä 4</Button>
                </div>
                <div>
                  <Button secondary onClick={wallViisi}>Seinä 5</Button>
                  <Button secondary onClick={wallKuusi}>Seinä 6</Button>
                </div>
                <div>
                  <Button secondary onClick={wallSeiska}>Seinä 7</Button>
                  <Button secondary onClick={wallKasi}>Seinä 8</Button>
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
                  <label htmlFor='kulmat1'>Kuinka monta kulmaa?</label>
                  <select name='kulmat1' onChange={handleChange} value={values.kulmat1}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat2'>Kuinka monta kulmaa?</label>
                  <select name='kulmat2' onChange={handleChange} value={values.kulmat2}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat3'>Kuinka monta kulmaa?</label>
                  <select name='kulmat3' onChange={handleChange} value={values.kulmat3}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat4'>Kuinka monta kulmaa?</label>
                  <select name='kulmat4' onChange={handleChange} value={values.kulmat4}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat5'>Kuinka monta kulmaa?</label>
                  <select name='kulmat5' onChange={handleChange} value={values.kulmat5}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat6'>Kuinka monta kulmaa?</label>
                  <select name='kulmat6' onChange={handleChange} value={values.kulmat6}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat7'>Kuinka monta kulmaa?</label>
                  <select name='kulmat7' onChange={handleChange} value={values.kulmat7}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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
                  <label htmlFor='kulmat8'>Kuinka monta kulmaa?</label>
                  <select name='kulmat8' onChange={handleChange} value={values.kulmat8}>
                    <option value="suorakulmio">Suorakulmio</option>
                    <option value="kolmio">Kolmio</option>
                  </select>
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