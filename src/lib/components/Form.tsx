import React, { FormHTMLAttributes, forwardRef } from "react";
import { useForm } from "../hooks/useForm";
import { cn } from "../utils/cn.util";
import { inputVariants } from "../utils/variants.utils";
import { Button } from "./Button";
import { Label } from "./Label";
import { Option, Select, SelectProps } from "./Select";
import { TextInput, TextInputProps } from "./TextInput";
import { Textarea, TextareaProps } from "./Textarea";

type SelectField = SelectProps & { type: "select"; options: string[] };

export type DataField = (
  | TextInputProps
  | (TextareaProps & { type: "textarea" })
  | SelectField
) & { label: string };

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  dataFields?: DataField[];
};

const DataFieldComponent = (props: Omit<DataField, "label">) => {
  const { type, ...field } = props;
  if (type === "textarea") return <Textarea {...(field as TextareaProps)} />;
  if (type === "select")
    return (
      <>
        <Select {...(field as SelectProps)}>
          <Option value="">Select an option</Option>
          {(field as SelectField).options.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </>
    );
  else return <TextInput {...(props as TextInputProps)} />;
};

export const Form: React.FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ dataFields, ...props }, ref) => {
    const { dataFieldsErrors, formRef, onSubmit, formSubmittedWithSuccess } =
      useForm({ dataFields }, ref);

    return (
      <form
        ref={formRef}
        {...props}
        className="flex flex-col gap-3"
        onSubmit={onSubmit}
        noValidate
      >
        {dataFields?.map(({ label, className, ...field }, index) => {
          const error = dataFieldsErrors[field.name ?? index.toString()];
          const hasError = error !== "";
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col space-y-1 text-start text-[#2d3748]",
                hasError && "text-red-500 [&>label]:text-red-500"
              )}
            >
              <Label>{field.required ? `${label} *` : label}</Label>
              <DataFieldComponent
                {...field}
                className={cn(
                  className,
                  inputVariants({
                    variant: hasError ? "error" : "default",
                  })
                )}
              />
              <span id={`${field.name}-error`}>{error}</span>
            </div>
          );
        })}
        <div
          className={cn(
            "flex flex-col  md:flex-row md:justify-end",
            formSubmittedWithSuccess === "success" && "md:justify-between"
          )}
        >
          <span
            className={cn("text-center md:text-left text-green-500 mb-3")}
            hidden={formSubmittedWithSuccess !== "success"}
          >
            Form submitted with success!
          </span>
          <Button>Submit</Button>
        </div>
      </form>
    );
  }
);
