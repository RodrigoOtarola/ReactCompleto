import PropTypes from "prop-types";
//importar hooks useState.
import { useState } from "react";

export const CounterApp = ({ value }) => {

    //Uso de hook, se olocan dos porque el primero es constante y no se puede
    //modificar.
    const [counter,setCounter]=useState(0);

  //Se llama desde función onClick del button y para retornar valor.
  const handleAdd = () => {
    //console.log(event);
    //console.log(newValue);

    setCounter(counter + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button
        onClick={handleAdd}
      >
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
