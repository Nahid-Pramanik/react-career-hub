import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";

const Jobs = ({ job }) => {
    const { logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job;
    console.log(job);
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-10">
            <div className='p-4'>
                <img src={logo} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className='text-xl font-semibold opacity-75 mb-4'>{company_name}</p>
                <div className='flex gap-2'>
                    <button className='py-2 px-5 border border-violet-300 rounded-md mr-4'><span className='linier text-base font-extrabold tracking-wide'>{remote_or_onsite}</span></button>

                    <button className='py-2 px-5 border border-violet-300 rounded-md mr-4'><span className='linier text-base font-extrabold tracking-wide'>{job_type}</span></button>
                </div>
                <div className='flex items-center mt-3 mb-3'>
                   <span className='mr-6 flex items-center gap-2 md:text-xl text-base font-semibold opacity-75'> <SlLocationPin /> {location}</span>
                   <span className='mr-6 flex items-center gap-2 md:text-xl text-base font-semibold opacity-75'> <AiOutlineDollar /> {salary}</span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-linier text-white tracking-wide">View Details</button>
                </div>
            </div>
           
        </div>
    );
};

Jobs.propTypes = {
    job: PropTypes.object.isRequired,
}

export default Jobs;