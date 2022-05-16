import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
      ))}
    </section>
  );
};

export default Tours;
