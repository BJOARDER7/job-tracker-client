import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobByCategory = () => {
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
      <h2>Any content 1</h2>
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