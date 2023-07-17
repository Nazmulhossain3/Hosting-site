import LogInForm from "../../Component/LogInForm";
import VPStitlle from "../../Component/VPStitlle";

const Home = () => {
    return (
        <div className="bg-[#0B0C1B]">
          <div className="flex flex-col md:flex-row">
          <VPStitlle></VPStitlle>
          <LogInForm></LogInForm>
          </div>
       
       
        </div>
    );
};

export default Home;