import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import data from "./data";
import Card from "../../components/Card";
import "./faqs.css";

const FAQS = () => {
  const [faq, setFaq] = useState(data);
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>Get all the answers to your questions answered by the click.</p>
      <div className="container faq__container">
        {data.map((item) => (
          <Card key={item.id} className="faq light">
            {/* <div className="service__icon">{item.icon}</div> */}
            <div className="faq__details">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
