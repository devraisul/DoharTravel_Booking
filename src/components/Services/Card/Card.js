import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const {_id, destinationName, imageUrl, country, price, rating, description} = props.destination;
  return (
   
<div className=" relative  flex items-center justify-center px-0 w-full md:w-72">
    <div className="container">
      <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-5">
        <div className="flex flex-col m-auto">
          <div className="">
            <div className="relative h-62 w-full mb-3">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-yellow-500 shadow hover:shadow-md text-gray-500 rounded-full w-18 h-8 text-center p-1">Save 11%
                </button>
              </div>
              <img
                src={imageUrl}
                alt="Just a flower"
                className=" w-full object-cover object-center  rounded-2xl h-52 "
              />
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                
                  <div className="w-full flex-none text-sm flex  text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white-400 whitespace-nowrap mr-3">
                    {rating}
                  </span>
                  <span className="mr-2 text-gray-400">{country}</span>
              

                </div>
                
                <h1 className='text-4xl text-yellow-400 font-medium'>{destinationName}</h1>
                <div className="flex items-center w-full min-w-0">
                  

                  <h2 className="text-lg text-gray-200 truncate font-serif">
                  {description}
                  </h2>
                </div>
              </div>
              <div className="text-xl text-white font-semibold mt-1 mb-5 text-left">
                $ {price}
              </div>
              <div className="flex space-x-2 text-sm font-medium justify-evenly">
              <NavLink to={`/details/${_id}`} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-yellow-500 px-6 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-yellow-600 ">
                  <span>Details</span>
                </NavLink>
                <NavLink to={`/booking/${_id}`} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-yellow-500 px-6 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-yellow-600 ">
                  <span>Booking</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Card;
