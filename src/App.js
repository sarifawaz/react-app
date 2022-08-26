import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Categories from './components/Categories';
import Pages from './pages/Pages';
import Search from './components/Search';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
