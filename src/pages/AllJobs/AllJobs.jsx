import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";

const AllJobs = () => {

  const {isLoading, data: jobs, isError, error} = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/jobs');
      return res.json();
    }
  });

  if(isLoading){
    return <div className="flex justify-center items-center my-2"><span className="loading loading-spinner text-info"></span></div>
  }
  if(isError){
    return <p className="text-center text-red-600 my-2">error: {error.message}</p>
  }
  
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