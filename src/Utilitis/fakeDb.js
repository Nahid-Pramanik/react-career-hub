
const getStoredJobApplication = () => {
    const storJobs = localStorage.getItem('applied-job');
    if(storJobs){
        return JSON.parse(storJobs);
    }
    return [];
}

const saveJObApplication = (id) => {
    const storedJobs = getStoredJobApplication();
    if(!storedJobs.includes(id)){
        storedJobs.push(id);
        localStorage.setItem('applied-job', JSON.stringify(storedJobs));
    }
}

export {getStoredJobApplication, saveJObApplication}