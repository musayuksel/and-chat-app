import React, { useState, useEffect } from "react";
import Card from "./Card";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "./firebaseConfig";

export default function AllAndis() {
  const [club, setClub] = useState("");
  const [andisList, setAndisList] = useState([]);
  const querySnapShot = async () => {
    const response = await getDocs(collection(firestore, "andi-profile"));
    const andis = [];
    response.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      andis.push({ ...doc.data(), id: doc.id });
    });
    setAndisList(andis);
  };
  useEffect(() => {
    querySnapShot();
  }, []);

  const andisListItems = andisList
    .filter((andi) => andi.clubName.includes(club))
    .map((andi) => (
      <Card
        key={andi.id}
        name={andi.name}
        email={andi.email}
        title={andi.andTitle}
        clubName={andi.clubName}
        imgLink={andi.photo}
        //   imgLink="https://picsum.photos/200"
      />
    ));

  return (
    <section className="gallery-page">
      <h1 className="card-gallery-heading">Get to know your fellow ANDis</h1>
      <select
        onChange={(e) => {
          setClub(e.target.value);
        }}
        className="club-select-menu"
        value={club}
      >
        <option value="">All ANDis</option>
        <option value="Aletta">Aletta</option>
        <option value="Birmingham">Birmingham</option>
        <option value="Bristol">Bristol</option>
        <option value="Kilburn">Kilburn</option>
        <option value="Jemison">Jemison</option>
      </select>
      <section className="card-gallery">{andisListItems}</section>
    </section>
  );
}
