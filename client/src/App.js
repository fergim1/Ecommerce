import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import Catalog from './components/details/Catalog'
import Carrito from './components/details/Carrito'
import Register from './components/forms/createForm'
import Login from './components/forms/loginForm'
import ProductDetails from './components/product/ProductDetails'
import Reviews from './components/review/Reviews'
import './App.css';
import OrdenIndividual from './components/admin/OrdenIndividual';
import Envio from './components/details/Envio'
import Gracias from './components/details/Gracias'
import Slide from './components/product/Slide'
import Footer from './components/footer/Footer'
import Dashboard from './components/admin/Dashboard'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter >
          <Route path="/" component={NavBar} />
          <Route exact path='/catalogue' component={Slide} />
          <Route path="/catalogue" component={SearchBar} />
          <Route exact path='/catalogue' component={Catalog} />
          <Route exact path='/registro' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/reviews' component={Reviews} />
          <Route exact path='/admin' component={Dashboard} />        
          <Route exact path="/catalog/:id" component={ProductDetails} />
          <Route exact path='/carrito' component={Carrito} />
          <Route exact path="/admin/ordenes/:id" component={OrdenIndividual} />
          <Route exact path="/carrito/envio" component={Envio} />
          <Route exact path="/carrito/envio/gracias" component={Gracias} />
          <Route exact path="/catalogue" component={Footer} />  
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
