import styles from './startup.module.scss';
import { Button } from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';

function Startup(props) {

    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return (
        <div className={styles.startup}>
            <h1>Project Kymppi</h1>
            <div>Tervetuloa Project Kymppi sovellukseen. Sovelluksessa voit kirjata 
                 työmaiden tietoja ylös ja sovelluksessa on myös lape laskuri, mikä laskee
                 jokaisen lappeeseen tarvittavan puutavaran määrän. Sinun tulee kirjautua
                 sisään Google-tunnuksillasi, päästäksesi käyttämään sovellusta. 
                 </div>
                 <Button secondary onClick={signIn}>Kirjaudu sisään</Button>

        </div>
    );
}

export default Startup