import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import NotFound from './component/NotFound';
import Login from './component/auth/Login';
import Register from './component/auth/Register';

import TableBuku from './component/Buku/TableBuku';
import AddBuku from './component/Buku/AddBuku';
import ShowBuku from './component/Buku/ShowBuku';
import EditBuku from './component/Buku/EditBuku';

import TableToko from './component/Toko/TableToko';
import AddToko from './component/Toko/AddToko';
import EditToko from './component/Toko/EditToko';

import TablePenulis from './component/Penulis/TablePenulis';
import AddPenulis from './component/Penulis/AddPenulis';
import EditPenulis from './component/Penulis/EditPenulis';
import DetailBukuCards from './component/Cards/DetailBukuCards';





function App() {
  return (
    <div class="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Buku */}
          <Route path="/table-buku" element={<TableBuku />} />
          <Route path="buku/add" element={<AddBuku />} />
          <Route path="/buku/show/:id" element={<ShowBuku />} />
          <Route path="/buku/edit/:id" element={<EditBuku />} />
          <Route path="/buku/:id" element={<DetailBukuCards />} />
          {/* Buku */}

          {/* Toko */}
          <Route path="/table-toko" element={<TableToko />} />
          <Route path="toko/add" element={<AddToko />} />
          <Route path="/toko/edit/:id" element={<EditToko />} />
          {/* Toko */}

          {/* penulis */}
          <Route path="/table-penulis" element={<TablePenulis/>} />
          <Route path="penulis/add" element={<AddPenulis />} />
          <Route path="/penulis/edit/:id" element={<EditPenulis />} />
          {/* penulis */}


        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
