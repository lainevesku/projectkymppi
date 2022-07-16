import styles from './addlape.module.scss';
import LapeForm from '../../components/lapeform/lapeform';

function AddLape(props) {
    return(
        <div className={styles.addlape}>
            <h2>Uuden lappeen lisääminen työmaahan</h2>
            <LapeForm onLapeSubmit={props.onLapeSubmit} nimi={props.nimi} />
        </div>
    );
}

export default AddLape;