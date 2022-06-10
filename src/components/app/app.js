import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Items from '../items/items';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons';

function App() {
  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Items />
        </Content>
        <Menu />
      </div>
    </ButtonAppContainer>
  );
}

export default App;
