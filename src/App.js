
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Coponents/Header/Sidebar';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar/>}       />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
