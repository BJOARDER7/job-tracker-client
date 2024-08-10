import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.jpg';

const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="flex justify-center items-center">
        <img
          src={errorImg}
          className="max-w-full h-96 mx-auto"
          alt="Error"
        />
        </div>
        
        <Link to="/">
          <button className="btn btn-accent px-5 py-2 mt-4 text-black font-bold rounded">
             Back to Home !
          </button>
        </Link>
      </div>
  );
};

export default ErrorPage;