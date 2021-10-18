import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Ninja.css';

const Ninja = (props) => {
    const { name, country, age, img, clan, salary, team } = props.ninja;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='container'>
            <div className="col text-center">
                <div className="card text-white bg-dark h-100">
                    <img src={img} className="card-img-top img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h5 className="card-text">Country : {country}</h5>
                        <h5 className="card-text">Age :{age}</h5>
                        <h5 className="card-text">Clan : {clan}</h5>
                        <h5 className="card-text">team : {team}</h5>
                        <h5 className="card-text">salary : ${salary}</h5>
                        <button onClick={() => props.handleAddToCart(props.ninja)} className='btn btn-warning '>{shoppingCart} Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Ninja;