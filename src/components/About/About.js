import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

import "./About.css";

const About = (props) => {
	return (
		<Container fluid id="about" className="about-wrapper">
			<Row>
				<Col sm="6" className="p-0">
					<img
						src={process.env.PUBLIC_URL + "/profile.jpg"}
						class="img-fluid profile-photo"
						alt="Photo"
					></img>
				</Col>
				<Col sm="6" className="p-5">
					<h1 className="display-4 fugaz-one">About</h1>
					Recent graduate from The Coding Boot Camp at UT Austin
				</Col>
			</Row>
		</Container>
	);
};

export default About;
