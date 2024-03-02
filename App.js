// App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './productcontents/SearchComponent';
import ShowCourseComponent from './productcontents/ShowCourseComponent';
import UserCartComponent from './productcontents/UserCartComponent';
import ShoppingCartIcon from './productcontents/ShoppingCartIcon'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './productcontents/Login';
import Signup from './productcontents/Signup';

function App() {
    const [courses, setCourses] = useState([
		{ id: 1, 
			name: ' Wireless In-Ear Headphones', 
			price: 1000, 
			image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/jbl-1.png?resize=1536,1024'
			},
			{ id: 2, 
			name: ' Bag', 
			price: 699, 
			image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317605561/FW/EK/SB/116685235/waterproof-school-bag-500x500.png'
			},
			{ id: 3, 
			name: 'Bluetooth speaker', 
			price: 799, 
			image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png'
			},
		{ id: 4, 
		  name: 'Cosmetics', 
		  price: 1500, 
		  image: 'https://rukminim2.flixcart.com/image/416/416/kq5iykw0/makeup-kit/3/k/u/beauty-new-99-beauty-cosmetics-original-imag486zybawksgb.jpeg?q=70&crop=false'
		},
		{ id: 5, 
		  name: 'T-shirts', 
		  price: 499, 
		  image: 'https://rukminim2.flixcart.com/image/612/612/l1jmc280/t-shirt/q/z/w/xl-king-logo-hf16-y-teewink-original-imagd2gtkfxqqhdp.jpeg?q=70'
	    },
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

const addCourseToCartFunction = (GFGcourse) => {
	const alreadyCourses = cartCourses
						.find(item => item.product.id === GFGcourse.id);
	if (alreadyCourses) {
		const latestCartUpdate = cartCourses.map(item =>
			item.product.id === GFGcourse.id ? { 
			...item, quantity: item.quantity + 1 } 
			: item
		);
		setCartCourses(latestCartUpdate);
	} else {
		setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
	}
};

const deleteCourseFromCartFunction = (GFGCourse) => {
	const updatedCart = cartCourses
						.filter(item => item.product.id !== GFGCourse.id);
	setCartCourses(updatedCart);
};

const totalAmountCalculationFunction = () => {
	return cartCourses
		.reduce((total, item) => 
					total + item.product.price * item.quantity, 0);
};

const courseSearchUserFunction = (event) => {
	setSearchCourse(event.target.value);
};

const filterCourseFunction = courses.filter((course) =>
	course.name.toLowerCase().includes(searchCourse.toLowerCase())
);


    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/cart">
                        <ShoppingCartIcon count={cartCourses.length} />
                    </Link>
                </nav>

				<Routes> {/* Wrap Routes around Route components */}
                    <Route path="/" element={<SearchComponent searchCourse={searchCourse} courseSearchUserFunction={courseSearchUserFunction} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
               
                    <main className="App-main">
                        <ShowCourseComponent
                            courses={courses}
                            filterCourseFunction={filterCourseFunction}
                            addCourseToCartFunction={addCourseToCartFunction}
                        />
                        <UserCartComponent
                            cartCourses={cartCourses}
                            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                            totalAmountCalculationFunction={totalAmountCalculationFunction}
                            setCartCourses={setCartCourses}
                        />
                    </main>
                

            </div>
        </Router>
    );
}

export default App;
