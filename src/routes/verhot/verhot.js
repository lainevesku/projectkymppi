import styles from './verhot.module.scss';
import { Link } from 'react-router-dom';
import Verho from '../../components/verho/verho';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Verhot(props) {

    const verhot = props.data.map((verho) => <Verho key={verho.id} data={verho} />);
    return(
        <ButtonContainer>
            <div>
                <div className={styles.verhot}>Verhoukset</div>
                { verhot }
                <Link to="/addverho"><FloatingButton secondary>+</FloatingButton></Link>
            </div>
        </ButtonContainer> 
    );
}

export default Verhot;