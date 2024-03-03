import React from 'react';

function UserCartComponent({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
}) {
    return (
        <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
            <h2>My Cart</h2>
            {cartCourses.length === 0 ? (
                <p className="empty-cart">Geek, your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartCourses.map((item) => (
                            <li key={item.product.id} className="cart-item">
                                {/* ... (rest of the code remains the same) ... */}
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-section">
                        <div className="checkout-total">
                            <p className="total">Total Amount: ₹{totalAmountCalculationFunction()}</p>
                        </div>
                        <button
                            className="checkout-button"
                            disabled={cartCourses.length === 0 || totalAmountCalculationFunction() === 0}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserCartComponent;
