import React, {useState, useEffect} from "react";
import '../Cart.css';
import Amount from "./Amount.jsx";
import PaymentMethods from "./PaymentMethods.jsx";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const data = [
                {id: 1, name: 'Latte', price: 4, quantity: 4},
                {id: 2, name: 'Espresso', price: 5, quantity: 1}
            ];
            setCartItems(data);
        };
        fetchCartItems()
    }, []);

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCartItems(cartItems.map(item => item.id === itemId ? {...item, quantity: newQuantity} : item
        ));
    }
    const total = cartItems.reduce((acc, item) => acc + (item.price*item.quantity),0);

    return (
        <div className="cart container">
            <h1>Your Cart</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td className="quantity-input">
                            <div className="input-group input-group-sm">

                                <input
                                    type="text"
                                    className="form-control text-right" // align to right
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />

                            </div>
                        </td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="total mt-3">
                {/*Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}*/}
                <Amount title={total}></Amount>
            </div>
            <PaymentMethods amount={total}></PaymentMethods>
        </div>
    );
};
export default Cart;