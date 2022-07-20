import logo from './logo.svg';
import './App.css';
import NavJS from './Componentes/Nav';
import ItemJS from './Componentes/Item';
import ItemListJS from './Componentes/ItemList';
import ItemDetailContainer from './Componentes/ItemDetailContainer';



function App() {
  return (
   <>
    <NavJS />
    <ItemListJS />
    <ItemDetailContainer />
    </>
  )
}

export default App;
