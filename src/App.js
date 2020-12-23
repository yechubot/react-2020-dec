
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {//arrow function or not , doesn't matter 
  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home />
      </div>
    </div>
  );
}

export default App;
