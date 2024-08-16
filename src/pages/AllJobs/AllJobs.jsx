import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const AllJobs = () => {
  const jobs = useLoaderData();
  
  return (
<div className="overflow-x-auto my-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Job Posting Date</th>
        <th>Application Deadline</th>
        <th>Salary range</th>
        <th></th>
      </tr>
    </thead>
    <tbody>      
      {
        jobs.map(job => <JobCard
        key={job._id}
        job={job}
        ></JobCard>)
      }
    </tbody>    
  </table>
</div>
  );
};

export default AllJobs;