import "./PriceMenu.scss"
import { Button } from "../../../UI/Button/Button"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const PriceMenu = ({ isOpen }) => {
	const { totalPrice, cart } = useSelector(state => state.cart)

	const totalCount = cart.reduce((count, item) => count + item.count, 0)

	const navigate = useNavigate()

	const onClickNavigate = () => {
		isOpen(false)
		navigate("cart")
	}

	return (
		<div className='priceMenu'>
			<div className='priceMenu__info'>
				<p>
					Всего пицц: <b>{totalCount} шт</b>
				</p>
				<p>
					Сумма заказа: <span>{totalPrice} ₽</span>
				</p>
			</div>
			<div className='priceMenu__btn'>
				<Button
					onClick={() => isOpen(false)}
					className='priceMenu__btn__exit'
					variant='gray'>
					Закрыть
				</Button>
				<Button
					onClick={onClickNavigate}
					style={{ width: "100%" }}
					variant='orange'>
					Оплатить
				</Button>
			</div>
		</div>
	)
}
