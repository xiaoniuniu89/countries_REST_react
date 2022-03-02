import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Country from './pages/country/Country';
import Home from './pages/home/Home';
import Navbar from './componants/Navbar'





function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/country/:name'>
            <Country />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
