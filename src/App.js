import './App.css';
import { Table } from './components/Table/Table';
import { SinglePage } from './components/SinglePage/SinglePage';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='project/:id' element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
