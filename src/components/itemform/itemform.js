import styles from './itemform.module.scss';
import { useState } from 'react';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function ItemForm(props) {

    const history = useHistory();

    // Tiedot lähettämällä luodaan tallennetaan tiedot 
    const submit = () => {
      let storedvalues = Object.assign({}, values);
      storedvalues.amount = parseFloat(storedvalues.amount);
      storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
      props.onItemSubmit(storedvalues);
      history.push("/");
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
      roofType: "Tiilikuvio",
      roofColor: "Musta",
      korkeus1: 0,
      leveys1: 0,
      kattotuolijako1: 1,
      otsalautakierros1: 0,
      korkeus2: 0,
      leveys2: 0,
      kattotuolijako2: 1,
      otsalautakierros2: 0,
      korkeus3: 0,
      leveys3: 0,
      kattotuolijako3: 1,
      otsalautakierros3: 0,
      korkeus4: 0,
      leveys4: 0,
      kattotuolijako4: 1,
      otsalautakierros4: 0,
      korkeus5: 0,
      leveys5: 0,
      kattotuolijako5: 1,
      otsalautakierros5: 0,
      korkeus6: 0,
      leveys6: 0,
      kattotuolijako6: 1,
      otsalautakierros6: 0,
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
      history.push("/");
    }

    // Jokaisella lappeen lomakekohdalla Button millä saa lomakkeen osan näkyviin/piiloon
    let [style1, setStyle1] = useState(styles.lape1hide);
    let [style2, setStyle2] = useState(styles.lape2hide);
    let [style3, setStyle3] = useState(styles.lape3hide);
    let [style4, setStyle4] = useState(styles.lape4hide);
    let [style5, setStyle5] = useState(styles.lape5hide);
    let [style6, setStyle6] = useState(styles.lape6hide);
  
    const lapeYksi = () => {
       style1 = style1 ? setStyle1(styles.lape1show) : setStyle1(styles.lape1hide) ;
    };

    const lapeKaksi = () => {
      style2 = style2 ? setStyle2(styles.lape2show) : setStyle2(styles.lape2hide);
    }

    const lapeKolme = () => {
      style3 = style3 ? setStyle3(styles.lape3show) : setStyle3(styles.lape3hide);
    }

    const lapeNelja = () => {
       style4 = style4 ? setStyle4(styles.lape4show) : setStyle4(styles.lape4hide) ;
    };

    const lapeViisi = () => {
      style5 = style5 ? setStyle5(styles.lape5show) : setStyle5(styles.lape5hide);
    }

    const lapeKuusi = () => {
      style6 = style6 ? setStyle6(styles.lape6show) : setStyle6(styles.lape6hide);
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
                    <label htmlFor='roofType'>Katon tyyppi</label>
                    <select name='roofType' onChange={handleChange} value={values.roofType}>
                        <option value="Tiilikuvio">Tiilikuvio</option>
                        <option value="Lukkosauma">Lukkosauma</option>
                        <option value="Tiilikatto">Tiilikatto</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='roofColor'>Katon väri</label>
                    <select name='roofColor' onChange={handleChange} value={values.roofColor}>
                        <option value="Musta">Musta</option>
                        <option value="Ruskea">Ruskea</option>
                        <option value="Punainen">Punainen</option>
                        <option value="Harmaa">Harmaa</option>
                    </select>
                </div>
              </div>      

              <div className={styles.form_row}> 
                <div>
                  <Button secondary onClick={lapeYksi}>Lape 1</Button>
                  <Button secondary onClick={lapeKaksi}>Lape 2</Button>
                </div>
                <div>
                  <Button secondary onClick={lapeKolme}>Lape 3</Button>
                  <Button secondary onClick={lapeNelja}>Lape 4</Button>
                </div>
                <div>
                  <Button secondary onClick={lapeViisi}>Lape 5</Button>
                  <Button secondary onClick={lapeKuusi}>Lape 6</Button>
                </div>
                </div>
          
            <div id="lapeyksi" className={style1}>
              <h2>Lape 1</h2>
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
                  <label htmlFor='kattotuolijako1'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako1' step="0.1" onChange={handleChange} value={values.kattotuolijako1} min="0" />
                </div>
                <div>
                  <label htmlFor='otsalautakierros1'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros1' onChange={handleChange} value={values.otsalautakierros1} min="0" />
                </div>
              </div>
            </div>

            <div id="lapekaksi" className={style2}>
              <h2>Lape 2</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus2'>Korkeus(m)</label>
                  <input type="number" name='korkeus2' step="0.01" onChange={handleChange} value={values.korkeus2} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys2'>Leveys(m)</label>
                  <input type="number" name='leveys2' step="0.01" onChange={handleChange} value={values.leveys2} min="0" />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako2'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako2' step="0.1" onChange={handleChange} value={values.kattotuolijako2} min="0" />
                </div>
                <div>
                  <label htmlFor='otsalautakierros2'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros2' onChange={handleChange} value={values.otsalautakierros2} min="0" />
                </div>
              </div>
            </div>

            <div id="lapeyksi" className={style3}>
              <h2>Lape 3</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus3'>Korkeus(m)</label>
                  <input type="number" name='korkeus3' step="0.01" onChange={handleChange} value={values.korkeus3} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys3'>Leveys(m)</label>
                  <input type="number" name='leveys3' step="0.01" onChange={handleChange} value={values.leveys3} min="0" />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako3'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako3' step="0.1" onChange={handleChange} value={values.kattotuolijako3} min="0" />
                </div>
                <div>
                  <label htmlFor='otsalautakierros3'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros3' onChange={handleChange} value={values.otsalautakierros3} min="0" />
                </div>
              </div>
            </div>

            <div id="lapeyksi" className={style4}>
              <h2>Lape 4</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus4'>Korkeus(m)</label>
                  <input type="number" name='korkeus4' step="0.01" onChange={handleChange} value={values.korkeus4} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys4'>Leveys(m)</label>
                  <input type="number" name='leveys4' step="0.01" onChange={handleChange} value={values.leveys4} min="0" />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako4'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako4' step="0.1" onChange={handleChange} value={values.kattotuolijako4} min="0" />
                </div>
                <div>
                  <label htmlFor='otsalautakierros4'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros4' onChange={handleChange} value={values.otsalautakierros4} min="0" />
                </div>
              </div>
            </div>

            <div id="lapekaksi" className={style5}>
              <h2>Lape 5</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus5'>Korkeus(m)</label>
                  <input type="number" name='korkeus5' step="0.01" onChange={handleChange} value={values.korkeus5} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys5'>Leveys(m)</label>
                  <input type="number" name='leveys5' step="0.01" onChange={handleChange} value={values.leveys5} min="0" />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako5'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako5' step="0.1" onChange={handleChange} value={values.kattotuolijako5} min="0" />
                </div>
                <div>
                  <label htmlFor='otsalautakierros5'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros5' onChange={handleChange} value={values.otsalautakierros5} min="0" />
                </div>
              </div>
            </div>

            <div id="lapeyksi" className={style6}>
              <h2>Lape 6</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus6'>Korkeus(m)</label>
                  <input type="number" name='korkeus6' step="0.01" onChange={handleChange} value={values.korkeus6} min="0" />
                </div>
                <div>
                  <label htmlFor='leveys6'>Leveys(m)</label>
                  <input type="number" name='leveys6' step="0.01" onChange={handleChange} value={values.leveys6} min="0" />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako6'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako6' step="0.1" onChange={handleChange} value={values.kattotuolijako6} min="0" />
                </div>
                <div>
                  <label htmlFor='otsalautakierros6'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros6' onChange={handleChange} value={values.otsalautakierros6} min="0" />
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

export default ItemForm;