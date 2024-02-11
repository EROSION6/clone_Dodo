import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../UI/Button/Button'
import { CardCartSection } from './CardCartSection/CardCartSection'
import './CartSection.scss'

const CartSection = () => {
	const { cart, totalPrice } = useSelector(state => state.cart)
	const totalCount = cart.reduce((sum, item) => item.count + sum, 0)
	const navigate = useNavigate()

	const handleSubmittedCarts = () => {
		navigate('/')
	}

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
					onClick={() => navigate('/')}
					className='price__btn__exit'
					variant='gray'
				>
					Вернуться
				</Button>
				<Button
					onClick={handleSubmittedCarts}
					style={{
						width: '100%',
					}}
					variant='orange'
				>
					Оплатить
				</Button>
			</div>
		</>
	)
}

export default CartSection
