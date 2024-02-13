import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Main from './components/Main';
import Contact from './components/Contact';
import Skill from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="m-2 p-4">
        <Header/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/skills" component={Skill} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
