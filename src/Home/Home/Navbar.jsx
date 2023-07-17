import { Link } from 'react-router-dom';
import logo from '../../assets/Hosting-job-task/logo-d.png'
const Navbar = () => {
    return (
        <div className="navbar bg-[#0B0C1B] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
         <img className="btn btn-ghost normal-case p-2" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 gap-5 font-semibold font-sans">
            <Link to='/'>Home</Link>
            <li>VPS hosting server</li>
            <li>Shared hosting server</li>
            <li>Dedicated hosting service</li>
            <li>Domain</li>
        
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

    );
};

export default Navbar;