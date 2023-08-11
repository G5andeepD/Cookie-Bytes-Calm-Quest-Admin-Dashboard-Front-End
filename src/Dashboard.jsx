import CounselorCreateForm from "./CounselorCreateForm";
import StudentCreateForm from "./StudentCreateForm";
import StudentListTable from "./StudentListTable";
import CounselorListTable from "./CounselorListTable";
import { useState ,useEffect} from "react";
import axios from "axios";
import API_URL from "./config";

export const Dashboard = () => {

  

  const students = [
    {
      firstName: "Saman",
      lastName: "Perera",
      gender: "Male",
      email: "saman@example.com",
      studentRegistrationNumber: "2023001",
      faculty: "Science",
      university: "University of Peradeniya",
    },
    {
      firstName: "Malini",
      lastName: "Fernando",
      gender: "Female",
      email: "malini@example.com",
      studentRegistrationNumber: "2023002",
      faculty: "Arts",
      university: "University of Peradeniya",
    },
    {
      firstName: "Chathura",
      lastName: "Ratnayake",
      gender: "Male",
      email: "chathura@example.com",
      studentRegistrationNumber: "2023003",
      faculty: "Engineering",
      university: "University of Peradeniya",
    },
    {
      firstName: "Dilhani",
      lastName: "Silva",
      gender: "Female",
      email: "dilhani@example.com",
      studentRegistrationNumber: "2023004",
      faculty: "Agriculture",
      university: "University of Peradeniya",
    },
    {
      firstName: "Kasun",
      lastName: "Fernando",
      gender: "Male",
      email: "kasun@example.com",
      studentRegistrationNumber: "2023005",
      faculty: "Medicine",
      university: "University of Peradeniya",
    },
  ];
  const [fetchedStudents, setStudents] = useState(students);
  const counselors = [
    {
      firstName: "Nimal",
      lastName: "Silva",
      gender: "Male",
      email: "nimal@example.com",
      workplace: "Counseling Center",
    },
    {
      firstName: "Kamala",
      lastName: "Fernando",
      gender: "Female",
      email: "kamala@example.com",
      workplace: "Guidance Office",
    },
    {
      firstName: "Ravi",
      lastName: "Perera",
      gender: "Male",
      email: "ravi@example.com",
      workplace: "Student Support Center",
    },
    {
      firstName: "Malini",
      lastName: "Samarasinghe",
      gender: "Female",
      email: "malini@example.com",
      workplace: "Counseling Services",
    },
    {
      firstName: "Sanjeewa",
      lastName: "Rathnayake",
      gender: "Male",
      email: "sanjeewa@example.com",
      workplace: "Wellness Center",
    },
  ];

  const [fetchedCounselors,setFetchedCouselors] = useState(counselors)

  useEffect(() => {
    // Fetch students when the component mounts
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const token = user.access_token; // Assuming your user data structure includes a 'token' field
    console.log(token)
    const headers = { Authorization: `Bearer ${token}` };

    axios.get(`${API_URL}/admin/student`, { headers })
      .then(response => {
        setStudents(response.data); // Set the fetched students data
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch students for counselors when the component mounts
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const token = user.access_token; // Assuming your user data structure includes a 'token' field
    const headers = { Authorization: `Bearer ${token}` };

    // Update the endpoint URL for counselors
    const endpoint = `${API_URL}/admin/counselor`;

    axios.get(endpoint, { headers })
      .then(response => {
        setFetchedCouselors(response.data); // Set the fetched students data
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);
  
 

  const handleEditStudent = (student) => {
    // Handle the edit action for the clicked student
    console.log(
      `Edit clicked for student: ${student.firstName} ${student.lastName}`
    );
  };

  const handleDeleteStudent = async (id) => {

    console.log(
      `Delete clicked for student with id: ${id}`
    );
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const token = user.access_token;
    const headers = { Authorization: `Bearer ${token}` };

  try {
      const response = await axios.delete(`${API_URL}/admin/student/${id}`, { headers });
      return response.data;
    } catch (error) {
      throw error; // Throw the error for handling
    }
    
  };

  const handleEditCounselor = (counselor) => {
    console.log(
      `Edit clicked for counselor: ${counselor.firstName} ${counselor.lastName}`
    );
  };

  const handleDeleteCounselor = async (id) => {

    console.log(`Delete clicked for counselor with email: ${id}`);
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const token = user.access_token;
    const headers = { Authorization: `Bearer ${token}` };

  try {
      const response = await axios.delete(`${API_URL}/admin/counselor/${id}`, { headers });
      return response.data;
    } catch (error) {
      throw error; // Throw the error for handling
    }
    
  };
  return (
    <>
      <h1 className="header text-center font-[501] font-black text-6xl">
        Admin Dashboard
      </h1>
      <div className="flex p-4">
        <div className="w-1/2 pr-2">
          <StudentCreateForm />
        </div>
        <div className="w-1/2 pl-2">
          <CounselorCreateForm />
        </div>
      </div>

      <div className="p-4  mx-auto">
        <h1 className="text-4xl text-center font-semibold mb-4">List of Students</h1>
        <StudentListTable
          students={fetchedStudents}
          onEditClick={handleEditStudent}
          onDeleteClick={handleDeleteStudent}
        />

        <h1 className="text-3xl text-center font-semibold mt-8 mb-4">List of Counselors</h1>
        <CounselorListTable
          counselors={fetchedCounselors}
          onEditClick={handleEditCounselor}
          onDeleteClick={handleDeleteCounselor}
        />
      </div>
    </>
  );
};
