// import './App.css';
// import './assets/App.css';
import {BrowserRouter , Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Content} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;



