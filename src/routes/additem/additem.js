import styles from './additem.module.scss';
import ItemForm from "../../components/itemform/itemform";

function AddItem(props) {
    return (
        <div className={styles.additem}>
            <h2>Uuden työmaan lisääminen</h2>
            <ItemForm onItemSubmit={props.onItemSubmit}/>
        </div>
    );
}

export default AddItem;