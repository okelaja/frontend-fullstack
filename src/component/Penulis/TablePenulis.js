import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";

const TablePenulis = () => {

  const [penuliss, setPenuliss] = useState([]);

  useEffect(() => {
    getPenuliss();
  }, []);

  const getPenuliss = async () => {
    try {
      const response = await axios.get("http://localhost:8888/penulis/");
      setPenuliss(response.data.produk);
    } catch (error) {
      console.log(error);
    }
  };

  const deletepenulis = async (id) => {
    await axios.delete(`http://localhost:8888/penulis/${id}`);
    getPenuliss();
  };

  return (
     <Layout>
      <div class="columns mt-6">
        <div class="column is-7">
          <div class="ml-6">
            <h2 className="title">Penulis</h2>
            <h3 class="subtitle">Tabel Penulis</h3>
            <Link to={"/penulis/add"}>
              <button class="button"><i className="fa fa-plus-circle mr-1" />Tambah</button>
            </Link>
          </div>
          <div class="notification is-primary ml-6 mr-6 mt-4">
          <Table striped bordered hover class=" mt-3 table is-bordered " style={{ borderRadius: '5px' }}>
            <thead>
             <tr>
               <th>No</th>
               <th>Nama Penulis</th>
               <th>Daerah</th>
               <th></th>
               <th>Action</th>
               <th></th>
             </tr>
           </thead>
           {penuliss.map((penulis, index) => (
               <tbody key={penulis.id}>
                  <tr>
                 <td>{index + 1}</td>
                 <td>{penulis.nama_penulis}</td>
                 <td>{penulis.asal}</td>
                 <td></td>
                  <td>
                    <div className="is-flex is-justify-content-space-between">
                    <Link
                      className="button is-small is-info mr-2"
                      to={`/penulis/edit/${penulis.id}`}
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                    <button
                      onClick={() => deletepenulis(penulis.id)}
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

export default TablePenulis