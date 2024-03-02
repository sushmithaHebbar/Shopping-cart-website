import React from 'react';

function ShoppingCartIcon({ count }) {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                side="right-end"
                width="34"
                height="24"
                viewBox="0 0 24 24"
            >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M2 4h2l3.26 11.09 2.22-6.14 1.96 3.91L15.36 7H6v2h8.64l1.5 3H5v2h11.23l2 4H2zm20 16l-1.46-4H5.42l-2-4H22zM8.83 9h6.34l.48 1.27L14 13h-4l1.35-3.73z" />
            </svg>
            <span>{count}</span>
        </div>
    );
}

export default ShoppingCartIcon;
