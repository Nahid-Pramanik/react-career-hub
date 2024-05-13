import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(job => job.id === parseInt(id));
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const { phone, email, address } = contact_information;

    return (
        <div className="mb-24 m-3">
            <h1 className="text-3xl font-extrabold text-center my-20">Job Details</h1>

            <div className="grid md:grid-cols-6 gap-5">
                <div className=" md:col-span-4 tracking-wide">
                    <p className="font-extrabold mb-6">Job Description: <span className=" font-medium leading-7 opacity-85">{job_description}</span></p>
                    <p className="font-extrabold">Job Responsibility: <span className=" font-medium leading-7 opacity-85">{job_responsibility}</span></p>
                    <div className="my-6">
                        <p className="font-extrabold mb-4">Educational Requirements:</p>
                        <p className="font-semibold opacity-85">{educational_requirements}</p>
                    </div>
                    <div>
                        <p className="font-extrabold mb-4">Experiences:</p>
                        <p className="font-semibold opacity-85">{experiences}</p>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <div className="rounded-lg bg-violet-50 p-8">
                        <h1 className="text-xl font-extrabold">Job Details</h1>
                        <hr className="w-[90%] mx-auto my-6 border-violet-400" />
                        <div className="mb-8">
                            <p className="text-xl font-bold flex items-center"> <AiOutlineDollar className="mr-2 text-violet-400" />Salary: <span className="text-xl font-medium opacity-85">{salary}  (Per Month)</span>
                            </p>
                            <p className="text-xl font-bold flex items-center"> <PiSubtitles className="mr-2 text-violet-400" />Job Title:  <span className="text-xl font-medium opacity-85">{job_title}</span>
                            </p>
                        </div>
                        <h1 className="text-xl font-extrabold">Contact Information</h1>
                        <hr className="w-[90%] mx-auto my-6 border-violet-400" />

                        <div className="mb-8">
                            <p className="text-xl font-bold flex items-center mb-4"> <FiPhone className="mr-2 text-violet-400" />Phone: <span className="text-xl font-medium opacity-85"> {phone}</span>
                            </p>
                            <p className="text-xl font-bold flex items-center mb-3"> <MdOutlineEmail className="mr-2 text-violet-400" />Email:  <span className="text-xl font-medium opacity-85">{email}</span>
                            </p>
                            <p className="text-xl font-bold flex "> <SlLocationPin className="mr-2 text-xl font-bold text-violet-400" />Address:  <span className="text-xl font-medium opacity-85">{address}</span>
                            </p>
                        </div>

                    </div>
                    <button className="btn btn-linier text-white tracking-wide w-full mt-6">Apply Now</button>
                </div>


            </div>
        </div>
    );
};

export default JobDetails;