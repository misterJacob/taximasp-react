import React from "react";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function CustomSelect({
  style,
  label,
  options,
  onChange,
  defaultValue,
}) {
  return (
    <div style={style}>
      <h1>{label}</h1>
      <Select
        styles={customStyles}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default CustomSelect;
