import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from './components/header/Navbar'

import Home from './components/pages/Home'
import Productos from './components/pages/Productos'
import Nosotros from './components/pages/Nosotros'
import Login from './components/pages/Login'
import Registro from './components/pages/Registro'
import Contacto from './components/pages/Contacto'
import Cliente from './components/pages/Cliente'
import Admin from './components/pages/Admin';
import CrearProducto from './components/pages/CrearProducto';


function App() {
  return (
    <div className="App">   
    

    <Router>
    <Navbar/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productos"  component={Productos} />
      <Route path='/nosotros' component={Nosotros}/>
      <Route path='/login' component={Login} />
      <Route path='/registro' component={Registro}/>
      <Route path='/contacto' component={Contacto}/>
      <Route path='/cliente' component={Cliente}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/crear' component={CrearProducto}/>


      </Switch>
    </Router>
      
      
    </div>
  );
}

export default App;
