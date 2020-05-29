import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useField } from "@unform/core";

import { cep, currency, cpf } from "./masks";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency" | "cpf";
  prefix?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, name, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input
        {...props}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        onKeyUp={handleKeyUp}
      />

      {error && <label>{error}</label>}
    </div>
  );
};

export default Input;
