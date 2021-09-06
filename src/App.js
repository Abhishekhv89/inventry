import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import EditInventry from './components/Forms/editInventry';
import Inventory from './components/inventory';
import NotFound from './components/not-found';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/inventry" component={Inventory} />
        <Route path="/editInventry" component={EditInventry} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Inventory} />
        <Redirect to="not-found" />
      </Switch>
    </div>
  );
}

export default App;
