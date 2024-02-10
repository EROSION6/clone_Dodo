import cross from "../../../assets/carts.svg"
import "./CardCartItems.scss"
import { useDispatch } from "react-redux"
import { removePizza } from "../../../store/sliceCart"

export const CardCartItems = ({ title, price, imagesUrl, info, id }) => {
	const dispatch = useDispatch()

	const removeClickPizza = () => {
		dispatch(removePizza(id))
	}

	return (
		<article className='cardCartItems'>
			<div className='cardCartItems__img'>
				<img src={imagesUrl} alt={title} />
				<div className='cardCartItems__img__info'>
					<h3>{title}</h3>
					{info && <p>{info.substring(0, 20)}</p>}
					<b>{price} ₽</b>
				</div>
			</div>
			<footer className='cardCartItems__footer'>
				<img
					onClick={removeClickPizza}
					width={40}
					height={40}
					src={cross}
					alt='cross'
				/>
			</footer>
		</article>
	)
}
