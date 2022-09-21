import './App.css';
import Header from './components/Header';
import TableItem from './components/TableItem/TableItem';

function App() {
  return (
    <div className="App">
      <table className='table_container'>
        <Header />
        <TableItem />
      </table>
    </div>
  );
}

export default App;
