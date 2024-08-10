import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navLink = <>
     <li className="px-1">
        <NavLink to="/">Home</NavLink>
      </li>  
     <li className="px-1">
        <NavLink to="/alljobs">All Jobs</NavLink>
      </li>  
     <li className="px-1">
        <NavLink to="/appliedjobs">Applied Jobs</NavLink>
      </li>  
     <li className="px-1">
        <NavLink to="/addjob">Add A Job</NavLink>
      </li>  
     <li className="px-1">
        <NavLink to="/myjobs">My Jobs</NavLink>
      </li>  
     <li className="px-1">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/"><img className="h-16 w-16 rounded" src={logo} alt="" /></Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
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
              <div className="w-4 md:w-10 rounded-full">
                <img alt="User" src={user.photoURL} />
              </div>
            </div>
            <a onClick={handleLogOut} className="btn btn-sm btn-outline ms-2">
              Sign Out
            </a>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
          <button className="btn btn-accent w-16 md:w-24">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-accent w-16 md:w-24">Register</button>
        </Link>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
