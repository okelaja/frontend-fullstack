import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditToko = () => {
  const [nama, setNama] = useState("");
  const [daerah, setDaerah] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate();

  const getTokoById = async (id) => {
    const response = await axios.get(`http://localhost:8888/toko/${id}`);
    setNama(response.data.nama_toko);
    setDaerah(response.data.daerah);
    setLoading(false);
  };

  const updateToko = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:8888/toko/${id}`, {
        nama_toko: nama,
        daerah,
      });
      navigate("/table-toko");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTokoById(id);
  }, [id]);

  return (
    <Layout>
      <div className="columns mt-6">
        <div className="column">
          <div className="ml-6">
            <h2 className="title">Toko</h2>
            <h3 className="subtitle">Edit Toko</h3>
          </div>
          <div className="notification is-primary ml-6 mr-6 mt-4">
            <div style={{ float: "right" }}>
              <Link to={"/table-toko"}>
                <button className="button is-small is-link is-light mb-4">
                  <i className="fa fa-arrow-left mr-1" />
                  Back
                </button>
              </Link>
            </div>
            <form onSubmit={updateToko}>
              {/* {error && <div className="notification is-danger">{error}</div>} */}
              <div className="field">
                <label className="label">Nama Toko</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Masukkan nama Toko"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Asal Daerah</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Masukkan Nama daerah"
                    value={daerah}
                    onChange={(e) => setDaerah(e.target.value)}
                  />
                </div>
              </div>
              <div className="field is-grouped mt-6">
                <div className="control">
                  <button type="reset" className="button is-link is-light">Reset</button>
                </div>
                <div className="control">
                  <button
                    type="submit"
                    className="button is-link"
                    disabled={loading}
                  ><i className="fa fa-refresh mr-1" />
                    {loading ? "Loading..." : "Update"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditToko;