const OnSiteJob = ({ job, handleJobDetails }) => {
  const {
    _id,
    posted_by,
    title,
    posting_date,
    application_deadline,
    salary_range,
    applicants,
    image,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-xl border-2 border-slate-300">
      <figure>
        <img
          className="h-36 md:h-48 lg:h-56 w-72 md:w-5/6 rounded-xl mt-6"
          src={image}
          alt="Company Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl md:text-2xl font-bold">{title}</h2>
        <div className="flex justify-around items-center opacity-60 text-sm">
          <h2>Posted by {posted_by}</h2>
          <p className="ms-4">Posted on {posting_date}</p>
        </div>
        <p>Salary: {salary_range}</p>
        <div className="card-actions flex flex-col">
          <div className="badge badge-outline border-sky-400">
            Total Applicants: {applicants}
          </div>
          <div className="badge badge-outline border-red-400">
            Application Deadline: {application_deadline}
          </div>
        </div>
        <div className="card-actions flex justify-center items-center mt-2">
          <button
            onClick={() => handleJobDetails(_id)}
            className="btn btn-sm bg-[#a5b4fc] py-2 px-4"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnSiteJob;
