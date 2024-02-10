import "./CartSection.scss"
import { useSelector } from "react-redux"
import { CardCartSection } from "./CardCartSection/CardCartSection"
import { Button } from "../../UI/Button/Button"
import { useNavigate } from "react-router-dom"

const CartSection = () => {
	const { cart, totalPrice } = useSelector(state => state.cart)
	const totalCount = cart.reduce((sum, item) => item.count + sum, 0)
	const navigate = useNavigate()

	return (
		<>
			<section className='cartSection'>
				{cart.map(item => (
					<CardCartSection key={item.id} {...item} />
				))}
			</section>
			<div className='price'>
				<p>
					Всего пицц: <b>{totalCount} шт</b>
				</p>
				<p>
					Сумма заказа: <span>{totalPrice} ₽</span>
				</p>
			</div>
			<div className='price__btn'>
				<Button
					onClick={() => navigate("/")}
					className='price__btn__exit'
					variant='gray'>
					Вернуться
				</Button>
				<Button
					// onClick={onClickNavigate}
					style={{
						width: "100%",
					}}
					variant='orange'>
					Оплатить
				</Button>
			</div>
		</>
	)
}

export default CartSection
