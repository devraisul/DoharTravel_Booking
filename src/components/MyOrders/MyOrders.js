import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../Spinner/Spinner';
import MyOrdersTableRow from './MyOrdersTableRow';

const MyOrders = () => {
    const {user}=useAuth();
    const [orders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios.get("https://obscure-wave-87774.herokuapp.com/orders").then((res) => {
        setAllOrders(res.data.orders);
        setIsLoading(false);
      });
    }, []);


    return (
  
        <div className="w-full flex items-center justify-center min-h-screen bg-gray-900">
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible">
              <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                  <tr>
                    <th className="p-3">User Details</th>
                    <th className="p-3 text-left">Destination</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className='w-full'>
                  {!isLoading ? (
                    orders.length === 0 ? (
                    
                      <span className="flex justify-center w-full text-center items-center text-gray-800 text-5xl">
                        No Data Found
                      </span>
                      
                    ) : (
                        
                      orders.filter(data=>data.userEmail===user.email).map((order) => (
                        <MyOrdersTableRow key={order._id} order={order} />
                      ))
                    )
                  ) : (
              
                      <Spinner />
                 
                    
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

    );
};

export default MyOrders;