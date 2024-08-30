import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import OnSiteJob from "./OnSiteJob";
import RemoteJob from "./RemoteJob";
import HybridJob from "./HybridJob";
import PartTimeJob from "./PartTimeJob";
import AllJobsCard from "./AllJobsCard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const JobByCategory = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://job-tracker-server.vercel.app/jobs").then((data) => {
      setJobs(data.data);
    });
  }, []);

  const onSiteJobs = jobs.filter((job) => job.category === "On-Site");
  const remoteJobs = jobs.filter((job) => job.category === "Remote");
  const hybridJobs = jobs.filter((job) => job.category === "Hybrid");
  const partTimeJobs = jobs.filter((job) => job.category === "Remote");

  const handleJobDetails = (_id) => {
    if (user) {
      navigate(`/jobs/${_id}`);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "You have to log in first to view details",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/login");
    }
  };

  return (
    <div className="my-4">
      <div className="text-center my-2 md:my-6">
        <h2 className="text-xl md:text-4xl font-bold my-2">
          Browse by category
        </h2>
        <p className="font-semibold opacity-60">
          Find the job that's perfect for you. About 500+ new jobs everyday
        </p>
      </div>
      <Tabs>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>On-Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid Job</Tab>
          <Tab>Part-Time Job</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {jobs.map((job) => (
              <AllJobsCard
                key={job._id}
                job={job}
                handleJobDetails={handleJobDetails}
              ></AllJobsCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {onSiteJobs.map((job) => (
              <OnSiteJob
                key={job._id}
                job={job}
                handleJobDetails={handleJobDetails}
              ></OnSiteJob>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {remoteJobs.map((job) => (
              <RemoteJob
                key={job._id}
                job={job}
                handleJobDetails={handleJobDetails}
              ></RemoteJob>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {hybridJobs.map((job) => (
              <HybridJob
                key={job._id}
                job={job}
                handleJobDetails={handleJobDetails}
              ></HybridJob>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {partTimeJobs.map((job) => (
              <PartTimeJob
                key={job._id}
                job={job}
                handleJobDetails={handleJobDetails}
              ></PartTimeJob>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobByCategory;
