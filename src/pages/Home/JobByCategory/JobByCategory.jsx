import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './AllJobsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import OnSiteJob from './OnSiteJob';
import RemoteJob from './RemoteJob';
import HybridJob from './HybridJob';
import PartTimeJob from './PartTimeJob';
import AllJobsCard from './AllJobsCard';

const JobByCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:5000/jobs')
    .then(data => {
      setJobs(data.data);
    })
  }, []);

  const onSiteJobs = jobs.filter(job => job.category === 'On-Site');
  const remoteJobs = jobs.filter(job => job.category === 'Remote');
  const hybridJobs = jobs.filter(job => job.category === 'Hybrid');
  const partTimeJobs = jobs.filter(job => job.category === 'Remote');

  return (
    <div className='my-4'>
      <Tabs>
    <TabList>
      <Tab>All Jobs</Tab>
      <Tab>On-Site Job</Tab>
      <Tab>Remote Job</Tab>
      <Tab>Hybrid Job</Tab>
      <Tab>Part-Time Job</Tab>
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
      {
        jobs.map(job => <AllJobsCard
        key={job._id}
        job={job}
        ></AllJobsCard>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        {
          onSiteJobs.map(job => <OnSiteJob
          key={job._id}
          job={job}
          ></OnSiteJob>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        {
          remoteJobs.map(job => <RemoteJob
          key={job._id}
          job={job}
          ></RemoteJob>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        {
          hybridJobs.map(job => <HybridJob
          key={job._id}
          job={job}
          ></HybridJob>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        {
          partTimeJobs.map(job => <PartTimeJob
          key={job._id}
          job={job}
          ></PartTimeJob>)
        }
      </div>
    </TabPanel>

  </Tabs>
    </div>
  );
};

export default JobByCategory;