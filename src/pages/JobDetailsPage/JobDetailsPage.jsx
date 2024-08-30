import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { id } = useParams();

  const { isLoading, data: job, isError, error } = useQuery({
    queryKey: ['job', id],
    queryFn: async ({ queryKey }) => {
      const [_key, id] = queryKey;
      const res = await fetch(`https://job-tracker-server.vercel.app/jobs/${id}`);
      
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
    <div className="flex justify-center items-center mb-4">
      <div className="card bg-base-100 w-96 shadow-xl border-2 border-slate-300">
      <figure>
        <img
          className="h-36 md:h-48 lg:h-56 w-72 md:w-5/6 rounded-xl mt-6"
          src={job?.image}
          alt="Company Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl md:text-2xl font-bold">{job.title}</h2>        
        <p>Salary: {job.salary_range}</p>
        <div className="card-actions flex flex-col">
          <div className="badge badge-outline border-sky-400">
            Total Applicants: {job.applicants}
          </div>
          <div className="text-justify">
            <span className="font-bold">Job description:</span> {job.description}
          </div>
        </div>
        <div className="card-actions flex justify-center items-center mt-2">
          <button            
            className="btn btn-sm bg-[#a5b4fc] py-2 px-6"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobDetailsPage;