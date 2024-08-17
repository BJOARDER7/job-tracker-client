import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";

const AllJobs = () => {
  // const jobs = useLoaderData();
  // http://localhost:5000/jobs

  const {isPending, data: jobs, isError, error} = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/jobs');
      return res.json();
    }
  });

  if(isPending){
    return <p>Lodding</p>
  }
  if(isError){
    return <p>error: {error.message}</p>
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
        jobs?.map(job => <JobCard
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