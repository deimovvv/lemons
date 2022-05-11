import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import LandingPage from './componentes/LandingPage/LandingPage.js'
import {CartProvider} from './componentes/context/CartContext'
import Footer from "./componentes/footer/Footer";



function App() {
  return (
     // funcion que tiene adentro al provider
    <CartProvider> 
    <BrowserRouter>
      
        <NavBar />
           <Routes>   
           {/* <Route></Route> */}
           {/* <div className="container-app"> */}
           <Route path='/' element={<LandingPage />}   />
          <Route path='/items' element={<ItemListContainer />}   />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} / >  
          <Route path='/category/:id' element={<ItemListContainer />} / >  
          
            
         {/*  </div> */}
           
          
        </Routes>
        <Footer/>
      
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
