import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import img1 from "../Assets/img6.jpg";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="p-3 pt-5 bg-gradient-info shadow-lg border-0">
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
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS OPEN FOR ALL
							</p>
							<p className="text-white mt-3">{prof.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								India
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
					<div style={{display:"flex"}}><p style={{margin:"auto" , fontFamily:"monospace"}}><a style={{textDecoration:"none"}} href="https://github.com/harsh-mr">Built by harsh-mr</a></p></div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
