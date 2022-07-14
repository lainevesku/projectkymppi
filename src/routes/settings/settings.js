import styles from './settings.module.scss';
import { Button } from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';

function Settings(props) {

    const user = useUser();
    const auth = useAuth();

    const signOut = async () => {
        await auth.signOut();
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