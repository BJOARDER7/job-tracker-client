

const JobCard = ({job}) => {
  const {title, posting_date, application_deadline, salary_range} = job;
   

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
          <button className="btn btn-link btn-xs">Details</button>
        </th>
      </tr>
  );
};

export default JobCard;