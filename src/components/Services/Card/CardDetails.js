import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const CardDetails = () => {
  const { _id } = useParams();

  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://obscure-wave-87774.herokuapp.com/destinations").then((res) => {
      setDestinations(res.data.destinations);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
            {destinations.filter((data) => data._id === _id).map((destination) => (
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={destination.imageUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {destination.country}
                </h2>
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                {destination.destinationName}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    
                    <span className="ml-3">{destination.rating} Reviews</span>
                  </span>
                  
                </div>
                <p className="leading-relaxed">
                {destination.description}
                </p>

                <div className="flex mt-6">
                  <span className="title-font font-medium text-2xl text-white">
                    $ {destination.price}
                  </span>
                  <NavLink
                    to={`/booking/${destination._id}`}
                    className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                  >
                    Book Now
                  </NavLink>
                  
                </div>
              </div>
            </div>
            ))}
                
      </div>
    </div>
  );
};

export default CardDetails;
