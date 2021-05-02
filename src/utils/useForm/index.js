import { useState } from "react";

const useForm = initialValue => {
  const [form, setForm] = useState(inititalValue);
  return [
    form,
    (formType, formValue) => {
      if (formType === "reset") {
        return setForm(initialValue);
      }
      return setForm({ ...form, [formType]: formValue }); //isi dengan apa form value
    }
  ];
};
export default useForm;
