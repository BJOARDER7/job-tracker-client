import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { id } = useParams();

  const { isLoading, data: job, isError, error } = useQuery({
    queryKey: ['job', id],
    queryFn: async ({ queryKey }) => {
      const [_key, id] = queryKey;
      const res = await fetch(`http://localhost:5000/job/${id}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch job details');
      }
      
      const data = await res.json();
      console.log(data); 
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-2">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }
  
  if (isError) {
    return <p className="text-center text-red-600 my-2">Error: {error.message}</p>;
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img src={job?.image} alt="Job Image" />
    </figure>
    <div className="card-body">      
      <h2 className="card-title">{job.title}</h2>
      <p>Description: {job.description}</p>
      <p>Salary: {job.salary_range}</p>
      <div className="card-actions">
        <div className="badge badge-outline">
          Total Applicants: {job.applicants}
        </div>        
      </div>
      <div className="card-actions">
        <button className="btn btn-warning">Apply</button>
      </div>
    </div>
  </div>
  );
};

export default JobDetailsPage;