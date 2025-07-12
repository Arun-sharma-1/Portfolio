import React, { useState } from "react";

const useForm = (initialValues = {}) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFieldValue = (field: string) => {
    return formData[field];
  };

  const getAllFields = () => {
    return formData;
  };

  function setFields(newValues: Record<string, any>) {
    setFormData((prev) => ({ ...prev, ...newValues }));
  }

  return { formData, handleChange, getFieldValue, getAllFields, setFields };
};

export default useForm;
