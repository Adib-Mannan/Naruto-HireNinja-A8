import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Ninja from '../Ninja/Ninja';
import './Team.css'
const Team = () => {
    const [ninjas, setNinjas] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./ninjas.json')
            .then(res => res.json())
            .then(data => setNinjas(data))
    }, [])
    const handleAddToCart = (ninja) => {
        const newCart = [...cart, ninja];
        setCart(newCart);
    }
    return (
        <div className="team-container">
            <div className="ninjas-container">
                <div className=" row row-cols-lg-3  row-cols-md-3 g-4">
                    {
                        ninjas.map(ninja => <Ninja ninja={ninja} key={ninja.key} handleAddToCart={handleAddToCart}></Ninja>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;