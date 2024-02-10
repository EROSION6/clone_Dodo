import React from "react";
import "./Card.scss";
import cross from "../../assets/carts.svg";
import { useDispatch } from "react-redux";
import { removePizza } from "../../store/sliceCart";

export const Card = ({ title, price, info, imagesUrl, id }) => {
	const dispatch = useDispatch();

	return (
		<article className='cardEveryItems'>
			<div className='cardEveryItems__img'>
				<img src={imagesUrl} alt={title} />
			</div>
			<div className='cardEveryItems__info'>
				<h3>{title}</h3>
				{info && <p>{info.substring(0, 20)}</p>}
				<b>{price} ₽</b>
			</div>
			<footer className='cardEveryItems__footer'>
				<img
					onClick={() => dispatch(removePizza(id))}
					width={40}
					height={40}
					src={cross}
					alt='cross'
				/>
			</footer>
		</article>
	);
};
