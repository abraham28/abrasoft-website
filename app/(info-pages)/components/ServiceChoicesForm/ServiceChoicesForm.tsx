import React, { useState } from "react";
import { FormControl, FormLabel, FormSelect } from "react-bootstrap";

const ServiceChoicesForm = () => {
  const [options, setOptions] = useState("");

  const handleOptions = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setOptions(event.target.value);
  return (
    <div className="mb-3">
      <FormLabel className="mb-0">Service</FormLabel>
      <FormSelect
        id="handle-other-option"
        value={options}
        onChange={handleOptions}
      >
        <option>Select service</option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Game Development">Game Development</option>
        <option value="Other">Other:</option>
      </FormSelect>
      {options === "Other" ? (
        <FormControl
          className="my-2"
          type="text"
          placeholder="Enter other service"
          required
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ServiceChoicesForm;