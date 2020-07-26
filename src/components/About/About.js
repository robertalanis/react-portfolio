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
						alt="Photo"
					></img>
				</Col>
				<Col className="p-5" id="about">
					<h1 className="display-4 fugaz-one">About</h1>
					<p>
						Full Stack Web Developer leveraging a background in education to build a more intuitive
						user experience on the web.
					</p>
					<p>
						Passionate about diversity and inclusion and approaching programming challenges from
						different angles to collaborate with others to create meaningful web applications.
					</p>
					<p>
						Recently completed a certificate in Full-Stack Development from the University of Texas
						at Austin with newly developed skills in HTML, CSS, JavaScript, Node.js, React, and responsive web
						design. 
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
