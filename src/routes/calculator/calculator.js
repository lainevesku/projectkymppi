import styles from './calculator.module.scss';
import { Link } from 'react-router-dom';
import { ButtonContainer, FloatingButton } from '../../shared/uibuttons';

function Calculator() {
    return(
        <ButtonContainer>
            <div className={styles.calculator}>
                TESTI TOIMIIKO VERHOFORM
                <Link to="/addverho"><FloatingButton secondary>+</FloatingButton></Link>
            </div>
        </ButtonContainer> 
    );
}

export default Calculator;