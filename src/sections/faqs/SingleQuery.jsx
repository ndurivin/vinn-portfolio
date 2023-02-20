import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Card from "../../components/Card";
import "./singlequery.css";

const SingleQuery = ({ question, answer }) => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="container sq__container">
      <Card className="sq light">
        <div className="sq__details">
          <h4>{question}</h4>
          <button onClick={() => setShowData(!showData)}>
            {showData ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        <p>{showData && <p>{answer}</p>}</p>
      </Card>
    </div>
  );
};

export default SingleQuery;
