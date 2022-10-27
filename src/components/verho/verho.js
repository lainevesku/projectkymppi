import styles from './verho.module.scss';
import {MdNavigateNext} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Verho(props) {

    const locale = "fi-FI"; // Locale asetetaan Suomeksi

    // Alku ja Loppu päivä muutetaan suomalaiseen muotoon
    const start = new Date(props.data.periodStart).toLocaleDateString(locale);
    const end =  new Date(props.data.periodEnd).toLocaleDateString(locale);

    // Työmaan nimi koostuu asikkaan nimestä ja paikkakunnasta
    const tyomaaNimi = (props.data.nimi) + ", " + (props.data.location);

    return (
        <div className={styles.verho}>
            <div className={styles.verho_data}>
                <div className={styles.verho_name}>{tyomaaNimi}</div>
                <div className={styles.verho_time}>{start}-{end}</div>
            </div>
                <div className={styles.verho_seemore}>
                    <Link to={"/infoverho/"+props.data.id}><MdNavigateNext /></Link>
                </div>
        </div>
    );
}

export default Verho;