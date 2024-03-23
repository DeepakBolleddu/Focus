import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setFormError('Please fill in all required fields.');
      return;
    }
  
    try {
      const response = await axios.post('/api/generateResume', formData);
      const pdfUrl = response.data.pdfUrl;
      downloadPDF(pdfUrl);
      setFormError('');
    } catch (error) {
      console.error('Error generating resume:', error);
      setFormError('Error generating resume. Please try again.');
    }
  };
  
  const downloadPDF = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const urlObject = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlObject;
      a.download = 'sampleresume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Resume Builder</h1>
      {formError && <Alert variant="danger">{formError}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="summary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="education">
          <Form.Label>Education</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Generate Resume
        </Button>
      </Form>
      <Link to="/student-employee">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ResumeBuilder;
