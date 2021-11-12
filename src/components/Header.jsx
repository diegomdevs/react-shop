import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const { state, toggleMenu, toggleOrder } = useContext(AppContext);
	

	return (
		<div className="Menux">
			<nav>
				<img src={menu} alt="menu" className="menu" />
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
				{state.isOrderOpen && <MyOrder />}
			</nav>
		</div>
	);
}

export default Header;
