import { useState } from "react";
import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";

const AllJobs = () => {
  const [searchJob, setSearchJob] = useState("");

  const {
    isLoading,
    data: jobs,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("https://job-tracker-server.vercel.app/jobs");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-2">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }
  if (isError) {
    return (
      <p className="text-center text-red-600 my-2">error: {error.message}</p>
    );
  }

  const handleSearch = (e) => {
    setSearchJob(e.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchJob.toLowerCase())
  );

  return (
    <div className="w-5/6 my-4 mx-auto">

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by Job Title"
          className="input input-bordered w-full max-w-xs"
          value={searchJob}
          onChange={handleSearch}
        />
      </div>


      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:block"></th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary range</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
