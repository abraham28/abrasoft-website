import React, { ChangeEventHandler, useState } from "react";
import { FormControl, FormLabel, FormSelect } from "react-bootstrap";

interface ServiceChoicesFormProps {
  setService?: (value: string) => void;
}

const ServiceChoicesForm: React.FC<ServiceChoicesFormProps> = ({
  setService,
}) => {
  const [otherService, setOtherService] = useState("");
  const handleServiceChange: ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    {
      setService && setService(event.target.value); //Updates services option on its parent component
      setOtherService(event.target.value);
    }
  };
  return (
    <div className="mb-3">
      <FormLabel className="mb-0">Service</FormLabel>
      <FormSelect
        id="handle-other-option"
        value={otherService}
        onChange={handleServiceChange}
      >
        <option>Select service</option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Game Development">Game Development</option>
        <option value="Other">Other service type:</option>
      </FormSelect>
      {/* Create form if users choose other service type */}
      {otherService === "Other" ? (
        <FormControl
          className="my-2"
          type="text"
          placeholder="Enter other service type"
          required
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ServiceChoicesForm;
