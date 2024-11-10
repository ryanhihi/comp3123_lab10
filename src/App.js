import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  // State to display submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store submitted data
  };

  return (
    <div className="App">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit} className="data-entry-form">
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        
        <label>
          Address:
          <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
        </label>
        
        <label>
          Address 2:
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        </label>
        
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        
        <label>
          Province:
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
          </select>
        </label>
        
        <label>
          Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </label>
        
        <label>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
          />
          Agree to Terms & Conditions?
        </label>
        
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Address:</strong> {submittedData.address1}</p>
          <p><strong>Address 2:</strong> {submittedData.address2}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
