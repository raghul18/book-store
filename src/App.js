import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage';
import DetailsPage from './Pages/DetailsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/details/:id' component={DetailsPage}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
