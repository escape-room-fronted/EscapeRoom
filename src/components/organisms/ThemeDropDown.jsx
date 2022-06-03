import React from "react";
import Select from "react-select";
import { customStyles, languageOptions } from "../../Helpers/helpers";
import { monacoThemes } from "../../Helpers/monacoThemes";

const ThemeDropDown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Filtrar por Tema`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        id: themeId,
      }))}
      styles={customStyles}
      onChange={(selectedOption) => handleThemeChange(selectedOption.value)}
    />
  );
};

export default ThemeDropDown;
