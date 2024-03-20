import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const CustomSelect = ({ options, onChange, id, labelsvalue }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: labelsvalue,
    value: null,
  });

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsActive(false);
    onChange(option.value);
  };

  return (
    <div className={`custom-select ${isActive ? "active" : ""}`}>
      <button
        id={id}
        className="select-button"
        role="combobox"
        aria-labelledby={`${id}-label`}
        aria-haspopup="listbox"
        aria-expanded={isActive ? "true" : "false"}
        aria-controls={`${id}-dropdown`}
        onClick={toggleDropdown}
      >
        <span className="selected-value">{selectedOption.label}</span>
        <span className="arrow"></span>
      </button>

      <ul className="select-dropdown" role="listbox" id={`${id}-dropdown`}>
        {options.map((option, index) => (
          <li
            key={index}
            role="option"
            onClick={() => handleOptionSelect(option)}
          >
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labelsvalue: PropTypes.string.isRequired,
};

export default CustomSelect;
