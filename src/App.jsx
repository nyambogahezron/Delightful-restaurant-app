import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import $ from 'jquery';
import './assets/css/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
