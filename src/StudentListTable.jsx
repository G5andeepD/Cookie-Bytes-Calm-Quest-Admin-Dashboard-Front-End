import React from "react";

const StudentListTable = ({ students, onEditClick, onDeleteClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">
              Registration Number
            </th>
            <th className="border border-gray-300 px-4 py-2">Faculty</th>
            <th className="border border-gray-300 px-4 py-2">University</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,id) => (
            <tr
              key={id}
              className="hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">
                {student.firstname}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.lastname}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.gender}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.studentRegistrationNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.faculty}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.university}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600"
                  onClick={() => onEditClick(student)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  onClick={() =>
                    onDeleteClick(student.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentListTable;
