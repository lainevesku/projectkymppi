import styles from './itemform.module.scss';
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
      history.push("/")
    }

    const initialState = props.data ? props.data : {
      nimi: "",
      location: "",
      address: "",
      amount: 0,
      periodStart: "",
      periodEnd: "",
      roofArea: 0,
      roofType: "",
      roofColor: "",
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
                    <label htmlFor='location'>Paikkakunta</label>
                    <input type="text" name='location' onChange={handleChange} value={values.location} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='address'>Osoite</label>
                    <input type="text" name='address' onChange={handleChange} value={values.address} />
                </div>
                <div>
                    <label htmlFor='amount'>Urakkapalkka</label>
                    <input type="number" name='amount' step="0.01" onChange={handleChange} value={values.amount} />
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
                    <label htmlFor='roofArea'>Katon pinta-ala(m²)</label>
                    <input type="number" name='roofArea' step="0.01" onChange={handleChange} value={values.roofArea} />
                </div>
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
                    <label htmlFor='freeWord'>Kommentteja urakasta</label>
                    <textarea rows='4' cols='10' onChange={handleChange} value={values.freeWord}/>
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