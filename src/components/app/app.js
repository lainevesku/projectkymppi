import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';
import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Items from '../../routes/items/items';
import Calculator from '../../routes/calculator/calculator';
import Settings from '../../routes/settings/settings';
import AddItem from '../../routes/additem/additem';
import EditItem from '../../routes/edititem/edititem';
import FullItemInfo from '../../routes/fulliteminfo/fulliteminfo';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";


function App() {

  const [data, setData] = useState([]);

  // Haetaan kirjautunut käyttäjä
  const user = useUser();

  // Luodaan Firestoreen item collection
  const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("periodStart", "desc"), {initialData: [], idField: "id"});

  useEffect(() => {
    setData(itemCollection);
  }, [itemCollection]);

  // Tallentaa uuden itemin item collectioon
  const handleItemSubmit = (newitem) => {

      itemCollectionRef.doc(newitem.id).set(newitem);   
  }

  // Poista item id:n perusteella 
  const handleItemDelete = (id) => {

    itemCollectionRef.doc(id).delete();
  
  }

  return (
    <div className={styles.appbgcolor}>
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
              <Items data={data} />
            </Route>           
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/add">
              <AddItem onItemSubmit={handleItemSubmit} />
            </Route>
            <Route path="/info/:id">
              <XyzTransition appear duration="auto">
                <div>
              <FullItemInfo data={data}/>
              </div>
              </XyzTransition>
            </Route>
            <Route path="/edit/:id">
              <EditItem onItemSubmit={handleItemSubmit} data={data} onItemDelete={handleItemDelete} />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
    </div>
  );
}

export default App;
