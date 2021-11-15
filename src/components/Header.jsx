import React, { useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const { state, toggleMenu, toggleOrder, toggleMenuMobile } = useContext(AppContext);
	

	return (
		<div className="Header">
			<nav>
				<img src={menu} alt="menu" className="menu" onClick={() => toggleMenuMobile()}/>
				<div className="navbar-left">
					<img src={logo} alt="logo" className="nav-logo" />
					<ul>
						<li>
							<a href="/">All</a>
						</li>
						<li>
							<a href="/">Clothes</a>
						</li>
						<li>
							<a href="/">Electronics</a>
						</li>
						<li>
							<a href="/">Furnitures</a>
						</li>
						<li>
							<a href="/">Toys</a>
						</li>
						<li>
							<a href="/">Others</a>
						</li>
					</ul>
				</div>
				<div className="navbar-right">
					<ul>
						
						<li className="navbar-email" onClick={() => toggleMenu()}>
							platzi@example.com
						</li>
						<li 
							className="navbar-shopping-cart" 
							onClick={() => toggleOrder()}>
							<img src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.isMenuOpen && <Menu />}
				{state.isMenuMobile && <MobileMenu />}
				{state.isOrderOpen && <MyOrder />}
			</nav>
		</div>
	);
}

export default Header;
