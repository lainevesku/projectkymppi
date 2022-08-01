import styles from './edititem.module.scss';
import ItemForm from "../../components/itemform/itemform";
import { useParams } from 'react-router-dom';

function EditItem(props) {

    // Haetaan id:n avulla oikea item ja sen sisältö
    const { id } =useParams();
    const index = props.data.findIndex(item => item.id === id);
    let item = props.data[index];

    return (
        <div className={styles.edititem}>
            <h2>Työmaan muokkaaminen</h2>
            <ItemForm onItemSubmit={props.onItemSubmit} data={item} onItemDelete={props.onItemDelete} />
        </div>
    );
}

export default EditItem; 