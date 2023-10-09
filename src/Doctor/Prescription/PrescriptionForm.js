import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [patientName, setPatientName] = useState('');
  const [medications, setMedications] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, e.g., send data to the server or store it in state.
    console.log('Patient Name:', patientName);
    console.log('Medications:', medications);

    // Clear form fields after submission
    setPatientName('');
    setMedications('');
  };

  return (
    <div>
      <h2>Prescription Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="medications">Medications:</label>
          <textarea
            id="medications"
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Prescription</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
