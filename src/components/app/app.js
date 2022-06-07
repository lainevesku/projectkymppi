import styles from './app.module.scss';
import Header from '../header/header';
import Items from '../items/items';
import Menu from '../menu/menu';

function App() {
  return (
    <div className={styles.app}>
        <Header />
        <Items />
        <Menu />
    </div>
  );
}

export default App;
