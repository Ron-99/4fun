import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

import {InputStyle, FieldStyle, FieldMaskStyle, LabelStyle, ErrorMessage} from "./style";

function Input({ name, type, label, value, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputStyle>
      <LabelStyle htmlFor={fieldName}>{label}</LabelStyle>

      {type === "mask" ? (
        <FieldMaskStyle
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultInputValue}
          error={error}
          {...rest}
        />
      ) : (
        <FieldStyle
          type={type || "text"}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultInputValue}
          error={error}
          {...rest}
        />
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputStyle>
  );
}

export default Input;
