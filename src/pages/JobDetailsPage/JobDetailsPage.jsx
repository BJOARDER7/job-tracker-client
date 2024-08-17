import { useQuery } from "@tanstack/react-query";


const JobDetailsPage = () => {

  // const {data: uid, isError, error} = useQuery({
  //   queryKey: ['uid'],
  //   queryFn: async (id) => {
  //     const res = await fetch(`http://localhost:5000/job/${id}`);
  //     res.json();
  //   }
  // });

  // if(isError){
  //   <p>error: {error.message}</p>
  // }
  return (
    <div>
      <h2>id:</h2>
    </div>
  );
};

export default JobDetailsPage;