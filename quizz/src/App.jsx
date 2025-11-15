
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Quizpage from './pages/Quiz';
import Resultpage from './pages/Result';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quizpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/result" element={<Resultpage />} />
      </Routes>
    <Footer/>

    </BrowserRouter>
  );
}

export default App;
