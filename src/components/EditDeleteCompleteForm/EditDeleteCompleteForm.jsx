import { useState, useEffect } from "react";
import { AddContainer, AddButton } from "./EditDeleteCompleteForm.style";
import EditDeleteCompleteFormHandleForm from "./EditDeleteCompleteFormHandleForm";
import { useParams } from "react-router-dom";
import useFetchPackages from "./../../hooks/useFetchPackage";

const EditDeleteCompleteForm = () => {
  const { id } = useParams();
  const {
    packages: my_package,
    error: errorGetData,
    loading,
  } = useFetchPackages("/" + id);

  const [inputObject, setInputObject] = useState(null);

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
      case "Tara":
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
    fetch(`http://localhost:3001/pachete/${id}`, {
      method: "PUT",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (my_package) setInputObject(my_package);
  }, [my_package]);

  return (
    <AddContainer>
      {inputObject &&
        Object.keys(inputObject).map((el, index) => (
          <EditDeleteCompleteFormHandleForm
            key={index}
            name={el}
            type={
              el === "nr_zile_concediu" ||
              el === "nr_pers" ||
              el === "pret_sejur"
                ? "number"
                : "text"
            }
            value={inputObject[el]}
            handleChange={handleChange}
            error={error[el]}
          />
        ))}
      {loading && <div>Loading...</div>}
      {!errorGetData && (
        <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
      )}
      {errorGetData && <p>{errorGetData}</p>}
    </AddContainer>
  );
};

export default EditDeleteCompleteForm;
