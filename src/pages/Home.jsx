import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="container flex">
        <div className="text flex flex-column">
          <h1>Burger 06</h1>
          <h2>Delicious Hamburgers with 06 Spicy Mix</h2>
          <Link to={"/menu"} className="special-link bg-green">
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
