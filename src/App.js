

import Namvbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
// all the content inside the App component are render inside the brouser
//this is also known as root component.this is the only component that is render inside dom
function App() {
  //now we srround our entire application with the Router component
  return (
    <Router>
      <div className="App">
        <Namvbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
          <Switch>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
