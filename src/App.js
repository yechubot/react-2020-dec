import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {//arrow function or not , doesn't matter 
  // switch -> 하나에 하나씩만 보여줄 수 있도록? -> 라우트에 따라 달라짐 
  //route path -> after the url 
  //route match하면 멈추기 때문에 홈 보이고 create 안보임
  // "/"는 /create 안에 있기 때문에 match한다고 생각 (top to bottom)
  // included가 된거는 match 안하고 싶을 때는 exact 를 붙임 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
