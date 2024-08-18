import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddJob = () => {
  const {user} = useContext(AuthContext);


  const [jobData, setJobData] = useState({
    image: '',
    title: '',
    category: 'On-Site',
    salary_range: '',
    description: '',
    posting_date: new Date(),
    application_deadline: new Date(),
    applicants: 0,
    user: user.displayName,
    email: user.email
  });

  const handleChange = (e) => {    
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleDateChange = (date, field) => {
    setJobData({ ...jobData, [field]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Data Submitted:', jobData);
    

     // send data to the server
     axios.post('http://localhost:5000/jobs', jobData)
     .then(data => {
      if (data.data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Job Added Successfully",
                icon: "success",
                confirmButtonText: "OK",
              });
            }
      console.log(data.data);
     })
     .catch(error => {
      console.error("There was an error adding the job!", error);
      Swal.fire({
          title: "Error!",
          text: "Failed to add job. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
      });
  });
  };
    
  

  return (
    <div className="add-job-form">
      <h2>Add A Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Picture URL of the Job Banner:</label>
          <input
            type="text"
            name="image"
            value={jobData?.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>User Name:</label>
          <input
            type="text"
            name='user'
            value={user?.displayName}
            readOnly
          />
        </div>

        <div>
          <label>User Email:</label>
          <input
            type="email"
            name='email'
            value={user?.email}
            readOnly
          />
        </div>

        <div>
          <label>Job Category:</label>
          <select
            name="category"
            value={jobData.category}
            onChange={handleChange}
          >
            <option value="On-Site">On-Site</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <label>Salary Range:</label>
          <input
            type="text"
            name="salary_range"
            value={jobData.salary_range}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Job Description:</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Job Posting Date:</label>
          <DatePicker
            selected={jobData.posting_date}
            onChange={(date) => handleDateChange('posting_date', date)}
          />
        </div>

        <div>
          <label>Application Deadline:</label>
          <DatePicker
            selected={jobData.application_deadline}
            onChange={(date) => handleDateChange('application_deadline', date)}
          />
        </div>

        <div>
          <label>Job Applicants Number:</label>
          <input
            type="number"
            name="applicants"
            value={jobData.applicants}
            onChange={handleChange}            
            required
          />
        </div>

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
