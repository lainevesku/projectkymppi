import styles from './item.module.scss';
import {MdNavigateNext} from 'react-icons/md';

function Item(props) {

    const locale = "fi-FI";
    const start = new Date(props.data.periodStart).toLocaleDateString(locale);
    const end =  new Date(props.data.periodEnd).toLocaleDateString(locale);
    const tyomaaNimi = (props.data.nimi) + ", " + (props.data.location)

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_name}>{tyomaaNimi}</div>
                <div className={styles.item_time}>{start}-{end}</div>
                </div>
                <div className={styles.item_seemore}>
                    <MdNavigateNext />
                </div>
        </div>
    );
}

export default Item;