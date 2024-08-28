import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';


const AddAJob = () => {
  const {user} = useContext(AuthContext);

  const handleAddJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const category = form.category.value;
    const salary_range = form.salary_range.value;
    const description = form.description.value;
    const applicants = form.applicants.value;
    const posting_date = form.posting_date.value;
    const application_deadline = form.application_deadline.value;
  //   const posting_date = new Date(form.posting_date.value).toString();
  // const application_deadline = new Date(form.application_deadline.value).toString();
  // const applicants = parseInt(form.applicants.value, 10);
    const image = form.image.value;   
    const name = form.name.value;   
    const email = form.email.value;   
   

    const newJob = {
      title,
      category,
      salary_range,
      description,
      posting_date,
      application_deadline,
      applicants,
      image,
      name,
      email
    };

    console.log(newJob);

    // send data to the server
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };


  return (
    <div className="w-3/5 mx-auto my-2 md:my-4 pt-2 bg-gray-100 rounded-lg">
      <h2 className="text-center text-lg md:text-2xl font-bold">Add A Job</h2>
      <hr className="w-2/3 mx-auto my-2" />
      <div className="flex justify-center w-full mt-2 md:mt-4">
        <form onSubmit={handleAddJob} className="w-11/12 py-2 md:py-4 ">
          {/* category & job applicants */}
          <div className="md:flex justify-between mb-2 md:mb-4 space-x-4 space-y-2">
            {/* category */}
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Job Category:</label>
              <select
                name="category"                
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
                
                required
              />
            </div>
          </div>
          {/* date */}
          <div className="md:flex justify-between mb-2 md:mb-4 space-x-4">
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Job Posting Date:</label>
              <input
                type="date"
                name="posting_date"
                className="flex-1 py-1 px-2 border-2 border-slate-300 rounded-md"
              />
            </div>
            
            <div className="flex justify-start items-center space-x-2 w-full md:w-1/2">
              <label>Application Deadline:</label>
              <input
                type="date"
            name="application_deadline"
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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

export default AddAJob;