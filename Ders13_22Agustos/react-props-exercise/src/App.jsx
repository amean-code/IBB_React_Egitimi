import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Duyuru from './components/Duyuru';
import Home from './components/Home'
import NoPage from './components/NoPage';
import Header from './components/Header'
import AdminHome from './components/AdminHome';

function App() {
  return (



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="duyuru" element={<Duyuru />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/admin" element={<Header />}>
          <Route index element={<AdminHome />} />

        </Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
