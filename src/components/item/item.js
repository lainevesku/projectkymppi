import styles from './item.module.scss';
import {MdNavigateNext} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Item(props) {

    const locale = "fi-FI"; // Locale asetetaan Suomeksi

    // Alku ja Loppu päivä muutetaan suomalaiseen muotoon
    const start = new Date(props.data.periodStart).toLocaleDateString(locale);
    const end =  new Date(props.data.periodEnd).toLocaleDateString(locale);

    // Työmaan nimi koostuu asikkaan nimestä ja paikkakunnasta
    const tyomaaNimi = (props.data.nimi) + ", " + (props.data.location);

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_name}>{tyomaaNimi}</div>
                <div className={styles.item_time}>{start}-{end}</div>
            </div>
                <div className={styles.item_seemore}>
                    <Link to={"/info/"+props.data.id}><MdNavigateNext /></Link>
                </div>
        </div>
    );
}

export default Item;