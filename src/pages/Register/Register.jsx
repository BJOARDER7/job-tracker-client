import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import regImg from "../../assets/login.svg";


const Register = () => {
  const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();   
    
        const form = event.target;
        const name = form.name.value;        
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
    
        // password validation
        if(password.length < 6){
          toast.error('Password at least 6 character');     
          return;
        }
        else if (!/[A-Z]/.test(password)){
          toast.error('Password must have an Uppercase letter');      
          return;
        }
        else if (!/[a-z]/.test(password)){
          toast.error('Password must have a Lowercase letter');      
          return;
        }
    
    
        // create user
      createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "You have register successfully",
          showConfirmButton: false,
          timer: 1500
        });
        
      })
      .catch(error => {      
        toast.error(error.message);    
      })
    
      }


    return (
        <div className="hero bg-base-200 min-h-screen">
      
  <div className="hero-content flex-col lg:flex-row">
  <div className="">
      <img src={regImg} alt="Register" />      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          className="input input-bordered" required />                   
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>       
        <div className="form-control mt-6">
          <button className="btn btn-primary text-xl">Register</button>
        </div>
      </form>
      <div className="text-center my-2">
        <p>Have an account ? Please <Link className="text-green-600 font-bold" to="/login">Login</Link></p>        
      </div>      
      
    </div>
  </div>
  <div><Toaster/></div>
</div>
    );
};

export default Register;