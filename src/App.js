
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Contact from './components/Contact';
import StartPage from './components/StartPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={ <StartPage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={ <Contact/> } />          
          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
