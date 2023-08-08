import React, { useState } from 'react';

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
    // Send formData to the endpoint using an API call
    console.log(formData);
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
