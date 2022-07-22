import styles from './itemform.module.scss';
import { useState } from 'react';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function ItemForm(props) {

    const history = useHistory();

    const submit = () => {
      let storedvalues = Object.assign({}, values);
      storedvalues.amount = parseFloat(storedvalues.amount);
      storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
      props.onItemSubmit(storedvalues);
      history.goBack()
    }

    const initialState = props.data ? props.data : {
      nimi: "",
      location: "",
      address: "",
      postal: "",
      amount: "",
      periodStart: "",
      periodEnd: "",
      roofType: "",
      roofColor: "",
      korkeus1: "",
      leveys1: "",
      kattotuolijako1: "",
      otsalautakierros1: "",
      korkeus2: "",
      leveys2: "",
      kattotuolijako2: "",
      otsalautakierros2: "",
      korkeus3: "",
      leveys3: "",
      kattotuolijako3: "",
      otsalautakierros3: "",
      korkeus4: "",
      leveys4: "",
      kattotuolijako4: "",
      otsalautakierros4: "",
      korkeus5: "",
      leveys5: "",
      kattotuolijako5: "",
      otsalautakierros5: "",
      korkeus6: "",
      leveys6: "",
      kattotuolijako6: "",
      otsalautakierros6: "",
      freeWord: ""
    };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
    }

    const handleDelete = (event) => {
      event.preventDefault();
      props.onItemDelete(values.id);
      history.push("/");
    }

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
                    <input type="text" name='nimi' onChange={handleChange} value={values.nimi} />                            
                </div>
                <div>
                    <label htmlFor='amount'>Urakkapalkka(€)</label>
                    <input type="number" name='amount' min="0" step="0.01" onChange={handleChange} value={values.amount} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='address'>Katuosoite</label>
                    <input type="text" name='address' onChange={handleChange} value={values.address} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='postal'>Postinumero</label>
                    <input type="text" name='postal' onChange={handleChange} value={values.postal} />
                </div>
                <div>
                    <label htmlFor='location'>Paikkakunta</label>
                    <input type="text" name='location' onChange={handleChange} value={values.location} />
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
                  <label htmlFor='korkeus1'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus1' step="0.01" onChange={handleChange} value={values.korkeus1} />
                </div>
                <div>
                  <label htmlFor='leveys1'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys1' step="0.01" onChange={handleChange} value={values.leveys1} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako1'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako1' step="0.1" onChange={handleChange} value={values.kattotuolijako1} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros1'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros1' onChange={handleChange} value={values.otsalautakierros1} />
                </div>
              </div>
            </div>

            <div id="lapekaksi" className={style2}>
              <h2>Lape 2</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus2'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus2' step="0.01" onChange={handleChange} value={values.korkeus2} />
                </div>
                <div>
                  <label htmlFor='leveys2'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys2' step="0.01" onChange={handleChange} value={values.leveys2} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako2'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako2' step="0.1" onChange={handleChange} value={values.kattotuolijako2} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros2'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros2' onChange={handleChange} value={values.otsalautakierros2} />
                </div>
              </div>
            </div>

            <div id="lapeyksi" className={style3}>
              <h2>Lape 3</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus3'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus3' step="0.01" onChange={handleChange} value={values.korkeus3} />
                </div>
                <div>
                  <label htmlFor='leveys3'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys3' step="0.01" onChange={handleChange} value={values.leveys3} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako3'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako3' step="0.1" onChange={handleChange} value={values.kattotuolijako3} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros3'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros3' onChange={handleChange} value={values.otsalautakierros3} />
                </div>
              </div>
            </div>

            <div id="lapeyksi" className={style4}>
              <h2>Lape 4</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus4'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus4' step="0.01" onChange={handleChange} value={values.korkeus4} />
                </div>
                <div>
                  <label htmlFor='leveys4'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys4' step="0.01" onChange={handleChange} value={values.leveys4} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako4'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako4' step="0.1" onChange={handleChange} value={values.kattotuolijako4} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros4'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros4' onChange={handleChange} value={values.otsalautakierros4} />
                </div>
              </div>
            </div>

            <div id="lapekaksi" className={style5}>
              <h2>Lape 5</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus5'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus5' step="0.01" onChange={handleChange} value={values.korkeus5} />
                </div>
                <div>
                  <label htmlFor='leveys5'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys5' step="0.01" onChange={handleChange} value={values.leveys5} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako5'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako5' step="0.1" onChange={handleChange} value={values.kattotuolijako5} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros5'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros5' onChange={handleChange} value={values.otsalautakierros5} />
                </div>
              </div>
            </div>

            <div id="lapeyksi" className={style6}>
              <h2>Lape 6</h2>
              <div className={styles.form_row}> 
                <div>
                  <label htmlFor='korkeus6'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus6' step="0.01" onChange={handleChange} value={values.korkeus6} />
                </div>
                <div>
                  <label htmlFor='leveys6'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys6' step="0.01" onChange={handleChange} value={values.leveys6} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako6'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako6' step="0.1" onChange={handleChange} value={values.kattotuolijako6} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros6'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros6' onChange={handleChange} value={values.otsalautakierros6} />
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
                  <Button primary type="submit">{ props.data ? "TALLENNA" : "LISÄÄ URAKKA"}</Button>
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