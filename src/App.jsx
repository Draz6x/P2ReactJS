/**/
/*import React, { Component } from 'react'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Cervezas from './componentes/Productos/Cervezas/Cervezas';
import Accesorios from './componentes/Productos/Acc&Imp/Accesorios';
import Destilados from './componentes/Productos/Destilados/Destilados';*/
/*import Home from './componentes/Home/Home';
import Wine from './componentes/Productos/Wine/Wine';*/
/*import Menu from './componentes/Menu/Menu';*/
/*_________________________________*/
/**/

/*    

    <p>Elige alguno de nuestros productos en las siguientes categorias</p>
    <a href="http://www.mercadolibre.com" target='blank'> Mercado Libre </a>*/

import React from "react";
import { NavBar } from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer" ;
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer" ;
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
    <Route path='/item/idItem' element={<ItemDetailContainer/>}/>
    
      <ItemListContainer greeting="Vinoteca"/>
      <ItemDetailContainer/>
  </Routes>   
</BrowserRouter>

         
    </>
  )
}

export default App