import styles from './menu.module.scss';
import { MdViewList } from 'react-icons/md';
import { ImCalculator } from 'react-icons/im';
import { MdSettings } from 'react-icons/md'; 

function Menu() {
    return(
        <div className={styles.menu}>
            <div><MdViewList /></div>
            <div><ImCalculator /></div>
            <div><MdSettings /></div>
        </div>
    );
}

export default Menu;