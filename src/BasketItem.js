import React from 'react';
import StarIcon from '@material-ui/icons/Star';

import './BasketItem.css';
import { useStateValue } from './StateProvider';

function BasketItem({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeItemFromCart = () => {
        dispatch(
            {
                type: 'REMOVE_FROM_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                }
            }
        );
    }


    return (
        <div className="basketItem">
            <img className="basketItem__image" src={image} alt="" />
            <div className="basketItem__info">
                <p>{title}</p>
                <p className="basketItem__pricing">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="basketItem__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </div>
                <button className="basketItem__removeButton" onClick={removeItemFromCart} >Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem
