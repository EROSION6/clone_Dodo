import React from "react"
import "./Header.scss"
import { Link } from "react-router-dom"
import logo from "../../../assets/dodopizza.svg"
import star from "../../../assets/star_77949.svg"

const Header = () => {
	return (
		<div className='header'>
			<div className='header__logo'>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<div className='header__logo__content'>
					<p>
						Доставка пиццы <Link to='/'>Кисловодск</Link>
					</p>
					<span>
						4.89 <img src={star} alt='star' />
					</span>
				</div>
			</div>
		</div>
	)
}

export default Header
