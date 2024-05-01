import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditPenulis = () => {
  const [nama, setNama] = useState("");
  const [asal, setAsal] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate();

  const getPenulisById = async (id) => {
    const response = await axios.get(`http://localhost:8888/penulis/${id}`);
    setNama(response.data.nama_penulis);
    setAsal(response.data.asal);
    setLoading(false);
  };

  const updatePenulis = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:8888/penulis/${id}`, {
        nama_penulis: nama,
        asal,
      });
      navigate("/table-penulis");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPenulisById(id);
  }, [id]);

  return (
    <Layout>
      <div className="columns mt-6">
        <div className="column">
          <div className="ml-6">
            <h2 className="title">Penulis</h2>
            <h3 className="subtitle">Edit Penulis</h3>
          </div>
          <div className="notification is-primary ml-6 mr-6 mt-4">
            <div style={{ float: "right" }}>
              <Link to={"/table-penulis"}>
                <button className="button is-small is-link is-light mb-4">
                  <i className="fa fa-arrow-left mr-1" />
                  Back
                </button>
              </Link>
            </div>
            <form onSubmit={updatePenulis}>
              {loading && (
                <div className="loading">
                  <div className="loader"></div>
                </div>
              )}
              <div className="field">
                <label className="label">Nama Penulis</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Masukkan nama Penulis"
                    name="nama_penulis"
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
                    name="asal"
                    value={asal}
                    onChange={(e) => setAsal(e.target.value)}
                  />
                </div>
              </div>
              <div className="field is-grouped mt-6">
                <div className="control">
                  <button type="reset" className="button is-link is-light">
                    Reset
                  </button>
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

export default EditPenulis;
