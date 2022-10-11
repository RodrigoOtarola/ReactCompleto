import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    //Validación para de input, trim es para eliminar espacios adelante y atras.
    if (inputValue.trim().length <= 1) return;

    //console.log(inputValue);
    //setCategories((categories) => [inputValue, ...categories]);

    onNewCategory(inputValue.trim());

    //Post insertar volver el input a vacio
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
