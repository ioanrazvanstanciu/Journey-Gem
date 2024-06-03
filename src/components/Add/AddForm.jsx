import { AddLabel, AddInput, ErrorP } from "./Add.style";

const AddForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <AddLabel>{name.replaceAll("_", " ")}</AddLabel>
      <AddInput
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default AddForm;
