import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyJobList = ({job, jobs, setJobs}) => {  
  


  return (
    <tr>
          <td>{job.title}</td>
          <td>{job.description}</td>
          <td className="flex justify-center items-center gap-4">
            <button ><FaEdit /></button>
            <button  ><FaRegTrashAlt /></button>
          </td>
          {/* onClick={() => handleDelete(_id)} */}
          {/* onClick={() => handleUpdate(job.id)}
          onClick={() => handleDelete(job.id)} */}
    </tr>
  );
};

export default MyJobList;