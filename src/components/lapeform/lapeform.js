import styles from './lapeform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function LapeForm(props) {

    const history = useHistory();

    const submit = () => {
      let storedvalues = Object.assign({}, values);
      storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
      props.onLapeSubmit(storedvalues);
      history.push("/")
    }

    const initialState = props.lape ? props.lape : {
        tyomaa: "",
        roofType: "",
        roofColor: "",
        korkeus: null,
        leveys: null,
        kattotuolijako: null,
        otsalautakierros: null
      };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
    }

    const handleDelete = (event) => {
      event.preventDefault();
      props.onLapeDelete(values.id);
      history.push("/");
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              
              <div className={styles.form_row}>
                <div>
                    <label htmlFor='tyomaa'>Valitse työmaa</label>
                    <select name="tyomaa" onChange={handleChange} value={values.tyomaa}>
                       { props.nimi.map( (nimi) => <option key={nimi} value={nimi}>{nimi}</option> ) }
                    </select>                           
                </div>
                <div>
                    <label htmlFor='roofType'>Katon tyyppi</label>
                    <select name='roofType' onChange={handleChange} value={values.roofType}>
                        <option value="0.35">Tiilikuvio</option>
                        <option value="0.3">Lukkosauma</option>
                        <option value="0.35">Tiilikatto</option>
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
                  <label htmlFor='korkeus'>Lappeen korkeus(m)</label>
                  <input type="number" name='korkeus' step="0.01" onChange={handleChange} value={values.korkeus} />
                </div>
                <div>
                  <label htmlFor='leveys'>Lappeen leveys(m)</label>
                  <input type="number" name='leveys' step="0.01" onChange={handleChange} value={values.leveys} />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                  <label htmlFor='kattotuolijako'>Kattotuolijako</label>
                  <input type="number" name='kattotuolijako' step="0.1" onChange={handleChange} value={values.kattotuolijako} />
                </div>
                <div>
                  <label htmlFor='otsalautakierros'>Otsalautakierros</label>
                  <input type="number" name='otsalautakierros' onChange={handleChange} value={values.otsalautakierros} />
                </div>
              </div>


              <div className={styles.form_row}>
                <div>
                  <Button onClick={handleCancel}>PERUUTA</Button>
                </div>
                <div>
                  <Button primary type="submit">{ props.lape ? "TALLENNA" : "LISÄÄ LAPE"}</Button>
                </div>
              </div>

              { props.onLapeDelete ? 
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

export default LapeForm;