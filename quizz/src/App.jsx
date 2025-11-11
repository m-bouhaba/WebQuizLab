
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Quizpage from './pages/Quiz';
import Resultpage from './pages/Result';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "/quiz" element={<Quizpage/>}/>
      <Route path= "/result" element={<Resultpage/>}/>


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
