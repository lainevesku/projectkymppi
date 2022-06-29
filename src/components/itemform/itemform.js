import styles from './itemform.module.scss';

function ItemForm(props) {
    return (
        <div>
          <form>
            <div className={styles.form}>
              
              <div className={styles.form_row}>
                <div>
                    <label htmlFor='nimi'>Asiakkaan nimi</label>
                    <input type="text" name='nimi' />                            
                </div>
                <div>
                    <label htmlFor='location'>Paikkakunta</label>
                    <input type="text" name='location' />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='address'>Osoite</label>
                    <input type="text" name='address' />
                </div>
                <div>
                    <label htmlFor='amount'>Urakkapalkka</label>
                    <input type="number" name='amount' step="0.01" />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='periodStart'>Aloitus päivämäärä</label>
                    <input type="date" name='periodStart' />
                </div>
                <div>
                    <label htmlFor='periodEnd'>Lopetus päivämäärä</label>
                    <input type="date" name='periodEnd' />
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='roofArea'>Katon pinta-ala</label>
                    <input type="number" name='roofArea' />
                </div>
                <div>
                    <label htmlFor='roofType'>Katon tyyppi</label>
                    <select name='roofType'>
                        <option>Tiilikuvio</option>
                        <option>Lukkosauma</option>
                        <option>Tiilikatto</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='roofColor'>Katon väri</label>
                    <select name='roofColor'>
                        <option>Musta</option>
                        <option>Ruskea</option>
                        <option>Punainen</option>
                        <option>Harmaa</option>
                    </select>
                </div>
              </div>

              <div className={styles.form_row}>
                <div>
                    <label htmlFor='freeWord'>Kommentteja urakasta</label>
                    <textarea rows='4' cols='10' />
                </div>
              </div>

            </div>
          </form>
        </div>
    );
}

export default ItemForm;