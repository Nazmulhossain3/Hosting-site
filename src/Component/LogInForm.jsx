import google from '../assets/Hosting-job-task/google.svg'
import gitHub from '../assets/Hosting-job-task/github.svg'
const LogInForm = () => {
    return (
        <div className="p-12">

            <form className="bg-[#1A1B2E] p-12 rounded-md">
            <h2 className="text-2xl text-white font-bold">Try HostX hosting for free with a $100 credit</h2>
            <input className="md:w-72 rounded p-2 hover:bg-[#2F3146] mt-5 bg-[#1A1B2E] border-2 opacity-60 transition duration-200 " type="text" placeholder="Email"  />
            <input  className="md:w-72 rounded p-2 hover:bg-[#2F3146] mt-3 bg-[#1A1B2E] border-2 opacity-60 transition duration-200 " type="text" placeholder="Password" />
            <input type="submit" value="Register" className="md:w-72 text-white bg-green-500 rounded p-2 mt-3  border-2 opacity-60 transition duration-200 " />
            <div className="divider text-white mt-6">Or sign up with</div>
           
           
           <div className='flex gap-5 justify-center mt-6 opacity-80'>

            <div className='border bg-[#212235] hover:border-2 flex items-center gap-2 px-7 py-2 text-white'>
            <img className='' src={google} alt="" />
            <span>Google</span>
            </div>
            <div className='border bg-[#212235] hover:border-2  flex items-center gap-2 px-7 text-white'>
            <img src={gitHub} alt="" />
            <span>GitHub</span>
            </div>




           </div>
           
           <p className='text-xs text-white mt-6 text-justify px-8  opacity-60'>$100, 60-day free trial requires valid credit card.
            By signing up, you agree to the <a href=""><span className='text-[#3660FE] hover:underline '>Terms of Service</span></a>.</p>
            </form>
            
        </div>
    );
};

export default LogInForm;