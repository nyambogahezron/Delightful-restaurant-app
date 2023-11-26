import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import $ from 'jquery';
import './assets/css/index.css';

const App = () => {
  return (
    <div>
       <Home /> 
       <About /> 
    </div>
  );
};
export default App;
