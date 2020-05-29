import React, { useState, useCallback } from "react";

import Input from "./components/Input";

interface Usuario {
  cep: string;
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
    <div>
      <Input name="cep" mask="cep" onChange={handleChange} />
      <Input name="price" mask="currency" prefix="R$" onChange={handleChange} />

      <button onClick={() => console.log(usuario)}>Salvar</button>
    </div>
  );
};

export default App;
