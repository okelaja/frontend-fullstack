import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";

const AddToko = () => {
  const [namaToko, setNamaToko] = useState("");
  const [daerah, setDaerah] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // const history = useHistory();

  const saveToko = async (e) => {
    e.preventDefault();
    try {
      if (!namaToko ||!daerah) {
        setError("Nama toko dan daerah harus diisi");
        return;
      }

      const response = await axios.post("http://localhost/FULLSTACK/backend/toko/create.php", {
        nama_toko: namaToko,
        daerah: daerah,
      });

      if (response.status === 201) {
        setNamaToko("");
        setDaerah("");
        setError(null);
        // history.push("/table-toko");
      } else {
        setError("Terjadi kesalahan. Silakan coba lagi.");
      }
      navigate("/table-toko"); 

    } catch (error) {
      console.log("Error:", error);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <Layout>
      <div className="columns mt-6">
        <div className="column">
          <div className="ml-6">
            <h2 className="title">Toko</h2>
            <h3 className="subtitle">Tambah Toko Baru</h3>
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
            <form onSubmit={saveToko}>
              {error && <div className="notification is-danger">{error}</div>}
              <div className="field">
                <label className="label">Nama Toko</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Masukkan nama Toko"
                    value={namaToko}
                    onChange={(e) => setNamaToko(e.target.value)}
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
                  <button type="submit" className="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddToko;