import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import Card from "./Card/Card";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://obscure-wave-87774.herokuapp.com/destinations").then((res) => {
      setDestinations(res.data.destinations);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="my-8 w-full px-10">
      <p className="font-bold text-5xl mb-20">
        Our Wide Collection Of{" "}
        <span className="text-yellow-500">Destinations</span>
      </p>
     
        {!isLoading ? (
          destinations.length === 0 ? (
            <div className="flex justify-center items-center text-gray-800 text-5xl">
              No Data Found
            </div>
          ) : (
          <div className="items-center grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 w-full">
            {destinations.map((destination) => (
              
              <Card key={destination._id} destination={destination} />
              
            ))}
          </div>)
        ) : (
          <Spinner/>
        )}
 
    </div>
  );
};

export default Destinations;
