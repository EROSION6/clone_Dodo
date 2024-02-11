import CartSection from "../../components/CartSection/CartSection"
import "./CartPage.scss"
import carts from "../../assets/cart-shopping-svgrepo-com.svg"
import trash from "../../assets/trash-svgrepo-com.svg"
import { useDispatch } from "react-redux"
import { clearPizza } from "../../store/sliceCart"

const CartPage = () => {
	const dispatch = useDispatch()
	return (
		<main className='cartPage'>
			<div className='cartPage__text'>
				<h2>
					<img width={30} height={30} src={carts} alt='cart' />
					Корзина
				</h2>
				<button onClick={() => dispatch(clearPizza())}>
					<img width={30} height={30} src={trash} alt='trash' />
					Очистить Корзину
				</button>
			</div>
			<CartSection />
		</main>
	)
}

export default CartPage
