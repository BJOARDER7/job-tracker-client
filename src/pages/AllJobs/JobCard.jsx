import { Link } from "react-router-dom";


const JobCard = ({job}) => {
  const {_id, title, posting_date, application_deadline, salary_range} = job;
   
  
  return (
    <tr>
        <th className="hidden md:block">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="font-bold md:text-nowrap">{title}</div>
        </td>
        <td>
        {posting_date}         
        </td>
        <td>{application_deadline}</td>
        <td className="md:text-nowrap">{salary_range}</td>
        <th>
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-link btn-xs md:text-nowrap">View Details</button>
          </Link>
        </th>
      </tr>
  );
};

export default JobCard;