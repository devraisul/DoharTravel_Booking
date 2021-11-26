import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router";
const MyOrdersTableRow = (props) => {
  const {
    _id,
    userName,
    userEmail,
    userProfile,
    destinationName,
    price,
    status,
  } = props.order;
  const history = useHistory();
  const handelDelete = (_id) => {
    const oppinion = window.confirm("Are you sure to delete this data?");
    if (oppinion) {
      axios.delete(`https://obscure-wave-87774.herokuapp.com/orders/${_id}`).then((res) => {
        history.go();
      });
    }
  };
  return (
    <>
      <tr className="bg-gray-800">
        <td className="p-3">
          <div className="flex align-items-center">
            <img
              className="rounded-full h-12 w-12  object-cover"
              src={userProfile}
              alt=""
            />
            <div className="ml-3 text-left md:block hidden">
              <div className="">{userName}</div>
              <div className="text-gray-500">{userEmail}</div>
            </div>
          </div>
        </td>
        <td className="p-3">{destinationName}</td>
        <td className="p-3 font-bold">{price}$</td>
        <td className="p-3">
          {status === "done" ? (
            <span className="bg-green-300 text-green-700 py-1 rounded-md px-2">
              {status}
            </span>
          ) : (
            <span className="bg-yellow-300 text-yellow-700 py-1 rounded-md px-2">
              {status}
            </span>
          )}
        </td>
        <td className="p-3 ">
          <button
            onClick={() => {
              handelDelete(_id);
            }}
            className="ml-2 text-red-500 text-xl"
          >
            <AiFillDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyOrdersTableRow;
