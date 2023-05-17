import './App.css';
import AppBody from './component/AppBody';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import News from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Header title="Word Counter Website" about= 'Latest News' />
      <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/" element={<AppBody />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
