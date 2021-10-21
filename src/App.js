import { Route } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ProductData from './Components/Products/ProductData';
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <>
      <Navigation/>
      <Route exact path="/" component={ProductData}/>
      <Route exact path="/shop" component={ProductData}/>
      <Route exact path="/review" component={Cart}/>
    </>
  );
}

export default App;
