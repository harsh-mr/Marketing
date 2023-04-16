import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

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
							<img src={logo.src} alt="logo" style={{width: "200px", height: "30%"}}/>
						</NavbarBrand>
						<button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
								
									
									
									{/* <NavItem>
										<NavLink
											rel="noopener"
											aria-label="Facebook"
											className="nav-link-icon"
											href={''}
											target="_blank"
										>
											
											<span className="nav-link-inner--text d-lg ml-2">
												Contact Me
											</span>
										</NavLink>
									</NavItem> */}
								
							
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
