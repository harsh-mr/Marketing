import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import logo6 from "../Assets/L2.png"

import { greetings, socialLinks } from "../portfolio";
import logo from "../Assets/logo3.svg"
import Headroom from "headroom.js";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
				>
					<Container>
						<NavbarBrand href="/" className="mr-lg-1">
							{/* <h2 className="text-white" id="nav-title">
								
							</h2> */}
							<img src={logo6.src} alt="logo" style={{width: "230px", height: "100%"}}/>
							{/* <div style={{display:'flex'}}><span style={{ fontWeight:'bold' ,color: 'rgb(239, 20, 169)',    fontFamily: 'PatsySans'
    ,fontSize: '228%'}}>ADS</span> <span style={{ fontWeight:'bold' ,color: 'white',    fontFamily: 'PatsySans'
    ,fontSize: '228%'}}>PREEM</span> </div> */}
						</NavbarBrand>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
