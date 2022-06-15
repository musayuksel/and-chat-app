import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "./firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import "../styles/form.css";

export default function Login() {
  const nameRef = useRef();
  let navigate = useNavigate();
  const ref = collection(firestore, "andi-profile");
  const [data, setData] = useState({
    name: "",
    email: "",
    andTitle: "",
    clubName: "",
    photo: "",
  });

  const saveAndi = async (e) => {
    e.preventDefault();

    try {
      addDoc(ref, data).then((response) => {
        navigate("/allandis");
      });
    } catch (error) {}
  };

  return (
    <section className="login-page">
      <article className="login-form">
        <h1 className="form-title">AND TITLE</h1>
        <p className="form-sub-title">Share your AND title</p>
        <form name="loginForm" onSubmit={saveAndi}>
          <div className="field-container">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input-field"
              ref={nameRef}
              value={data.name}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  name: event.target.value,
                }));
              }}
              required
            ></input>
          </div>

          <div className="field-container">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-field"
              value={data.email}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }));
              }}
              required
            ></input>
          </div>

          <div className="field-container">
            <label htmlFor="andTitle" className="input-label">
              AND title
            </label>
            <input
              type="text"
              name="andTitle"
              id="andTitle"
              className="input-field"
              value={data.andTitle}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  andTitle: event.target.value,
                }));
              }}
              required
            ></input>
          </div>

          <div className="field-container">
            <label htmlFor="clubName" className="input-label">
              Club name
            </label>
            <select
              name="clubName"
              id="clubName"
              className="input-field"
              value={data.clubName}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  clubName: event.target.value,
                }));
              }}
              required
            >
              <option value="Aletta">Aletta</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Bristol">Bristol</option>
              <option value="Kilburn">Kilburn</option>
              <option value="Jemison">Jemison</option>
            </select>
          </div>

          <div className="field-container">
            <label htmlFor="avatar" className="input-label">
              Share photo url
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="input-field"
              value={data.photo}
              required
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  photo: event.target.value,
                }));
              }}
            />
          </div>

          <button type="submit" className="btn submit-btn">
            SUBMIT
          </button>
        </form>
      </article>

      <a href="/allandis" className="form-link">
        skip for now
      </a>
    </section>
  );
}
