import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import sampul from "../../image/Bumi-Manusia-1.jpg";

const TableBuku = () => {
  const [bukus, setBukus] = useState([]);

  useEffect(() => {
    getBukus();
  }, []);

  const getBukus = async () => {
    try {
      const response = await axios.get("http://localhost:8888/buku/");
      setBukus(response.data.produk);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div class="columns mt-6">
        <div class="column">
          <div class="ml-6">
            <h2 className="title">Buku</h2>
            <h3 class="subtitle">Tabel Buku</h3>
            <Link to={"/buku/add"}>
              <button class="button">
                <i className="fa fa-plus-circle mr-1" />
                Tambah
              </button>
            </Link>
          </div>
          <div class="notification is-primary ml-6 mr-6 mt-4">
            <Table
              striped
              bordered
              hover
              class="mt-3 table "
              style={{ borderRadius: "5px" }}
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th></th>
                  <th>action</th>
                </tr>
              </thead>
              {bukus.map((buku, index) => (
                <tbody key={buku.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{buku.judul}</td>
                    <td>
                      {buku.deskripsi.substring(0, 150)}
                      {buku.deskripsi.length > 150 ? "..." : ""}
                    </td>
                    <td>{buku.harga}</td>
                    <td></td>
                    {/* <figure class="image is-64x64">
                          <img class="" src={sampul} />
                        </figure> */}
                    <td className="">
                      <div className="is-flex is-justify-content-space-between">
                        <Link
                          className="button is-small is-info mr-2"
                          to={`/buku/edit/${buku.id}`}
                        >
                          <i className="fa fa-pencil" />
                        </Link>
                        <button
                          // onClick={() => deletebuku(buku.id)}
                          className="button is-small is-danger mr-2"
                        >
                          <i className="fa fa-trash" />
                        </button>
                        <Link
                          className="button is-small is-link mr-2"
                          to={`/buku/show/${buku.id}`}
                        >
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TableBuku;
