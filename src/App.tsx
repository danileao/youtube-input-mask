import React, { useState, useCallback } from "react";

import { Form } from "@unform/web";
import { SubmitHandler, FormHandles } from "@unform/core";

import Input from "./components/Input";

import { cpf, cep, currency } from "./components/Input/format";

import "./App.css";

interface Usuario {
  cep: string;
  cpf: string;
  price: any;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const initial = {
    cep: cep("9990989"),
    cpf: cpf("56598955585"),
    price: currency((20990.08).toString()),
  };

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [usuario]
  );

  const formRef = React.useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
    console.log(data);
  };

  return (
    <div className="container">
      <Form ref={formRef} onSubmit={handleSubmit} initialData={initial}>
        <span>CEP</span>
        <Input
          name="cep"
          mask="cep"
          onChange={handleChange}
          placeholder="99999-999"
        />

        <span>CPF</span>
        <Input
          name="cpf"
          mask="cpf"
          onChange={handleChange}
          placeholder="999.999.999-99"
        />

        <span>Preço</span>
        <Input
          name="price"
          mask="currency"
          prefix="R$"
          placeholder="0,01"
          onChange={handleChange}
        />

        <button className="button">Salvar</button>
      </Form>
    </div>
  );
};

export default App;
