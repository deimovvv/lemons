

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (

  /*   <BrowserRouter>  */
  <>  
    <NavBar/>

    <div className='container-app'>
    <ItemListContainer/>
    <ItemDetailContainer/>
    
    
    
   
     
    </div>
    </>
   /*  </BrowserRouter> */
   
    
  );
}

export default App;
