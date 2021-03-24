
import './App.scss';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './Pages/Home';
import About from './Pages/About';
import Portflio from './Pages/Portfolio';

import Contact from './Pages/Contact';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
            <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About/>
              </Route>
              <Route path="/portfolios" exact>
                <Portflio />
              </Route>
              
              <Route path="/contact" exact>
                <Contact />
              </Route>
              </Switch>
           </div>
      </div>
      
    </div>
  );
}

export default App;
