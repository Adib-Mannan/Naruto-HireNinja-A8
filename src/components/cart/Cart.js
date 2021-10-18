import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let ninjaAddedName = [' ']
    for (const ninja of cart) {
        total = total + ninja.salary;
        const newNinjaAddedName = [' ,', ninja.name];
        ninjaAddedName.push(newNinjaAddedName);
    }
    const user = <FontAwesomeIcon icon={faUser} />
    return (
        <div>
            <div class="card  width: 18rem">
                <ul class="list-group list-group-flush border-light">
                    <li class="list-group-item border-light bg-dark text-white">{user}  Ninja Added : {props.cart.length}</li>
                    <li class="list-group-item border-light bg-dark text-white">Total :{total} </li>
                    <li class="list-group-item border-light bg-dark text-white">Ninjas Added Name: {ninjaAddedName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;