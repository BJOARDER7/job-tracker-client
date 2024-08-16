import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const JobByCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:5000/jobs')
    .then(data => {
      setJobs(data.data);
    })
  }, [])

  return (
    <div className='my-4'>
      <Tabs>
    <TabList>
      <Tab>All Jobs</Tab>
      <Tab>IT</Tab>
      <Tab>Marketing</Tab>
      <Tab>Finance</Tab>
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
      {
        jobs.map(job => <JobCard
        key={job._id}
        job={job}
        ></JobCard>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default JobByCategory;