import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyJobList = ({ job, jobs, setJobs}) => {
  const {_id} = job;
  
  
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
        <button>
          <FaEdit />
        </button>
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <FaRegTrashAlt />
        </button>
      </td>
      
    </tr>
  );
};

export default MyJobList;
