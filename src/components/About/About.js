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
		<Container fluid className="about-wrapper">
			<Row>
				<Col sm="12" md="6" lg="5" xl="4" className="p-0">
					<img
						src={process.env.PUBLIC_URL + "/profile.jpg"}
						class="img-fluid profile-photo"
						alt="Robert"
					></img>
				</Col>
				<Col className="p-3" id="about">
					<h1 className="display-4 fugaz-one text-center">About</h1>
					<p>
						Full Stack Web Developer leveraging a background in education to build a more intuitive
						user experience on the web.
					</p>
					<p>
						Recently completed a certificate in Full-Stack Development from the University of Texas
						at Austin with newly developed skills in HTML, CSS, JavaScript, Node.js, React, and
						responsive web design.
					</p>
					<div className="text-center pt-3">
						<a class="btn btn-lg btn-success mx-2" href="https://github.com/robertalanis" target="blank">
							GitHub
						</a>
						<a class="btn btn-lg btn-outline-dark mx-2" href="https://www.linkedin.com/in/robert-alanis/" target="blank">
							LinkedIn
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
