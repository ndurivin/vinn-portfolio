import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Card from "../../components/Card";

const SingleQuery = ({ question, answer }) => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="container sq__container">
      <Card className="sq white">
        <div className="sq__details">
          <h4>{question}</h4>
          <span>
            <button onClick={() => setShowData(!showData)}>
              {showData ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </span>
        </div>
        <p>{showData && <p>{answer}</p>}</p>
      </Card>
    </div>
  );
};

export default SingleQuery;
