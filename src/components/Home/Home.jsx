import HomeBanner from "../HomeBanner/HomeBanner";
import calculetor from '../../assets/icons/accounts.png'


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>

            <section className="my-32 ">
                <h1 className="text-5xl font-extrabold">Job Category List</h1>
                <p className="text-base font-medium
                ">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center ">
                    <div>
                        <img src={calculetor} alt="" />
                        <h5>Account & Finance</h5>
                        <p>300 Jobs Available</p>
                    </div>
                    <div>
                        <img src={calculetor} alt="" />
                        <h5>Account & Finance</h5>
                        <p>300 Jobs Available</p>
                    </div>
                    <div>
                        <img src={calculetor} alt="" />
                        <h5>Account & Finance</h5>
                        <p>300 Jobs Available</p>
                    </div>
                    <div>
                        <img src={calculetor} alt="" />
                        <h5>Account & Finance</h5>
                        <p>300 Jobs Available</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;