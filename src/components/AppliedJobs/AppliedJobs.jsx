import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilitis/fakeDb";
import { useEffect, useState } from "react";
import ShowAppliedJob from "../ShowAppliedJob/ShowAppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    useEffect(() => {
        const storedJobsId = getStoredJobApplication();

        const jobApplied = [];
        for (const id of storedJobsId) {

            const job = jobs.find(job => job.id === parseInt(id));
            if (job) {
                jobApplied.push(job);
            }
        }
        setAppliedJobs(jobApplied);
        setDisplayJobs(jobApplied);

    }, [jobs]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'Onsite') {
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJob);
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center my-20">Applied Jobs</h1>
            <div className="flex justify-end mb-8">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="mb-32">
                {
                    displayJobs.map(job => <ShowAppliedJob
                        key={job.id}
                        job={job}
                    ></ShowAppliedJob>)
                }
            </div>
        </div>

    );
};

export default AppliedJobs;