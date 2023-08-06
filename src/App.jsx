import Form from "./components/Form";
import { useState } from "react";

const initialStateEmployees = [{
  id: 1,
  name: "Alexander",
  surname: "Moreno",
  age: 41,
  isInsurance: false,
  salary: 1000
},
{
  id: 2,
  name: "Maria",
  surname: "Perez",
  age: 44,
  isInsurance: true,
  salary: 2000
},
{
  id: 3,
  name: "Eduardo",
  surname: "Moreno",
  age: 17,
  isInsurance: true,
  salary: 3000
}]

const App = () => {

  const [employees, setEmployees] = useState(initialStateEmployees)

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Formulario de registro de empleados</h1>
      </div>
      <Form />
    </div>
  );
};

export default App;
