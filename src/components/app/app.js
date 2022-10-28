import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';
import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Items from '../../routes/items/items';
import AddItem from '../../routes/additem/additem';
import EditItem from '../../routes/edititem/edititem';
import FullItemInfo from '../../routes/fulliteminfo/fulliteminfo';
import Verhot from '../../routes/verhot/verhot';
import AddVerho from '../../routes/addverho/addverho';
import FullVerhoInfo from '../../routes/fullverhoinfo/fullverhoinfo';
import Settings from '../../routes/settings/settings';
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
  const verhoCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('verho');
  const { data: verhoCollection } = useFirestoreCollectionData(verhoCollectionRef.orderBy("periodStart", "desc"), {initialData: [], idField: "id"});

  useEffect(() => {
    setData(itemCollection);
  }, [itemCollection]);

  useEffect(() => {
    setData(verhoCollection);
  }, [verhoCollection]);

  // Tallentaa uuden itemin item collectioon
  const handleItemSubmit = (newitem) => {
    itemCollectionRef.doc(newitem.id).set(newitem);   
  }

  const handleVerhoSubmit = (newverho) => {
    verhoCollectionRef.doc(newverho.id).set(newverho);
  }

  // Poista item id:n perusteella 
  const handleItemDelete = (id) => {
    itemCollectionRef.doc(id).delete();
  }

  const handleVerhoDelete = (id) => {
    verhoCollectionRef.doc(id).delete();
  }

  return (
    <div className={styles.appbgcolor}>
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
              <Items data={itemCollection} />
            </Route>   
            <Route path="/add">
              <AddItem onItemSubmit={handleItemSubmit} />
            </Route>
            <Route path="/info/:id">
              <XyzTransition appear duration="auto">
                <div>
              <FullItemInfo data={itemCollection}/>
              </div>
              </XyzTransition>
            </Route>
            <Route path="/edit/:id">
              <EditItem onItemSubmit={handleItemSubmit} data={itemCollection} onItemDelete={handleItemDelete} />
            </Route>
            <Route path="/verhous">
              <Verhot data={data} />  
            </Route>        
            <Route path="/addverho">
              <AddVerho onItemSubmit={handleVerhoSubmit} />
            </Route>
            <Route path="/infoverho/:id">
              <XyzTransition appear duration="auto">
                <div>
                  <FullVerhoInfo data={data}/>
                </div>
              </XyzTransition>
            </Route>
            <Route path="/settings">
              <Settings />
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
