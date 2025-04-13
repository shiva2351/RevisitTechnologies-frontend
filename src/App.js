import { Switch,Route, Redirect } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import LoginRoute from './components/LoginRoute';
import SignUp from './components/SignUp';
import './App.css';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DashBoard} /> 
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={ LoginRoute } />
        <Route exact path="/notfound" component={ NotFound } />
        <Redirect to="notfound" />
      </Switch>
    </div>
  );
}

export default App;
