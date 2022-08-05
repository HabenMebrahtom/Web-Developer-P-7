import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
       <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home /> } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
