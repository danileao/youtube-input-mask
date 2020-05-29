import React, { useState, useCallback } from "react";

import Input from "./components/Input";

import "./App.css";

interface Usuario {
  cep: string;
  cpf: string;
  price: number;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [usuario]
  );

  return (
    <div className="container">
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

      <button className="button" onClick={() => console.log(usuario)}>
        Salvar
      </button>
    </div>
  );
};

export default App;
