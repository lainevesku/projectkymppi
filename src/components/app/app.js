import styles from './app.module.scss';
import Header from '../header/header';
import Items from '../items/items';

function App() {
  return (
    <div className={styles.app}>
        <Header />
        <Items />
    </div>
  );
}

export default App;
