import React from "react"
import "./CardItems.scss"
import { Button } from "../../../UI/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { addPizza } from "../../../store/sliceCart"

export const CardItems = ({ id, title, price, info, imagesUrl }) => {
	const dispatch = useDispatch()

	const counter = useSelector(state =>
		state.cart.cart.find(b => b.id === id),
	)

  const totalCounter = counter ? counter.count : 0

	const addedClickItems = () => {
		dispatch(
			addPizza({
				id,
				title,
				price,
				info,
				imagesUrl,
			}),
		)
	}

	return (
		<article className='cardItems'>
			<div className='cardItems__top'>
				<img src={imagesUrl} alt={title} />
			</div>
			<div className='cardItems__bottom'>
				<h3>{title}</h3>
				{info && <p>{info.substring(0, 60)}</p>}
			</div>
			<footer className='cardItems__footer'>
				<b>от {price}</b>
				<Button onClick={addedClickItems} variant='gray'>
					{totalCounter > 0 && <b style={{ paddingRight: "5px", color: "#FF6900" }}>
						{totalCounter}
					</b>}
					Добавить
				</Button>
			</footer>
		</article>
	)
}
