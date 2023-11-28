import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import $ from 'jquery';
import './assets/css/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Chefs from './components/Chefs';
import Menu from './pages/Menu';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Chefs />
    </div>
  );
};
export default App;
