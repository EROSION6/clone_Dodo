import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navigation } from "../../date/Navigation"
import { Button } from "../../UI/Button/Button"
import Cart from "../Cart/Cart"
import Header from "./Header/Header"
import "./Navbar.scss"

const NavBar = () => {
	const [open, isOpen] = useState(false)
	return (
		<>
			<Header />
			<header className='navigate'>
				<div className='navigate__left'>
					<nav>
						{navigation.map(list => (
							<Link key={list.title} to='/'>
								{list.title}
							</Link>
						))}
					</nav>
				</div>
				<Button onClick={() => isOpen(!open)} variant='orange'>
					Корзина
				</Button>
			</header>
			{open && <Cart isOpen={isOpen} />}
		</>
	)
}

export default NavBar
