import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../src/pages/Home"
import SearchPage from "../src/pages/SearchPage"
import NoMatch from "../src/pages/NoMatch"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/search"><SearchPage /></Route>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </Router>    
    </div>
  );
}

export default App;
