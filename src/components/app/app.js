import styles from './app.module.scss';
import Items from '../items/items';

function App() {
  return (
    <div className={styles.app}>
        <Items />
    </div>
  );
}

export default App;
