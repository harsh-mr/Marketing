import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";
import img from "../Assets/img1.png";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	console.log(img);
	return (
		<Col lg="6">
			<Fade left duration={2000}>
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
				>
					<CardBody className="">
						<img
							src={data.src}
							style={{
								objectFit: "cover",
								left: 0,
								right: 0,
								top: "7rem",
								marginLeft: "auto",
								marginRight: "auto",
								width: "100%",
								height: "100%",
								borderRadius: "5%",
							}}
							className="shadow mb-3"
							alt={"../Assets/img1.png"}
						/>
				
				
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
