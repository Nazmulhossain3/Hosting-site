/* eslint-disable react/no-unescaped-entities */
import bell from '../assets/Hosting-job-task/bell.svg'

const VPStitlle = () => {
    return (
        <div className=" text-white p-12">
            <h2 className="text-5xl font-bold">VPS HOSTING POWERFUL AND RELIABLE !</h2>
            <p className="opacity-50 py-6">Check out the services we offer below. We're determined to provide these services at the best quality - customer satisfaction and convenience are of the utmost importance for us.</p>
            <div className='flex gap-5 py-1 w-96 rounded-3xl items-center bg-[#1A1B2E] mt-6'>
            <img className='bg-white p-2 rounded-full' src={bell} alt="" />
            <p>We don't ask for any personal information</p>
            </div>

            <div className='flex gap-6 mt-6'>
            <button className=' my-6 px-3 py-2 text-white bg-[#263CDF]' >Get Started</button>
            <button className=' my-6 px-3 py-2 text-white bg-[#1A1B2E]' >Learn More</button>


            </div>
        </div>
    );
};

export default VPStitlle;