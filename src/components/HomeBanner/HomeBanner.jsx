import user from '../../assets/images/user.png';

const HomeBanner = () => {
    return (
        <div className='grid md:grid-cols-2 items-center justify-items-center gap-8 bg-gray-100'>
            <div className='mx-4 md:ml-12'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mb-6'>One Step <br /> Closer To Your <br /><span className='linier'>Dream Job</span></h1>
                <p className='text-base md:text-lg font-medium tracking-wide mb-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='py-3 px-4 md:py-5 md:px-7 btn-linier rounded-lg text-white text-xl font-extrabold tracking-wide'>Get Started</button>
            </div>
            <div className=''>
                <img src={user} alt=""  className='object-cover'/>
            </div>
        </div>
    );
};

export default HomeBanner;