import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import { MdSettings } from 'react-icons/md'; 
import { MdRoofing } from 'react-icons/md';
import { GiBrickWall } from 'react-icons/gi'

function Menu() {
    return(
        <div className={styles.menu}>
            <div><Link to="/"><MdRoofing /></Link></div>
            <div><Link to="/verhous"><GiBrickWall /></Link></div>
            <div><Link to="/settings"><MdSettings /></Link></div>
        </div>
    );
}

export default Menu;