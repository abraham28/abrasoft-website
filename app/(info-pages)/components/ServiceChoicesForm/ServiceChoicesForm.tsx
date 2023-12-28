import React, { ChangeEventHandler, useState } from "react";
import { FormControl, FormLabel, FormSelect } from "react-bootstrap";

interface ServiceChoicesFormProps {
  setService?: (value: string) => void;
  value: string;
  handleOtherServiceChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  isInvalid: boolean;
}

const ServiceChoicesForm: React.FC<ServiceChoicesFormProps> = ({
  setService,
}) => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange: ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    if (setService) {
      {
        // When "Other" is selected, pass an empty string as the service value
        selectedValue === "Other" ? setService("") : setService(selectedValue);
      }
    }
  };

  const handleOtherServiceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // Set the value entered by the user as the service
    if (setService) {
      setService(event.target.value);
    }
  };
  return (
    <div className="mb-3">
      <FormLabel className="mb-0">Service *</FormLabel>
      <FormSelect onChange={handleServiceChange} value={selectedService}>
        <option value="">Select your desired service</option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Game Development">Game Development</option>
        <option value="Other">Other service type:</option>
      </FormSelect>
      {/* Create form control if users choose other service type */}
      {selectedService === "Other" && (
        <FormControl
          className="my-2"
          type="text"
          placeholder="Enter other service type"
          onChange={handleOtherServiceChange}
          required
        />
      )}
    </div>
  );
};

export default ServiceChoicesForm;
