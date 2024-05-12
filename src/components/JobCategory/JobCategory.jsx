import { useEffect, useState } from 'react';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="my-32 ">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Job Category List</h1>
                <p className="text-base font-medium mb-8
                ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center ">
                {
                    categories.map(categorie =>
                            <div key={categorie.id} className="bg-violet-100 rounded-lg my-6">
                                <img src={categorie.logo} alt="" className="ml-6 md:ml-10 mt-6 md:mt-10 mb-4 md:mb-7 p-3 md:p-4 bg-slate-200 rounded-md h-16 w-16" />
                                <div className="ml-6 md:ml-10 mb-6 md:mb-10 md:mr-20 mr-10">
                                    <h5 className="text-xl font-extrabold mb-2">{categorie.category_name}</h5>
                                    <p className="text-base font-medium">{categorie.availability}</p>
                                </div>
                            </div>
                    )
                }

            </div>


        </div>
    );
};

export default JobCategory;