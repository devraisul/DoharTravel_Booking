import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const { user, signinWithGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  if (user.email) {
    history.push(url);
  }
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4 mb-20">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Log in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    onClick={signinWithGoogle}
                    className="bg-white active:bg-gray-100 text-gray-800  px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-sm font-medium"
                    type="button"
                  >
                    <FcGoogle />
                    <span className="ml-2">Google</span>
                  </button>
                </div>
                
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
