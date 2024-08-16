const JobCard = ({job}) => {
  const {posted_by, title, posting_date, application_deadline, salary_range, applicants, image} = job;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Job Image" />
  </figure>
  <div className="card-body">
    <h2>Job Posted by {posted_by}</h2>
    <p>Posted on: {posting_date}</p>
    <h2 className="card-title">
    {title}   
    </h2>
    <p>Salary: {salary_range}</p>
    <div className="card-actions flex flex-col">
      <div className="badge badge-outline">Total Applicants: {applicants}</div>
      <div className="badge badge-outline">Application Deadline: {application_deadline}</div>
    </div>
    <div className="card-actions">
      <button className="btn btn-warning">View Details</button>
    </div>
  </div>
</div>
  );
};

export default JobCard;
