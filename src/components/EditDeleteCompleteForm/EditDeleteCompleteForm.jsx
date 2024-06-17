import { useState, useEffect } from "react";
import {
  GlobalStyles,
  EditButton,
  EditContainer,
  DeletePackageButton,
  ButtonsContainer,
  ModalDeleteContainer , 
  ModalDeleteButton , 
  ModalDeleteMessage , 
  ModalDeleteCancel,
  ModalOverlay
} from "./EditDeleteCompleteForm.style";
import {
  EditForm,
  EditFormDatePicker,
} from "./EditDeleteCompleteFormHandleForm";
import { useParams } from "react-router-dom";
import useFetchPackages from "./../../hooks/useFetchPackage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const formatMyDate = (my_date_as_string) => {
  if (!my_date_as_string) return null;

  let parti = my_date_as_string.split(".");
  let my_new_date = "" + parti[1] + "." + parti[0] + "." + parti[2];

  return my_new_date;
};

const EditDeleteCompleteForm = () => {
  const { id } = useParams();
  const {
    packages: my_package,
    error: errorGetData,
    loading,
  } = useFetchPackages("/" + id);

  let pachet_de_lucru = {
    tara: my_package.tara,
    oras: my_package.oras,
    imagine_pachet: my_package.imagine_pachet,
    nr_zile_concediu: my_package.nr_zile_concediu,
    zi_check_in: formatMyDate(my_package.zi_check_in),
    zi_check_out: formatMyDate(my_package.zi_check_out),
    nr_pers: my_package.nr_pers,
    mod_transport: my_package.mod_transport,
    pret_sejur: my_package.pret_sejur,
    moneda_sejur: my_package.moneda_sejur,
  };

  const [ziCheckIn, setZiCheckIn] = useState(new Date());
  const [ziCheckOut, setZiCheckOut] = useState(new Date());
  const [inputObject, setInputObject] = useState({
    ...pachet_de_lucru,
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChange = (e, name) => {
    setInputObject({ ...inputObject, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleDateChange = (value, name) => {
    const formattedDate = value.toLocaleDateString("ro-RO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
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
          { autoClose: 2500 }
        );
      } else {
        toast.error("Toate câmpurile trebuie completate!", { autoClose: 2500 });
      }
      return;
    }
    fetch(`http://localhost:3001/pachete/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...inputObject,
        este_rezervat: 0,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast("Pachetul tau tocmai a fost modificat!", {
            autoClose: 2500,
            onClose: () => {
              window.location.href = "/all-packages";
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
  };
  
  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };
  const handleDeletePackage = () => {
    fetch(`http://localhost:3001/pachete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          toast("Pachetul tau tocmai a fost sters!", {
            autoClose: 2500,
            onClose: () => {
              window.location.href = "/all-packages";
            },
          });
          setShowDeleteModal(false);
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("A aparut o eroare:", error);
        toast.error("Eroare la stergerea pachetului!");
      });

  }
  useEffect(() => {
    if (my_package) {
      const checkInDate = new Date(pachet_de_lucru.zi_check_in);
      const checkOutDate = new Date(pachet_de_lucru.zi_check_out);
      setInputObject({ ...pachet_de_lucru });
      setZiCheckIn(isNaN(checkInDate) ? null : checkInDate);
      setZiCheckOut(isNaN(checkOutDate) ? null : checkOutDate);
    }
  }, [my_package]);

  return (
    <EditContainer>
      <GlobalStyles />
      {Object.keys(inputObject)
        .filter((el) => el !== "id")
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
            <ButtonsContainer>
            <EditButton onClick={handleSubmit}>Modify package</EditButton>
            <DeletePackageButton onClick={handleDeleteModal}>Delete Package</DeletePackageButton>
            </ButtonsContainer>
        
            {showDeleteModal && (
              <ModalOverlay>
          <ModalDeleteContainer>
            <ModalDeleteMessage>
              Are you sure you want to delete this package?
            </ModalDeleteMessage>
            <ModalDeleteButton onClick={handleDeletePackage}>Delete</ModalDeleteButton>
            <ModalDeleteCancel onClick={() => setShowDeleteModal(false)}>Cancel</ModalDeleteCancel>
          </ModalDeleteContainer>
          </ModalOverlay>
      )}
      <ToastContainer />
    </EditContainer>
  );
};

export default EditDeleteCompleteForm;
