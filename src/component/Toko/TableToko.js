import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";


const TableToko = () => {

  const [tokos, setTokos] = useState([]);

  useEffect(() => {
    getTokos();
  }, []);

  const getTokos = async () => {
    try {
      const response = await axios.get("http://localhost:8888/toko/");
      setTokos(response.data.produk);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToko = async (id) => {
    await axios.delete(`http://localhost:8888/toko/${id}`);
    getTokos();
  };


  return (
    <Layout>
      <div class="columns mt-6">
        <div class="column is-7">
          <div class="ml-6">
            <h2 className="title">Toko</h2>
            <h3 class="subtitle">Tabel Toko</h3>
            <Link to={"/toko/add"}>
              <button class="button"><i className="fa fa-plus-circle mr-1" />Tambah</button>
            </Link>
          </div>
          <div class="notification is-primary ml-6 mr-6 mt-4">
          <Table striped bordered hover class="mt-3 table is-bordered is-striped is-narrow is-hoverable is-fullwidth" style={{ borderRadius: '5px' }}>
            <thead>
             <tr>
               <th>No</th>
               <th>Nama Toko</th>
               <th>Nama Kota</th>
               <th></th>
               <th>Action</th>
               <th></th>
             </tr>
           </thead>
           {tokos.map((tokos, index) => (
               <tbody key={tokos.id}>
                  <tr>
                 <td>{index + 1}</td>
                 <td>{tokos.nama_toko}</td>
                 <td>{tokos.daerah}</td>
                 <td></td>
                  <td>
                    <div className="is-flex is-justify-content-space-between">
                    <Link
                      className="button is-small is-info mr-2"
                      to={`/toko/edit/${tokos.id}`}
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                    <button
                      onClick={() => deleteToko(tokos.id)}
                      className="button is-small is-danger mr-2"
                    >
                      <i className="fa fa-trash" />
                    </button>
                    </div>
                  </td>
                  <td></td>
               </tr>
               </tbody>
           ))}
          </Table>
          </div>   
        </div>
      </div>
    </Layout>
  )
}

export default TableToko