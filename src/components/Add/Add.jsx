import { useState } from "react";
import { AddContainer, AddButton } from "./Add.style";
import AddForm from "./AddForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [inputObject, setInputObject] = useState({
    tara: "",
    oras: "",
    imagine_pachet: "",
    nr_zile_concediu: 0,
    zi_check_in: "",
    zi_check_out: "",
    nr_pers: 0,
    mod_transport: "",
    pret_sejur: 0,
    moneda_sejur: "",
  });

  const [error, setError] = useState({
    tara: undefined,
    oras: undefined,
    imagine_pachet: undefined,
    nr_zile_concediu: undefined,
    zi_check_in: undefined,
    zi_check_out: undefined,
    nr_pers: undefined,
    mod_transport: undefined,
    pret_sejur: undefined,
    moneda_sejur: undefined,
  });

  const handleChange = (e, name) => {
    setInputObject({ ...inputObject, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "tara":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "Titlu trebuie sa fie mai lung de 3 caracter",
          });
        } else if (value === "Title") {
          setError({ ...error, [name]: "titlu nepotrivit" });
          // ...error copie oniectul vechi de erori
          // [name] se refera la ["Title"]
          // ce am facut e sa copi obiectul vechi si sa ii schimb numai title cu valoarea noua
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      default:
        break;
    }
  };

  const handlesubmit = () => {
    console.log(inputObject);
    fetch(`http://localhost:3001/pachete`, {
      method: "POST",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        toast("Pachetul tau tocmai a fost modificat", {
          autoClose: 5000,
          onClose: () => {
            window.location.reload();
          },
        });
      })
      .catch((error) => {
        console.error("A aparut o eroare:", error);
        toast.error("Eroare la modificarea pachetului!");
      });
  };

  return (
    <AddContainer>
      {Object.keys(inputObject).map((el, index) => (
        <AddForm
          key={index}
          name={el}
          type={
            el === "nr_zile_concediu" || el === "nr_pers" || el === "pret_sejur"
              ? "number"
              : "text"
          }
          value={inputObject[el]}
          handleChange={handleChange}
          error={error[el]}
        />
      ))}
      <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
      <ToastContainer />
    </AddContainer>
  );
};

export default Add;
