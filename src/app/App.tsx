import React, {useState} from 'react';

 
// {} used for non-default exports
// import {Header} from './components/Header'
//for alias name for export
import {Header as HeaderEx} from './components/Header';

// curly brace NOT USED FOR DEFAULT
import Footer from './components/Footer';

// by default import as alias, you can give any name
// export default Home, but while importing there are alias name
import HomePage from './pages/Home';
import Counter from './pages/Counter';
import Cart from './pages/Cart';
import ThemeContext from './contexts/ThemeContext';
import Checkout from './pages/Checkout';
import ProductListContainer from './cart/containers/ProductList';

// 1st react functional component
//create and returns virtual dom
export default function App() {
    console.log("App render")
  
    // create and return v.dom
    const title = "Product App";
    const year = 2023;

    const [show, toggleShow] = useState(true)
    const [color, setColor] = useState("green")

    // TODO: useState with default value "green"
    // add 3 buttons in app component, before header, "green" "red" yellow"
    // on clicking of button, change the theme to respective color,
    // check cart item color changes


  
    return (
      <div>
        <button onClick={() => setColor("green")} style= { {background: 'green'}}>
          Green
        </button>

        <button onClick={() => setColor("red")} style= { {background: 'red'}}>
        red
        </button>

        <button onClick={() => setColor("yellow")} style= { {background: 'yellow'}}>
        yellow
        </button>

        <HeaderEx title={title} />

        <ProductListContainer />

        {show &&   <Checkout /> }
 
        <ThemeContext.Provider value= {color} >
        {show &&   <Cart />}
            <HomePage />
        </ThemeContext.Provider>

            <button onClick={ () => toggleShow(!show)}> {show? "Hide": "Show"} </button>

            {show && <Counter /> }

            
        <Footer title={title}  />
      </div>
    )
  }
  