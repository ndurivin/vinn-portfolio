import React, { useState } from "react";
import "./faqs.css";
import SingleQuery from "./SingleQuery";
import data from "./data";

const FAQS = (props) => {
  // const [data, setData] = useState(data);
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>Get all the answers to your questions answered by the click.</p>
      <div className="container faq__container">
        {data.map((item) => {
          return <SingleQuery key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FAQS;
