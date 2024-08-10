import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.svg";

const Login = () => {
  const {logIn, googleLogin} = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);
    
        // login user
        logIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have login successfully",
            showConfirmButton: false,
            timer: 1500
          });
    
          // navigation after login
          // navigate(location?.state ? location.state : '/');
    
        })
        .catch(error => {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Your email or password doesn’t match",
            showConfirmButton: false,
            timer: 1500
          });
        })
      }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          // navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
          console.log(error);
        })
      }    
     

    return (
    <div className="hero bg-base-200 min-h-screen">      
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="Login" />      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2 md:mt-6">
          <button className="btn btn-primary text-xl">Login</button>
        </div>
      </form>
      <div className="mx-auto">
        <p className="text-center font-medium text-xl">Login with</p>
        <div className="flex items-center gap-2">
        <button onClick={handleGoogleLogin} className="btn btn-sm btn-primary my-2">Google</button>       
        </div>
      </div>
      <div className="text-center my-2">
        <p>Are you new ? Please <Link className="text-green-500 font-bold" to="/register">Register</Link></p>        
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;