import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Country from './pages/country/Country';
import Home from './pages/home/Home';
import Navbar from './componants/Navbar'
import { useTheme } from './hooks/useTheme';





function App() {
  
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/country/:name'>
            <Country />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
