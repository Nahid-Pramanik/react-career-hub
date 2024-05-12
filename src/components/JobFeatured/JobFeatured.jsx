import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";


const JobFeatured = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="mb-32">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Featured Jobs</h1>
                <p className="text-base font-medium mb-8
                ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Jobs
                        key={job.id}
                        job={job}
                    ></Jobs>)
                }
            </div>
            <div className={`flex justify-center mt-10 ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-linier text-white tracking-wide ">See All Jobs</button>
            </div>
        </div>
    );
};

export default JobFeatured;