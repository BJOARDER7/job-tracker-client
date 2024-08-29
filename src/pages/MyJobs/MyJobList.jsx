import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyJobList = ({ idx, job, jobs, setJobs}) => {
  const {_id} = job;
  
  let index = idx + 1;

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
      <th>{index}</th>
      <td className="font-semibold">{job.title}</td>
      <td>{job.description}</td>
      <td>
        <Link to={`/update/${_id}`}>        
        <button>
          <FaEdit />
        </button>
        </Link>
        </td>
        <td>
        <button onClick={() => handleDelete(_id)}>
          <FaRegTrashAlt />
        </button>
      </td>
      
    </tr>
  );
};

export default MyJobList;
