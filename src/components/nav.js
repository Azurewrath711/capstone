import { Link } from "react-router-dom"
import { useRef } from "react";
import logo from "../assets/images/logo1.png"

function NavBar() {
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle(
			"responsive-nav"
		);
	};

	return (
		<header>
			<h3 className="brand">
				
            </h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
                <img style={{ width: 150, height: 150 }}src={logo} alt="Gu-Pet Logo"/>
				<Link to="/Services">Services</Link>
				<Link to="/gallery">Gallery</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavBar}>
					<i class="fa fa-times" aria-hidden="true"></i>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavBar}>
                <i class="fa fa-bars" aria-hidden="true"></i>
			</button>
		</header>
	);
}

export default NavBar;