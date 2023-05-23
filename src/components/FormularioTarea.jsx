import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormularioTarea = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  //Todo: Hacer la logica de agregar una tarea a la lista

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
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
