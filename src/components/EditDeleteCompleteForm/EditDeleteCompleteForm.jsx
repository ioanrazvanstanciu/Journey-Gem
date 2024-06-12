import { useState, useEffect } from "react";
import { GlobalStyles, EditButton , EditContainer } from "./EditDeleteCompleteForm.style";
import {EditForm , EditFormDatePicker} from "./EditDeleteCompleteFormHandleForm";
import { useParams  } from "react-router-dom";
import useFetchPackages from "./../../hooks/useFetchPackage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditDeleteCompleteForm = () => {
  const { id } = useParams();
  const {
    packages: my_package,
    error: errorGetData,
    loading,
  } = useFetchPackages("/" + id);

  const [ziCheckIn, setZiCheckIn] = useState(new Date());
  const [ziCheckOut, setZiCheckOut] = useState(new Date());
  const [inputObject, setInputObject] = useState({
    tara: "",
    oras: "",
    imagine_pachet: "",
    nr_zile_concediu: 0,
    zi_check_in: null,
    zi_check_out: null,
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
    setInputObject({ ...inputObject, [name]: e.target.value});
    handleError(e.target.value, name);
    console.log("handle change" , e.target.value , name)
  };

  const handleDateChange = (value, name) => {
    const formattedDate = value.toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setInputObject({ ...inputObject, [name]: formattedDate });
    handleError(formattedDate, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "tara":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "Numele tarii trebuie sa fie mai lung de 3 caractere",
          });
        } else if (value === "Title") {
          setError({ ...error, [name]: "titlu nepotrivit" });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "oras":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "Numele orașului trebuie să fie mai lung de 3 caractere",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "imagine_pachet":
        if (!value) {
          setError({
            ...error,
            [name]: "Trebuie să încărcați o imagine",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "nr_zile_concediu":
        if (value <= 0) {
          setError({
            ...error,
            [name]:
              "Numărul de zile de concediu trebuie să fie mai mare decât 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "zi_check_in":
      case "zi_check_out":
        if (!value) {
          setError({
            ...error,
            [name]: `Trebuie să selectați o zi de ${
              name === "zi_check_in" ? "check-in" : "check-out"
            }`,
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "nr_pers":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "Numărul de persoane trebuie să fie mai mare decât 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "mod_transport":
        if (!value) {
          setError({
            ...error,
            [name]: "Trebuie să precizati un mod de transport",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "pret_sejur":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "Prețul sejurului trebuie să fie mai mare decât 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "moneda_sejur":
        if (!value) {
          setError({
            ...error,
            [name]: "Trebuie să selectați o monedă pentru sejur",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      default:
        break;
    }
  };
  const hasErrors = (errors) => {
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== undefined
    );
    const allInputsEmpty = Object.values(inputObject).some(
      (value) => value === "" || value === 0 || value === null
    );
    return hasValidationErrors || allInputsEmpty;
  };
  const handleSubmit = () => {
    if (hasErrors(error)) {
      if (Object.values(error).some((error) => error !== undefined)) {
        toast.error(
          "Nu poți trimite formularul până când toate erorile sunt rezolvate!",
          { autoClose: 5000 }
        );
      } else {
        toast.error("Toate câmpurile trebuie completate!", { autoClose: 5000 });
      }
      return;
    }
    fetch(`http://localhost:3001/pachete/${id}`, {
      method: "PUT",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast("Pachetul tau tocmai a fost modificat!", {
            autoClose: 1500,
            onClose: () => {
              window.location.href = "/edit-or-delete";
             },
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("A aparut o eroare:", error);
        toast.error("Eroare la modificarea pachetului!");
      });
      console.log(inputObject);
  };

  useEffect(() => {
    if (my_package) {
      const checkInDate = new Date(my_package.zi_check_in);
      const checkOutDate = new Date(my_package.zi_check_out);
      setInputObject({ ...my_package });
      setZiCheckIn(isNaN(checkInDate) ? null : checkInDate);
      setZiCheckOut(isNaN(checkOutDate) ? null : checkOutDate);
      console.log("use effect" , my_package , checkInDate , checkOutDate);
    }
  }, [my_package]);

  return (
    <EditContainer>
      <GlobalStyles />
      {Object.keys(inputObject)
        .filter((el) => el !== 'id')
        .map((el, index) => {
          if (el === "zi_check_in" || el === "zi_check_out") {
            return (
            <EditFormDatePicker
              key={index}
              name={el}
              selected={el === "zi_check_in" ? ziCheckIn : ziCheckOut}
              handleChange={(date) => {
                if (el === "zi_check_in") {
                  setZiCheckIn(date);
                } else {
                  setZiCheckOut(date);
                }
                handleDateChange(date, el);
              }}
              error={error[el]}
            />
          );
        } else {
          return (
            <EditForm
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
          );
        }
      })}
      <EditButton onClick={handleSubmit}>Submit</EditButton>
      <ToastContainer />
    </EditContainer>
  );
  };

export default EditDeleteCompleteForm;
