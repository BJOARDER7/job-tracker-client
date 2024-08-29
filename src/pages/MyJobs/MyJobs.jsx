import { useQuery } from "@tanstack/react-query";
import MyJobList from "./MyJobList";
import { useEffect, useState } from "react";



const MyJobs = () => {
  

  const {isLoading, data: items, isError, error} = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/jobs');
      return res.json();
    }
  });

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (items) {
      setJobs(items);
    }
  }, [items]);

  if(isLoading){
    return <div className="flex justify-center items-center my-2"><span className="loading loading-spinner text-info"></span></div>
  }
  if(isError){
    return <p className="text-center text-red-600 my-2">error: {error.message}</p>
  }

  


  
  return (
    <div className="overflow-x-auto w-4/5 my-4 mx-auto">
      <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Description</th>
        <th className="col-span-2 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs && jobs.map((job, idx) => <MyJobList
        key={job._id}
        idx={idx}
        job={job}      
        jobs={jobs}
        setJobs={setJobs}        
        ></MyJobList>)
      }
    </tbody>
  </table>
    </div>
  );
};

export default MyJobs;