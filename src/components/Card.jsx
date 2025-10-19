import { useState } from "react";

const Card = () => {
  let [counter, setcounter] = useState(0);

//   Value increasing function
  const addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1);
    } else {
      ;
      alert("You have reached the maximum limit");
    }
  };
//   Value removing function
  const removeValue = () => {
    if (counter == 0) {
        alert("You have reached the minimum limit");
    } else {
      
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <h3 style={{ marginBottom: "20px" }}>Click button to see change</h3>
        <p className="idcounter">{counter}</p>
        <div className="card-body">
          <h5 className="card-title">Use State Hook</h5>
          <p className="card-text text-center">
            Increasing and Decreasing values using buttons.
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-dark" onClick={addValue}>
              Increase
            </button>
            <button className="btn btn-outline-dark" onClick={removeValue}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
