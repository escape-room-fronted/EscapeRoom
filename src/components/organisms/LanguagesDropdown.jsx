import React from "react";
import Select from "react-select";
import { customStyles, languageOptions } from "../../Helpers/helpers";

const LanguagesDropdown = ({ handleLanguajeChange }) => {
  return (
    <Select
      placeholder={`Filtrar por Tema`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => handleLanguajeChange(selectedOption)}
    />
  );
};
export default LanguagesDropdown;
