import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get(`http://${window.location.hostname}:8888/v1/persona/all`)
    .then(function (response) {
      setPersonas(response.data);
    })
  }, [])

  return (
    <div className='content'>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {
          personas.map((persona, i) => (
            <tr key={i}>
              <th scope="row">{persona.personaID}</th>
              <td>{persona.nombre}</td>
              <td>{persona.edad}</td>
              <td>{persona.timestamp}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
  );
}

export default App;
