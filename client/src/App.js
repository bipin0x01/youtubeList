import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playcard from './components/Playcard';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Route path="/" component = {Playcard} exact/>
      </header>
    </div>
    </Router>
  );

}


export default App;
