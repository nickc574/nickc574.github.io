import logo from './logo.svg';
import './App.css';
import {PatientVisualizer} from 'fhir-visualizers';
import React, { useState, useEffect } from 'react';
import {Demographics} from './components/demographics';

function App(props) {
  const client = props.client;
  const [patient, setPatient] = useState(null);
  
  useEffect(() => {
    client.patient.read().then((patient) => setPatient(patient));
  });

  return (    
    <div id="app">
      {/* {patient? <PatientVisualizer patient={patient} /> : <h1>Loading</h1>} */}
      {patient? <Demographics patient={patient} /> : <h1>Loading</h1>}      
    </div>
  );
}

export default App;
