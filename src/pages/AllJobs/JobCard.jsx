import { Link } from "react-router-dom";


const JobCard = ({job}) => {
  const {_id, title, posting_date, application_deadline, salary_range} = job;
   
  
  return (
    <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="font-bold">{title}</div>
        </td>
        <td>
        {posting_date}         
        </td>
        <td>{application_deadline}</td>
        <td>{salary_range}</td>
        <th>
          <Link to={`/job/${_id}`}>
          <button className="btn btn-link btn-xs">View Details</button>
          </Link>
        </th>
      </tr>
  );
};

export default JobCard;