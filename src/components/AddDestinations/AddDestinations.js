import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddDestinations = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://obscure-wave-87774.herokuapp.com/destination", data)
      .then((res) => {
        console.log('hit');
        if (res.data.insertedId) {
          alert("Destination Added Successfully.");
          reset();
        }
      });
  };

  return (
    <div className="bg-gray-600 py-10 px-5">
     
      <div className="bg-gray-100 py-10 px-2 md:px-10 md:w-3/4 lg:w-1/2 mx-auto rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="">

          <h6 class="text-blueGray-400 text-4xl mt-3 mb-6 font-bold uppercase">
            Add <span className="text-yellow-500">Destination</span>
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-left text-gray-900 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Destination Name
                </label>
                <input
                  {...register("destinationName", { required: true })}
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Destination Name....."
                />
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-left text-gray-900 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Description....."
                />
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-left text-gray-900 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Image Url
                </label>
                <input
                  {...register("imageUrl", { required: true })}
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Image Url....."
                />
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-left text-gray-900 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Price....."
                />
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-left text-gray-900 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Rating
                </label>
                <input
                  {...register("rating", { required: true })}
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Rating....."
                />
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-left text-gray-900 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Location
                </label>
                <input
                  {...register("country", { required: true })}
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-gray-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Location....."
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
      </div>
    </div>
  );
};

export default AddDestinations;
