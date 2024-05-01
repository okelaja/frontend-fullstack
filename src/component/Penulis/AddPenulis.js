import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddPenulis = () => {
  const [nama, setNama] = useState("");
  const [asal, setAsal] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const savePenulis = async (e) => {
    e.preventDefault();
    try {
      if (!nama || !asal) {
        setError("Nama toko dan daerah harus diisi");
        return;
      }
      await axios.post(
        "http://localhost/FULLSTACK/backend/penulis/",
        {
          nama_penulis: nama,
          asal: asal,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/table-penulis");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="columns mt-6">
        <div className="column">
          <div className="ml-6">
            <h2 className="title">Penulis</h2>
            <h3 className="subtitle">Tambah Penulis Baru</h3>
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
            <form onSubmit={savePenulis}>
              {error && <div className="notification is-danger">{error}</div>}
              <div className="field">
                <label className="label">Nama Penulis</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Masukkan nama Penulis"
                    // value={nama_penulis}
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
                  <button type="submit" className="button is-link">
                    Submit
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

export default AddPenulis;
