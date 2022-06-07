import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Items from '../items/items';
import Menu from '../menu/menu';

function App() {
  return (
    <div className={styles.app}>
        <Header />
        <Content>
          <Items />
        </Content>
        <Menu />
    </div>
  );
}

export default App;
