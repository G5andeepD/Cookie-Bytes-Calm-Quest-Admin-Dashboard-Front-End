import React, { useState } from 'react';
import axios from 'axios';
import API_URL from './config';


const CounselorCreateForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    gender: '',
    email: '',
    workplace: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const token = user.access_token; // Assuming your user data structure includes a 'token' field
    console.log(token)
    const headers = { Authorization: `Bearer ${token}` };

    // Send formData to the endpoint using an API call
    axios.post(`${API_URL}/admin/counselor`, formData, { headers })
      .then(response => {
        console.log('Counselor created successfully:', response.data);
        setFormData({
          firstName: '',
          lastName: '',
          password: '',
          gender: '',
          email: '',
          workplace: ''
        })
        // Handle success if needed
      })
      .catch(error => {
        console.error('Error creating student:', error);
        // Handle error if needed
      });
  };

  return (
    <div className="p-4">
        <p className="header text-center font-[501] font-black text-4xl">Create Counselor</p>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        
        
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="gender">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="gender">
           Workplace
          </label>
          <input
            type="text"
            id="workplace"
            name="workplace"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
            value={formData.workplace}
            onChange={handleChange}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Create Counselor
        </button>
      </form>
    </div>
  );
};

export default CounselorCreateForm;
