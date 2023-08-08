import React, { useState } from "react";

const StudentCreateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    gender: "",
    email: "",
    studentRegistrationNumber: "",
    faculty: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the endpoint using an API call
    console.log(formData);
  };

  return (
    <div className="p-4">
      <p className="header text-center font-[501] font-black text-4xl">
        Create Student
      </p>

      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex p-4">
          <div className="w-1/2 pr-2">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="firstName"
              >
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
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="lastName"
              >
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
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="password"
              >
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
          </div>
          <div className="w-1/2 pl-2">
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
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="studentRegistrationNumber"
              >
                Student Registration Number
              </label>
              <input
                type="text"
                id="studentRegistrationNumber"
                name="studentRegistrationNumber"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                value={formData.studentRegistrationNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="faculty">
                Faculty
              </label>
              <input
                type="text"
                id="faculty"
                name="faculty"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                value={formData.faculty}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="university"
              >
                University
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Create Student
        </button>
      </form>
    </div>
  );
};

export default StudentCreateForm;
