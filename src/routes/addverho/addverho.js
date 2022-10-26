import styles from './addverho.module.scss';
import VerhoForm from '../../components/verhoform/verhoform';

function AddVerho(props) {
    return (
        <div className={styles.addverho}>
            <h2>Uuden verhouksen lisääminen</h2>
            <VerhoForm onItemSubmit={props.onItemSubmit}/>
        </div>
    );
}

export default AddVerho;