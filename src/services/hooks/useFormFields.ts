import { useState } from 'react';

function useFormFields<T>(initialValues: T) {
  const [formFields, setFormFields] = useState<T>(initialValues);
  const createChangeHandler = (key: keyof T) => (value: any) => {
    setFormFields((prev: T) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler };
}
export default useFormFields;
