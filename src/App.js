
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Coponents/Header/Sidebar';
import Form from './Coponents/Form/Form';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar/>}       />
      <Route path="/k" element={<Form />}       />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
