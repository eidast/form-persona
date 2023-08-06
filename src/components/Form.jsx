import { useState } from "react";
import InputText from "./InputText";
import InputNumber from "./InputNumber";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log;
  };

  const handleChange = (e) => {
    const { name, surname, age, sex, isInsurance, salary } = employee;

    setEmployee({
      ...employee,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const [employee, setEmployee] = useState({
    name: "",
    surname: "",
    age: "",
    isInsurance: false,
    salary: "",
  });

  return (
    <div className="container">
      <form>
        <InputText
          name="name"
          label="Nombre:"
          placeholder="Ingrese su nombre"
          handler={handleChange}
        />
        <InputText
          name="surname"
          label="Apellido:"
          placeholder="Ingrese su apellido"
          handler={handleChange}
        />
        <InputNumber
          name="age"
          label="Edad:"
          placeholder="Introduzca su edad"
          handler={handleChange}
        />
        <div className="form-group">
          <label htmlFor="sex" className="mb-2">
            Sexo:
          </label>
          <select
            type="option"
            className="form-option mb-2"
            name="sex"
            id="sex"
            onChange={handleChange}
          >
            <option name="male">Masculino</option>
            <option name="female">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="isInsurance" className="mb-2">
            Asegurado:
          </label>
          <input type="checkbox" name="isInsurance" className="form-check" onChange={handleChange}/>
        </div>
        <InputNumber
          name="salary"
          label="Salario: "
          placeholder="Indiquenos su salario"
          handler={handleChange}
        />
        <div className="form-group">
          <button className="btn btn-primary mb-2">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
