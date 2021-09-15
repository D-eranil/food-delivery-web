import { useState } from "react";

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Tab from './components/UI/Tab'

function App() {
  const[Cartisshown, setCartisshown] = useState(false);

  const Cartshowhandler = props =>{
    setCartisshown(true);
  }

  const Carthidehandler = props =>{
    setCartisshown(false);
  }
  return (
    <CartProvider>
      {Cartisshown && <Cart onHideCart={Carthidehandler} />}
      <Header onShowCart={Cartshowhandler}/>
      <main>
        <Meals />
      </main>
      <Tab/>
    </CartProvider>
    
  );
}

export default App;
