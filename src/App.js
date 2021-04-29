
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeaugeDetails from './components/LeaugeDetails';


function App() {

  return (
    <Router>
      <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/leauge/:idLeague">
          <LeaugeDetails></LeaugeDetails>
          </Route>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
    
    
    </Router>
   
  );
}

export default App;
