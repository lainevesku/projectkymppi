import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Items from '../../routes/items/items';
import Calculator from '../../routes/calculator/calculator';
import Settings from '../../routes/settings/settings';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons';

function App() {
  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
              <Items />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
