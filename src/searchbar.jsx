import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const MultiSelectSearch = ({ options, onSearch }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const animatedComponents = makeAnimated();
  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    const selectedValues = selectedOptions.map(option => option.value);
    onSearch(selectedValues);
    console.log(selectedOptions);
  };

  return (
    <Select
    theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'yellow',
          primary: 'black',
        },
      })}
      isMulti
      components={animatedComponents}
      options={options}
      value={selectedOptions}
      onChange={handleSelectChange}
      placeholder="Search"
    />
  );
};

export default MultiSelectSearch;
