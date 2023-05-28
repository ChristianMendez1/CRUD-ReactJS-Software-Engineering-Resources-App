import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Resources from './components/Resources';
import Resource from './components/Resource';

function App() {
  return (
    <div className="App">
      Software Engineering Resources
      <Router>
        <Routes>
          <Route path='/' element={<Resources />}/>
          <Route path='/:id' element={<Resource />}/>
          {/* <Route path='/:id/edit' element={<EditResource />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
