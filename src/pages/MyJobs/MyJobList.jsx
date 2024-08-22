import { useContext, useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyJobList = ({ job, jobs, setJobs}) => {
  const {_id} = job;
  const {user} = useContext(AuthContext);

  
  
  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your job has been deleted.", "success");
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };


  
      

  return (
    <tr>
      <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
      <td>{job.title}</td>
      <td>{job.description}</td>
      <td className="flex justify-center items-center gap-4">
        <Link to={`/update/${_id}`}>
        {/* <button onClick={() => openModalWithJob(_id)}><FaEdit /></button> */}
        <button
          // onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <FaEdit />
        </button>
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <FaRegTrashAlt />
        </button>
      </td>

      
      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <div className="bg-[#F4F3F0] p-8">
      <h2 className="text-3xl font-extrabold text-center">Update a job</h2>
      <div className="flex justify-center">
      <form onSubmit={handleUpdate}>
        <div className="md:flex mb-4">
          
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
          value="Add A Job"
          className="btn btn-outline md:w-full"
        />
      </form>
      </div>
    </div>
          <div className="modal-action">
            <form method="dialog">
             
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>  */}
    </tr>
  );
};

export default MyJobList;
