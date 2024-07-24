import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MiniCalculator from './components/MiniCalculator';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MiniCalculator/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
