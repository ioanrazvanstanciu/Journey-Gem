import { useState } from "react";
import {
  EditLabel,
  EditInput,
  ErrorP,
  ExclamationErrorIcon,
  StyledDatePicker,
} from "./EditDeleteCompleteForm.style";

const formatLabel = (str) => {
  const customMappings = {
    nr: "Numar",
    zile: "Zile",
    pers: "Persoane",
    pret: "Preț",
    sejur: "Sejur",
    moneda: "Moneda",
    imagine: "Imagine",
    mod: "Mod",
    transport: "Transport",
    check: "Check",
    in: "In",
    out: "Out",
  };

  return str
    .split("_")
    .map((word) =>
      customMappings[word]
        ? customMappings[word]
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
};

export const EditForm = ({ name, handleChange, type, value, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div style={{ position: "relative", width: "100%", left: "25%" }}>
        <EditInput
          placeholder=""
          defaultValue={value}
          onBlur={(e) => {
            handleChange(e, name);
            setIsFocused(false);
          }}
          type={type}
          onFocus={() => setIsFocused(true)}
        />
        <EditLabel
          isfocused={isFocused ? isFocused.toString() : undefined}
          hasvalue={value ? value : undefined}
        >
          {formatLabel(name)}
        </EditLabel>
      </div>
      {error && (
        <ErrorP>
          <ExclamationErrorIcon />
          {error}
        </ErrorP>
      )}
    </>
  );
};

export const EditFormDatePicker = ({ name, error, handleChange, selected }) => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", left: "25%" }}>
        <StyledDatePicker
          dateFormat={"dd.MM.yyyy"}
          placeholderText=""
          selected={selected}
          onChange={(date) => handleChange(date, name)}
        />
        <EditLabel hasvalue={selected ? selected : undefined}>
          {formatLabel(name)}
        </EditLabel>
      </div>
      {error && (
        <ErrorP>
          <ExclamationErrorIcon />
          {error}
        </ErrorP>
      )}
    </>
  );
};
