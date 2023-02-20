import React, { useState } from "react";
import "./faqs.css";
import SingleQuery from "./SingleQuery";
import data from "./data";
import Card from "../../components/Card";

const FAQS = (props) => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>Get all the answers to your questions answered by the click.</p>
      <Card>
        <div className="container faq__container">
          {data.map((item) => {
            return <SingleQuery key={item.id} {...item} />;
          })}
        </div>
      </Card>
    </section>
  );
};

export default FAQS;
