import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Resources from './components/Resources';
import Resource from './components/Resource';
import EditResource from './components/EditResource';

function App() {
  return (
    <div className="App">
      Software Engineering Resources
      <Router>
        <Routes>
          <Route path='/' element={<Resources />}/>
          <Route path='/:id' element={<Resource />}/>
          <Route path='/:id/edit' element={<EditResource />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
