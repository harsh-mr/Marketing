import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.webp";
import img3 from "../Assets/img3.jpg";


const Experience = () => {
	return experience && (
		<section className="px-0">
			<Container className="px-0" style={{width:"100%",maxWidth:"100%"}}>
				<div className="d-flex px-0 ">
					{/* <div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div> */}
					{/* <div className="pl-4">
						<h4 className="display-3 text-info">Experience</h4>
					</div> */}
				</div>
				<Row className="row-grid align-items-start">
					<img src={img3.src}></img>
					
				 {/* <ExperienceCard  data={img1} />
				 <ExperienceCard data={img2} /> */}
					
				</Row>
			</Container>
		</section>
	);
};

export default Experience;
