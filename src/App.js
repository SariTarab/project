
import logo from './logo.svg';
import react from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Show from "./components/show"
import List from "./components/list"
import Manue from "./components/manue"
import { Provider } from "react-redux"
import store from "./redux/store"
import Show_All from './components/showAll';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Manue></Manue>
          <br></br>
          <Switch>
            <Route path="/SHOW">
              <Show />
            </Route>
            <Route path="/SHOWALL">
              <Show_All />
            </Route>
            <Route path="/">
              <List/>
            </Route>
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
