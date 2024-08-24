import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navLink = <>
     <li className="px-1 text-xs md:text-base">
        <NavLink to="/">Home</NavLink>
      </li>  
     <li className="px-1 text-xs md:text-base">
        <NavLink to="/alljobs">All Jobs</NavLink>
      </li>  
     <li className="px-1 text-xs md:text-base">
        <NavLink to="/appliedjobs">Applied Jobs</NavLink>
      </li>  
     <li className="px-1 text-xs md:text-base">
        <NavLink to="/addjob">Add A Job</NavLink>
      </li>  
     <li className="px-1 text-xs md:text-base">
        <NavLink to="/myjobs">My Jobs</NavLink>
      </li>  
     <li className="px-1 text-xs md:text-base">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>             
  </>

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User login successfully"))
      .catch((error) => console.log(error));
  }


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-36 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/"><img className="h-8 md:h-16 w-8 md:w-16 rounded" src={logo} alt="" /></Link>
        
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}
    </ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <>
            <div
              title={user.displayName}
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-6 md:w-10 rounded-full">
                <img alt="User" src={user.photoURL} />
              </div>
            </div>
            <a onClick={handleLogOut} className="btn btn-xs md:btn-sm btn-outline h-6 md:h-10 w-20 md:w-24 ms-1 md:ms-2 text-xs md:text-base">
              Sign Out
            </a>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
          <button className="btn btn-xs md:btn-sm bg-[#818cf8] h-6 md:h-10 w-12 md:w-20 text-xs md:text-base">Login</button>
        </Link>        
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
