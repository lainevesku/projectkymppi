import styles from './startup.module.scss';
import { Button } from '../../shared/uibuttons';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';
import Header from '../header/header';
import Menu from '../menu/menu';

function Startup(props) {

    // Kirjaudutaan sisään Google-tunnuksilla
    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return (
        <div className={styles.startupbgc}>
        <div className={styles.startup}>
            <Router>
            <Header />
            <div className={styles.startup_text}>
                <p>
                Tervetuloa käyttämään La'Pete -sovellusta. La'Petestä löydät 
                työmaapäiväkirjan, mihin voit laittaa itsellesi ylös työmaan
                yleisimmät tiedot. Voit myös merkitä eri lappeiden tiedot ja 
                La'Pete laskee puolestasi kattoon tarvittavan puutavaran ja 
                peltien määrän. La'Petessä on myös erillinen lape laskuri, mikä 
                laskee tarvittavat tavaramäärät yhdelle lappeelle ilman työmaan luontia. 
                Sinun tulee kirjautua sisään Google-tunnuksillasi, päästäksesi käyttämään La'Peteä. 
                </p>
                <div className={styles.startup_button}>
                <Button secondary onClick={signIn}>Kirjaudu sisään</Button>
                </div>
            </div>
            
            <Menu />
            </Router>
        </div>
        </div>
    );
}

export default Startup