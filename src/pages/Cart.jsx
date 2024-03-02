import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../component/CartItem"; // Assuming CartItem is styled separately
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 pb-16"> {/* Main container with padding */}
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for cart items & summary */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden"> {/* Cart items container */}
            <h2 className="text-lg font-medium p-4 border-b border-gray-200">Your Cart</h2>
            <div className="flex flex-col space-y-4 p-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden"> {/* Summary container */}
            <h2 className="text-lg font-medium py-4 px-4 border-b border-gray-200">Summary</h2>
            <div className="flex justify-between p-4">
              <p>Total Items:</p>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between p-4">
              <p>Total Amount:</p>
              <span className="text-lg font-semibold">${totalAmount}</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen"> {/* Empty cart message */}
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
