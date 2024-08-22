import { useQuery } from "@tanstack/react-query";
import MyJobList from "./MyJobList";
import { useState } from "react";



const MyJobs = () => {

  const {isLoading, data: items, isError, error} = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/jobs');
      return res.json();
    }
  });

  const [jobs, setJobs] = useState(items);

  if(isLoading){
    return <div className="flex justify-center items-center my-2"><span className="loading loading-spinner text-info"></span></div>
  }
  if(isError){
    return <p className="text-center text-red-600 my-2">error: {error.message}</p>
  }


  
  return (
    <table className="my-4">
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs?.map(job => <MyJobList
        key={job._id}
        job={job}      
        jobs={jobs}
        setJobs={setJobs}        
        ></MyJobList>)
      }
    </tbody>
  </table>
  );
};

export default MyJobs;