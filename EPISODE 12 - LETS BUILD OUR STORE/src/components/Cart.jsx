import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";
import { FaShoppingCart, FaTrash } from "react-icons/fa"; // Import icons
import Swal from "sweetalert2"; // Import SweetAlert2

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        Swal.fire({
        title: 'Clear your cart?',
        text: 'This will remove all items from your cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, clear it!',
        cancelButtonText: 'Cancel'
        }).then((result) => {
        if (result.isConfirmed) {
            dispatch(clearCart());
            Swal.fire(
            'Cleared!',
            'Your cart has been cleared.',
            'success'
            );
        }
        });
    };
    
    const totalItems = cartItems.length;
    
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-8 p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaShoppingCart className="text-indigo-600" />
            Your Cart
            {totalItems > 0 && (
                <span className="ml-2 text-sm bg-indigo-600 text-white px-2 py-1 rounded-full">
                {totalItems}
                </span>
            )}
            </h1>
            
            {totalItems > 0 && (
            <button
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md"
                onClick={handleClearCart}
            >
                <FaTrash />
                Clear Cart
            </button>
            )}
        </div>
        
        {totalItems === 0 ? (
            <div className="text-center py-16">
            <FaShoppingCart className="text-gray-300 text-6xl mx-auto mb-4" />
            <p className="text-xl text-gray-500">Your cart is empty</p>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition duration-200">
                Browse Menu
            </button>
            </div>
        ) : (
            <div className="bg-gray-50 rounded-lg p-4">
            <MenuList items={cartItems} />
            
            <div className="mt-6 border-t pt-6">
                <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Subtotal</span>
                <span>$XX.XX</span>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-200 shadow-md">
                Proceed to Checkout
                </button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Cart;