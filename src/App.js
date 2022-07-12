
import './App.css';
import './colors.css'
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='app'>
        <div id="wrapper">
          <Navigation></Navigation>
          <header className="App-header">
          </header>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< Home />}></Route>
            <Route exact path='/contact' element={< Home />}></Route>
            <Route exact path='/house' element={< Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
