import './App.scss';
import Home from './pages/Home/Home';
import TourDetailsPage from './pages/TourDetailsPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/TourDetailsPage/" element={<TourDetailsPage/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
