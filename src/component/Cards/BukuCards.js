import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../Cards/Cards.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

const BukuCards = () => {
  const [bukus, setBukus] = useState([]);

  useEffect(() => {
    getBukus();
  }, []);

  const getBukus = async () => {
    try {
      const response = await axios.get("http://localhost:8888/buku/");
      setBukus(response.data.produk);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <NavLink to={`/buku/${bukus.id}`}>
      {/* <NavLink > */}
      <div class="grid mr-6 ml-6">
        {bukus.map((buku, index) => (
          <div class="card mt-5" sm={6} md={4} lg={3} key={index}>
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://picsum.photos/300/200"
                  alt="Placeholder image"
                  style={{ borderRadius: "5px" }}
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-7">{buku.penulis_id}</p>
                  <p class="subtitle is-6">{buku.judul}</p>
                  <p class="has-text-link title is-5 mt-1 ">Rp. {buku.harga}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </NavLink>
  );
};

export default BukuCards;
