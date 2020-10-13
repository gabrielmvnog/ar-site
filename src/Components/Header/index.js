import React from "react";

export default function Header() {
  return (
    <section className="section-dark-gradient">
      <img
        alt="brasilia"
        style={{ width: 100 + "%" }}
        src={process.env.PUBLIC_URL + "/brasilia.jpg"}
      ></img>
    </section>
  );
}
