import styles from './settings.module.scss';
import { Button } from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';
import { useHistory } from "react-router-dom";

function Settings(props) {

    const user = useUser();
    const auth = useAuth();
    const history = useHistory();

    const signOut = async () => {
        await auth.signOut();
        history.push('.');
        window.location.reload(); 
    }

    return (
        <div className={styles.settings}>
            <h2>Profiili</h2>
            <div className={styles.settings_profile}>
                <div className={styles.settings_user}>
                    <div><img src={user.data.photoURL} alt="" /></div>
                    <div>{user.data.displayName}<br/>{user.data.email}</div>
                </div>
                <div>
                    <Button secondary onClick={signOut}>Kirjaudu ulos</Button>
                </div>
            </div>  

        </div>
    );
}

export default Settings;