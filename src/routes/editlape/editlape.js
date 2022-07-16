import styles from './editlape.module.scss';
import LapeForm from '../../components/lapeform/lapeform';
import { useParams } from 'react-router-dom';

function EditLape(props) {

    const { id } =useParams();
    const index = props.lape.findIndex(lape => lape.id === id);
    let lape = props.lape[index];

    return (
        <div className={styles.editlape}>
            <h2>Lappeen muokkaaminen</h2>
            <LapeForm onLapeSubmit={props.onLapeSubmit} data={lape} onLapeDelete={props.onLapeDelete} />
        </div>
    );
}

export default EditLape; 