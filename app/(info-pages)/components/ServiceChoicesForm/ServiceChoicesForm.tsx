import React, { ChangeEvent, ChangeEventHandler } from "react";
import { FormControl, FormLabel, FormSelect } from "react-bootstrap";

interface ServiceChoicesFormProps {
  setService: (value: string) => void;
  value: string;
  onChangeService: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid: boolean;
}

const ServiceChoicesForm: React.FC<ServiceChoicesFormProps> = ({
  setService,
  onChangeService,
  isInvalid,
}) => {
  const [selectedService, setSelectedService] = React.useState("");

  const handleServiceChange: ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    setService(selectedValue === "Other" ? "" : selectedValue);

    onChangeService({
      target: {
        value: selectedValue,
        name: "service",
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <FormLabel className="mb-0">Service *</FormLabel>
      <FormSelect
        name="service"
        isInvalid={isInvalid}
        onChange={handleServiceChange}
        value={selectedService}
      >
        <option value="">Select your desired service</option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Game Development">Game Development</option>
        <option value="Other">Other service type:</option>
      </FormSelect>
      {/* Create form control if users choose other service type */}
      {selectedService === "Other" && (
        <FormControl
          className="mt-2"
          type="text"
          name="service"
          isInvalid={isInvalid}
          placeholder="Enter other service type"
          onChange={onChangeService}
          required
        />
      )}
    </div>
  );
};

export default ServiceChoicesForm;
