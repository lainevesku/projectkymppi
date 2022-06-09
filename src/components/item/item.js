import styles from './item.module.scss';
import {MdNavigateNext} from 'react-icons/md';

function Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_name}>Peltonen Taalintehdas</div>
                <div className={styles.item_time}>
                <div className={styles.item_start}>4.6.2022</div>
                -
                <div className={styles.item_end}>13.6.2022</div>
                </div>
                </div>
                <div className={styles.item_seemore}>
                    <MdNavigateNext />
                </div>
        </div>
    );
}

export default Item;