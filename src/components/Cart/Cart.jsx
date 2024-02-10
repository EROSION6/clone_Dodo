import "./Cart.scss"
import cross from "../../assets/cross-svgrepo-com.svg"
import { CardCartItems } from "./CardCartItems/CardCartItems"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { Empty } from "./Empty/Empty"
import { PriceMenu } from "./PriceMenu/PriceMenu"

const Cart = ({ isOpen }) => {
	const { cart } = useSelector(state => state.cart)

	const animationSection = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3, ease: "easeOut" },
		},
	}

	const animationMenu = {
		hidden: { opacity: 0, right: "-100%" },
		visible: {
			opacity: 1,
			right: "0%",
			transition: { duration: 0.3, ease: "easeOut" },
		},
	}
	return (
		<motion.div
			variants={animationSection}
			initial='hidden'
			animate='visible'
			onClick={() => isOpen(false)}
			className='overflow'>
			<motion.div
				variants={animationMenu}
				onClick={e => e.stopPropagation()}
				className='overflow__content'>
				<div
					onClick={() => isOpen(false)}
					className='overflow__content__cross'>
					<img width={50} height={50} src={cross} alt='cross' />
				</div>
				{cart.length === 0 ? (
					<Empty isOpen={isOpen} />
				) : (
					<>
						<div className='overflow__content__card'>
							{cart.map(item => (
								<CardCartItems key={item.id} {...item} />
							))}
						</div>
						<PriceMenu isOpen={isOpen} />
					</>
				)}
			</motion.div>
		</motion.div>
	)
}

export default Cart
