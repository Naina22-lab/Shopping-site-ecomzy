import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
  };

  const [showFullDescription, setShowFullDescription] = React.useState(false); // State for description visibility

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-200 rounded-lg p-4 group hover:shadow-lg hover:border-blue-500 border rounded-lg p-4"> {/* Ensures equal height */}
      <img
        className="w-full h-48 object-cover"
        src={post.image}
        alt={post.title}
      />
      <div className="p-4 flex flex-col justify-between">
        <h3 className="font-bold text-lg mb-2">{post.title}</h3>
        <p className="text-gray-700 line-clamp-3 overflow-hidden"> {/* Tailwind for truncation */}
          {truncateDescription(post.description, 100)}
          {showFullDescription && <span className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={toggleDescription}>See More</span>}
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{post.price}</p>
          {cart.some((p) => p.id === post.id) ? (
            <button
              onClick={removeFromCart}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
