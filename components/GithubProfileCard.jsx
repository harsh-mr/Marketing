import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import img1 from "../Assets/img6.jpg";

const GithubProfileCard = () => {
	return (
		<Card className="p-3 pt-5 bg-gradient-info shadow-lg border-0 " style={{borderRadius:"0px"}}>
			<Container className="">
				<div className="p-0">
					<Row className="">
						<Col className="order-lg-2 px-5" lg="4">
							<img
								src={img1.src}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle 1-center 1-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Have a general Enquiry?</h2>
							<p className="lead text-white mt-3">
								If you have any general enquiry or would like to join our team, You can Contact us via Email : <a href={"mailto:vimal@adspreem.com"} style={{textDecoration:"none", color:"black"}}><span className="btn-inner--icon">
						<i className="fa fa-envelope" />
					</span></a>
							</p>

							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								India
							</div>
						</Col>
					</Row>
				</div>
					<div style={{display:"flex"}}><p style={{margin:"auto" ,fontWeight:"bold" , fontFamily:"monospace"}}>© 2023 Adspreem</p></div>
					<div style={{display:"flex"}}><p style={{margin:"auto" ,fontWeight:"bold" , fontFamily:"monospace"}}>All Rights Reserved </p></div>
					<div style={{display:"flex"}}><p style={{margin:"auto" , fontFamily:"monospace",fontWeight:"bold"}}><a style={{textDecoration:"none",color:"currentcolor"}} href="https://github.com/harsh-mr">Developed by harsh-mr</a></p></div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;