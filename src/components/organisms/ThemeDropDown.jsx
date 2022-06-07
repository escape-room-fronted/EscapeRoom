import React from "react";
import Select from "react-select";
import { customStyles, languageOptions } from "../../Helpers/helpers";

const themesOptions = [
  { id: 1, name: "vs-dark", label: "vs-dark", value: "vs-dark" },
  {
    id: 2,
    name: "light",
    label: "light",
    value: "light",
  },
];

const ThemeDropDown = ({ handleThemeChange }) => {
  return (
    <Select
      placeholder={`Filtrar por Tema`}
      options={themesOptions}
      styles={customStyles}
      onChange={(selectedOption) => handleThemeChange(selectedOption.value)}
    />
  );
};

export default ThemeDropDown;
