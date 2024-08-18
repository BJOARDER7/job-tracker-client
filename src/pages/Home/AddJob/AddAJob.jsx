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
    <div className="bg-[#F4F3F0] p-8">
      <h2 className="text-3xl font-extrabold text-center">Add a new job</h2>
      <div className="flex justify-center">
      <form onSubmit={handleAddJob}>
        <div className="md:flex mb-4">
          {/* Job Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"                
                placeholder="Job Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* category*/}
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* short salary_range*/}
        <div className="mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="salary_range"
                placeholder="Salary Range"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Photo URL */}
        <div className="mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-4">
          {/* posting_date */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Posting date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="posting_date"
                placeholder="Posting date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* application_deadline */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Application deadline</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="application_deadline"
                placeholder="Application deadline"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-4">
          {/* Stock Status */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Applicants</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="applicants"
                placeholder="Applicants"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Processing Time */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder="User Email"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name" 
                defaultValue={user.displayName}               
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
               
        

        <input
          type="submit"
          value="Add Craft"
          className="btn btn-outline md:w-full"
        />
      </form>
      </div>
    </div>
  );
};

export default AddAJob;