import * as React from "react";

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (target: string, value: string) => {
    setFormData({ ...formData, target: value });
  };

  return { formData, handleInputChange };
};
