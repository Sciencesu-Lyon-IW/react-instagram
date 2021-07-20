import {BrowserRouter , Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Content from "./pages/Content";

function App() {
    let isAuthenticated = false
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/home" exact component={Content} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;



