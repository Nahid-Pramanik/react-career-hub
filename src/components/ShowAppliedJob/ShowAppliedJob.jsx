import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ShowAppliedJob = ({ job }) => {

    const { id, logo, job_title, company_name, job_type, remote_or_onsite, location,
        salary } = job;
        
    return (
        <div className='mb-6'>
            <div className="card card-side bg-base-100 shadow-xl border p-7">
                <figure className='p-7 bg-slate-100 rounded-lg w-48'><img src={logo} alt="Logo" /></figure>
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
                </div>
                <div className="card-actions items-center justify-end">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-linier text-white tracking-wide">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ShowAppliedJob.propTypes = {
    job: PropTypes.object.isRequired,
}

export default ShowAppliedJob;