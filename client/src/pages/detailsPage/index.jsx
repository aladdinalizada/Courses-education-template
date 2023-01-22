import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
const Details = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/details/${id}`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <h1>Details</h1>
      <div className="detailsBox">
        <div className="left">
          <img src={data.image} alt="" />
        </div>
        <div className="right">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>${data.price}</p>
          <div className="goBackBtn">
            <button onClick={() => handleBack()}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
