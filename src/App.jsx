import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Menu2 from './pages/Menu2';
// import Chefs from './components/Chefs';
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
       <Menu2 />
      {/*<Chefs /> */}
    </div>
  );
};
export default App;
