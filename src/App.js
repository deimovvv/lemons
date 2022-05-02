

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (

  /*   <BrowserRouter>  */
    <div className='container-app'>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    
    
    
   
     
    </div>
   /*  </BrowserRouter> */
   
    
  );
}

export default App;
