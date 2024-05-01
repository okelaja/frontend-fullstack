import React, {useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditBuku = () => {
  const [penuliss, setPenuliss] = useState([]);

  useEffect(() => {
    getPenuliss();
  }, []);

  const getPenuliss = async () => {
      try {
          const response = await axios.get("http://localhost:8888/penulis/");
          setPenuliss(response.data.produk);
          console.log(response.data);
      } catch (error) {
          console.log(error);
        }
      };

  const [tokos, setTokos] = useState([]);

  useEffect(() => {
    getTokos();
  }, []);

  const getTokos = async () => {
      try {
          const response = await axios.get("http://localhost:8888/toko/");
          setTokos(response.data.produk);
          console.log(response.data);
      } catch (error) {
          console.log(error);
        }
      };
  return (
    <Layout>
    <div className="columns mt-6">
      <div className="column">
        <div className="ml-6">
          <h2 className="title">Buku</h2>
          <h3 className="subtitle">Tambah Buku Baru</h3>
            {/* <Link to={"/table-buku"} style={{ float: "right" }}  class="mb-6">
              <button className="button is-small is-link is-light mb-4">
                <i className="fa fa-arrow-left mr-1" />
                Back
              </button>
            </Link> */}
        </div>
        <div className="notification is-primary ml-6 mr-6 mt-4">
          {/* <form onSubmit={saveToko}> */}
          <form>
            {/* {error && <div className="notification is-danger">{error}</div>} */}
            <div class="columns">
                <div class="column">
                    <div className="field">
                    <label className="label">Judul</label>
                        <div className="control">
                            <input
                            className="input"
                            type="text"
                            placeholder="Masukkan judul Buku"
                            />
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div className="field">
                    <label className="label">Harga</label>
                        <div className="control">
                            <input
                            className="input"
                            type="text"
                            placeholder="Masukkan Harga Buku"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div className="field ">
                    <label className="label">Penulis</label>
                        <div class="select is-info">
                            <select>
                                <option hidden></option>
                                <option hidden>Lorem ipsum dolor sit, amet consectetur adipisicing elit. as</option>
                                {penuliss.map((penulis, index) => (
                                  <option>{penulis.nama_penulis}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div className="field ">
                    <label className="label">Toko</label>
                        <div class="select is-info">
                            <select>
                                <option hidden></option>
                                <option hidden>Lorem ipsum dolor sit, amet consectetur adipisicing elit. as</option>
                                {tokos.map((toko, index) => (
                                  <option>{toko.nama_toko}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="field">
              <label className="label">Deskripsi</label>
              <div className="control">
                <textarea
                    class="textarea is-primary"
                    placeholder="Link textarea">
                </textarea>    
              </div>
            </div>
            <div class="file">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span class="file-cta">
                            <span class="file-icon">
                                <i class="fa fa-upload"></i>
                            </span>
                        <span class="file-label"> Choose a file… </span>
                    </span>
                </label>
            </div>
            <div className="field is-grouped mt-6">
              <div className="control">
                <button type="reset" className="button is-link is-light">Reset</button>
              </div>
              <div className="control">
                <button type="submit" className="button is-link"><i className="fa fa-refresh mr-1" />Update</button>
              </div>
            </div>
              <div className="control" style={{ float: "right" }}>
                <Link type="submit" to={"/table-buku"}  className="button is-warning"><i className="fa fa-arrow-left mr-1" />Back</Link>
              </div>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default EditBuku