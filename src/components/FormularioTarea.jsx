import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormularioTarea = () => {
  let listaTareas = ['Planificar', 'Codear', 'Maquetar', 'Testing'];
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue);
  };

  const agregarTarea = (tarea) => {
    //Todo: Hacer la logica de agregar una tarea a la lista
    console.log(tarea);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas listaTareas={listaTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
