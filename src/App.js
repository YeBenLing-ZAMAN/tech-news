import './App.css';
import { Route,  Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <h1>
        this is patla khan
      </h1>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
