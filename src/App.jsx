import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./pages/Home"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import Footer from "./components/Footer/Footer.jsx"
import CartPage from "./pages/CartPage.jsx"

function App() {
	return (
		<div className='container'>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='cart' element={<CartPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
