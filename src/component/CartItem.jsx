import { MdDelete } from "react-icons/md";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";
import { ToastContainer, toast } from "react-toastify"; // Assuming toast is from react-toastify

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-lg font-medium">{item.title}</h1>
        <p className="text-gray-600 line-clamp-3 overflow-hidden">
          {item.description}
        </p>
        <h1 className="text-lg font-medium">${item.price}</h1>
      </div>
      <button
        type="button"
        className="ml-auto flex items-center text-red-500 hover:text-red-700 focus:outline-none"
        onClick={removeFromCart}
      >
        <MdDelete size={24} />
        <span className="ml-1 text-sm">Remove</span>
      </button>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default CartItem;
