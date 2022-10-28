import styles from './editverho.module.scss';
import VerhoForm from '../../components/verhoform/verhoform';
import { useParams } from 'react-router-dom';

function EditVerho(props) {

    // Haetaan id:n avulla oikea item ja sen sisältö
    const { id } =useParams();
    const index = props.data.findIndex(verho=> verho.id === id);
    let verho = props.data[index];

    return (
        <div className={styles.edititem}>
            <h2>Työmaan muokkaaminen</h2>
            <VerhoForm onItemSubmit={props.onItemSubmit} data={verho} onItemDelete={props.onItemDelete} />
        </div>
    );
}

export default EditVerho; 