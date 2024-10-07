import React from "react";
import { FormProps } from "../components/Form";
import { EMAIL_REGEX, PHONE_REGEX } from "../utils/regex.utils";

export const useForm = (
  { dataFields }: FormProps,
  ref: React.ForwardedRef<HTMLFormElement>
) => {
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useImperativeHandle(ref, () => formRef.current as HTMLFormElement);
  const [formSubmittedWithSuccess, setFormSubmittedWithSuccess] =
    React.useState<"idle" | "success" | "error">("idle");

  const [dataFieldsErrors, setDataFieldsErrors] = React.useState<
    Record<string, string>
  >(() => {
    return dataFields
      ? dataFields.reduce(
          (acc, field, index) => ({
            ...acc,
            [field.name ?? index.toString()]: "",
          }),
          {}
        )
      : {};
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const errorMsgs =
      dataFields?.map((field, index) => {
        const key = field.name ?? index.toString();
        const value = data[key].toString();
        let errorMsg = "";

        if (field.required && !value) {
          errorMsg = "This field is required";
        }

        if (field.type === "email" && !EMAIL_REGEX.test(value)) {
          errorMsg = "Please enter a valid email";
        }

        if (field.type === "tel" && !PHONE_REGEX.test(value)) {
          errorMsg = "Please enter a valid phone number";
        }
        return errorMsg;
      }) || [];

    const keys = Object.keys(dataFieldsErrors);
    const newErrors = keys.reduce((acc, key, index) => {
      return { ...acc, [key]: errorMsgs[index] };
    }, {});

    const isValid = errorMsgs.every((error) => error === "");

    setDataFieldsErrors(newErrors);
    if (isValid) console.log(data);
    setFormSubmittedWithSuccess(isValid ? "success" : "error");
  };

  return { formRef, onSubmit, dataFieldsErrors, formSubmittedWithSuccess };
};
