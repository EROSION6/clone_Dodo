import "./Empty.scss"
import { Button } from "../../../UI/Button/Button"

export const Empty = ({ isOpen }) => {
	return (
		<div className='empty'>
			<img
				src='https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg'
				alt='empty'
			/>
			<div className='empty__text'>
				<strong>Ой, Пусто</strong>
				<p>
					Ваша корзина пуста, откройте «Меню» и выберите понравившийся
					товар. Мы доставим ваш заказ от 499 ₽
				</p>
			</div>
			<Button variant="gray" onClick={() => isOpen(false)}>Закрыть</Button>
		</div>
	)
}
