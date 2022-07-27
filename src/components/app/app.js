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
import AddLape from '../../routes/addlape/addlape';
import EditLape from '../../routes/editlape/editlape';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons';


function App() {

  const [data, setData] = useState([]);
  const [lapedata, setLapeData] = useState([]);
  const [nimilista, setNimilista] = useState([]);

  const user = useUser();

  const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("periodStart", "desc"), {initialData: [], idField: "id"});

  const lapeCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('lape');
  const { data: lapeCollection } = useFirestoreCollectionData(lapeCollectionRef.orderBy("korkeus"), {initialData: [], idField: "id"});


  useEffect(() => {
    setData(itemCollection);
    const nimi = itemCollection.map(obj => obj.nimi);
    // const paikka = itemCollection.map(obj => obj.location);
    setNimilista(nimi);
  }, [itemCollection]);

  useEffect(() => {
      setLapeData(lapeCollection);
  }, [lapeCollection]);

  const handleItemSubmit = (newitem) => {

      itemCollectionRef.doc(newitem.id).set(newitem);   
  }

  const handleItemDelete = (id) => {

    itemCollectionRef.doc(id).delete();
  
  }

// Lisää addlape editlape kohtiin itemsubmitin tilalle. Muuta itemcollectionref -> lapecollectionref ja tee ylös lapecollectionref 
  const handleLapeSubmit = (newlape) => {

    lapeCollectionRef.doc(newlape.id).set(newlape);   
}

const handleLapeDelete = (id) => {

  lapeCollectionRef.doc(id).delete();

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
              <FullItemInfo data={data} lape={lapedata} />
            </Route>
            <Route path="/edit/:id">
              <EditItem onItemSubmit={handleItemSubmit} data={data} onItemDelete={handleItemDelete} />
            </Route>
            <Route path="/addLAPE">
              <AddLape onLapeSubmit={handleLapeSubmit} nimi={nimilista} />
            </Route>
            <Route path="/editLAPE/:id">
              <EditLape onLapeSubmit={handleLapeSubmit} lape={lapedata} nimi={nimilista} onLapeDelete={handleLapeDelete} />
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
