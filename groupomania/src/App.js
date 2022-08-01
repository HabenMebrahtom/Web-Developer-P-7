import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
       <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
