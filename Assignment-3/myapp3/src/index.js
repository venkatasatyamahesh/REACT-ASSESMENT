import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Customer  = {
  EmployeeID:"00005152",
  Appointment:"9:00(24-05-2022)",
  Email:"alan.form@email.nl",
  Phone:"+31123456789",
  Status:"In Progress",
  Door:"Mark",
  Time:"10:30(25-5-2022)",
  dateset:"25-04-2022",
}
const rootElement = document.getElementById('root');
const root =createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App Customer={Customer} />
  </React.StrictMode>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
