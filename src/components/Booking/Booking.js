import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
  const { _id } = useParams();
  const history = useHistory();
  const {user} = useAuth();
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://obscure-wave-87774.herokuapp.com/destinations").then((res) => {
      setDestinations(res.data.destinations);
      setIsLoading(false);
    });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('https://obscure-wave-87774.herokuapp.com/orders',data).then((res)=>{
      if (res.data.insertedId) {
        alert("Order Placed Successfully.");
        reset();
        history.push('/my_orders')
      }
    })
  };
   
  return (
    <div class=" py-1">
      <div class="w-full lg:w-8/12 px-4 mx-auto mt-6  bg-Gray-500">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            {!isLoading && (destinations.filter((data) => data._id === _id).map((destination) => (
                <form  onSubmit={handleSubmit(onSubmit)} className="">
                  <h6 class="text-blueGray-400 text-2xl mt-3 mb-6 font-bold uppercase">
                    User <span className="text-yellow-500">Information</span>
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                         {...register("userName", { required: true})}
                        readOnly
                          type="text"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-400 bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={user.displayName}
                        />
                        
                      </div>
                      <div class="hidden relative w-full mb-3">
                      
                        <input
                         {...register("userProfile", { required: true})}
                        readOnly
                          type="text"
                          class="hidden border-0 px-3 py-3 placeholder-blueGray-300 text-gray-400 bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={user.photoURL}
                        />
                        
                      </div>
                      <div class="hidden relative w-full mb-3">
                        
                        <input
                         {...register("status", { required: true})}
                        readOnly
                          type="text"
                          class="hidden border-0 px-3 py-3 placeholder-blueGray-300 text-gray-400 bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value='processing'
                        />
                        
                      </div>
                      
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address
                        </label>
                        <input
                        {...register("userEmail", { required: true})}
                        readOnly
                          type="email"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-400 bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={user.email}
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Destination
                        </label>
                        <input
                        {...register("destinationName", { required: true})}
                          type="text"
                          readOnly
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-400 bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={destination.destinationName}
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Price
                        </label>
                        <input
                        {...register("price", { required: true})}

                          type="text"
                          readOnly
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-400 bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={destination.price}
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-blueGray-300" />

                  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact <span className="text-yellow-500">Information</span>
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                        {...register("address", { required: true})}
                          type="text"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Address....."
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          City
                        </label>
                        <input
                        {...register("city", { required: true})}
                          type="text"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="City...."
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Country
                        </label>
                        <input
                        {...register("country", { required: true})}
                          type="text"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Country...."
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Postal Code
                        </label>
                        <input
                        {...register("postCode", { required: true})}
                          type="text"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Postal Code...."
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Booking"
                    className="mt-5 cursor-pointer py-3 px-8 bg-yellow-500 text-gray font-bold"
                  />
                </form>
              )))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
