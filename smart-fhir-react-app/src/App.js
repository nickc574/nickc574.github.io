import logo from './logo.svg';
import './App.css';
import {PatientVisualizer} from 'fhir-visualizers';
import React, { useState, useEffect } from 'react';
import Demographics from './components/demographics';
import {fhirClient} from 'fhirclient'

function App(props) {
  const client = props.client;
  const [patient, setPatient] = useState(null);
    
  useEffect(() => {
    client.patient.read().then((patient) => setPatient(patient));
  });

  // client.patient.request("Observation").then(
  //   (obs) => { console.log(obs) }
  // );

  return (    
    <div id="app">
      {patient? <PatientVisualizer patient={patient} /> : <h1>Loading</h1>}
      {patient? <Demographics patient={patient} /> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
