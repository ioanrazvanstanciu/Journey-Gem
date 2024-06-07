import { useState } from 'react';
import { AddLabel, AddInput, ErrorP, ExclamationErrorIcon, StyledDatePicker } from './Add.style';

const formatLabel = (str) => {
  const customMappings = {
    nr: 'Numar',
    zile: 'Zile',
    pers: 'Persoane',
    pret: 'Preț',
    sejur: 'Sejur',
    moneda: 'Moneda',
    imagine: 'Imagine',
    mod: 'Mod',
    transport: 'Transport',
    check: 'Check',
    in: 'In',
    out: 'Out'
  };

  return str
    .split('_')
    .map((word) =>
      customMappings[word]
        ? customMappings[word]
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
};

export const AddForm = ({ name, handleChange, type, value, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div style={{ position: 'relative', width: '100%' , left: '25%' }}>
        <AddInput
          placeholder=""
          defaultValue={value}
          onBlur={(e) => {
            handleChange(e, name);
            setIsFocused(false);
          }}
          type={type}
          onFocus={() => setIsFocused(true)}
        />
        <AddLabel isfocused={isFocused ? isFocused.toString() : undefined} hasvalue={value ? value : undefined}>
          {formatLabel(name)}
        </AddLabel>
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

export const AddFormDatePicker = ({ name, error, handleChange, selected }) => {
  return (
    <>
      <div style={{ position: 'relative', width: '100%' , left:'25%'}}>
        <StyledDatePicker
          placeholderText=""
          selected={selected}
          onChange={(date) => handleChange(date, name)}
        />
        <AddLabel hasvalue={selected ? selected : undefined}>{formatLabel(name)}</AddLabel>
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