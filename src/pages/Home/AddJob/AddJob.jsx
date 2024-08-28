import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const AddJob = () => {
  const { user } = useContext(AuthContext);

  const [jobData, setJobData] = useState({
    // image: "",
    // title: "",
    // category: "On-Site",
    // salary_range: "",
    // description: "",
    // posting_date: new Date(),
    // application_deadline: new Date(),
    // applicants: 0,
    // user: user.displayName,
    // email: user.email,
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
    console.log("Job Data Submitted:", jobData);

    // send data to the server
    axios
      .post("http://localhost:5000/jobs", jobData)
      .then((data) => {
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
      .catch((error) => {
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
    <div className="w-3/5 mx-auto my-2 md:my-4 pt-2 bg-gray-100 rounded-lg">
      <h2 className="text-center text-lg md:text-2xl font-bold">Add A Job</h2>
      <hr className="w-2/3 mx-auto my-2" />
      <div className="flex justify-center w-full mt-2 md:mt-4">
        <form onSubmit={handleSubmit} className="w-11/12 py-2 md:py-4 ">
          {/* category & job applicants */}
          <div className="md:flex justify-between mb-2 md:mb-4 space-x-4 space-y-2">
            {/* category */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Job Category:</label>
              <select
                name="category"
                value={jobData?.category}
                onChange={handleChange}
                className="flex-1 w-1/4 py-1 px-2 border-2 border-slate-300 rounded-md"
              >
                <option value="On-Site">On-Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            {/* job applicant */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Job Applicants Number:</label>
              <input
                type="number"
                name="applicants"
                className="flex-1 w-1/4 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={jobData?.applicants}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* title & salary part */}
          <div className="md:flex justify-between mb-2 md:mb-4 space-x-4 space-y-2">
            {/* title */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Job Title:</label>
              <input
                type="text"
                name="title"
                className="flex-1 w-2/3 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={jobData?.title}
                onChange={handleChange}
                required
              />
            </div>
            {/* salary */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Salary Range:</label>
              <input
                type="text"
                name="salary_range"
                className="flex-1 w-2/3 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={jobData?.salary_range}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* date */}
          <div className="md:flex justify-between mb-2 md:mb-4 space-x-4">
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Job Posting Date:</label>
              <DatePicker
                selected={jobData?.posting_date}
                onChange={(date) => handleDateChange("posting_date", date)}
                className="flex-1 py-1 px-2 border-2 border-slate-300 rounded-md"
              />
            </div>

            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Application Deadline:</label>
              <DatePicker
                selected={jobData?.application_deadline}
                onChange={(date) =>
                  handleDateChange("application_deadline", date)
                }
                className="flex-1 py-1 px-2 border-2 border-slate-300 rounded-md"
              />
            </div>
          </div>
          {/* picture URL */}
          <div className="mb-2 md:mb-4">
            <div className="flex justify-start items-center space-x-2 w-full">
              <label>Picture URL of the Job Banner:</label>
              <input
                type="text"
                name="image"
                className="flex-1 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={jobData?.image}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* job description */}

          <div className="md:flex mb-2 md:mb-4">
            <div className="flex justify-start items-center space-x-2 w-full">
              <label>Job Description:</label>
              <textarea
                name="description"
                className="flex-1 w-2/3 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={jobData?.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          {/* user name & email */}
          <div className="md:flex justify-between mb-2 md:mb-4 space-x-4 space-y-2">
            {/* user name */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>User Name:</label>
              <input
                type="text"
                name="user"
                className="flex-1 w-2/3 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={user?.displayName}
                readOnly
              />
            </div>
            {/* email */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>User Email:</label>
              <input
                type="email"
                name="email"
                className="flex-1 w-2/3 py-1 px-2 border-2 border-slate-300 rounded-md"
                value={user?.email}
                readOnly
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="btn bg-[#818cf8] w-2/3" type="submit">Add Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
