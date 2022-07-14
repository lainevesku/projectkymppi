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


function App() {

  const [data, setData] = useState([]);

  const user = useUser();

  const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("periodStart", "desc"), {initialData: [], idField: "id"});

  console.log(itemCollection);

  useEffect(() => {
    setData(itemCollection);
  }, [itemCollection]);

  const handleItemSubmit = (newitem) => {

    itemCollectionRef.doc(newitem.id).set(newitem);
    /*
    let storeddata = data.slice();
    const index = storeddata.findIndex(item => item.id === newitem.id);
    if (index >= 0 ) {
      storeddata[index] = newitem;
    } else {
      storeddata.push(newitem);
    }

    storeddata.sort( (a,b) => {
      const aDate = new Date(a.periodStart);
      const bDate = new Date(b.periodStart);
      return bDate.getTime() - aDate.getTime();
    } );

    setData(storeddata);
    */
  }

  const handleItemDelete = (id) => {

    itemCollectionRef.doc(id).delete();
    /*
    let storeddata = data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    setData(storeddata);
    */
  }

  return (
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
              <FullItemInfo data={data} />
            </Route>
            <Route path="/edit/:id">
              <EditItem onItemSubmit={handleItemSubmit} data={data} onItemDelete={handleItemDelete} />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
