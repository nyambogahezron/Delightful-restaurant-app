import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import $ from 'jquery';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './assets/css/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Services />
    </div>
  );
};
export default App;
