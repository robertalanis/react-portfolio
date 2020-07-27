import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css";

const Projects = (props) => {
	return (
		<Container fluid id="projects" className="projects-wrapper">
			<Row>
				<Col className="text-center p-5">
					<h1 className="display-2 d-none d-md-block fugaz-one px-5">Projects</h1>
					<h1 className="display-3 d-block d-md-none fugaz-one px-5">Projects</h1>
				</Col>
			</Row>
			<Row>
				<Col></Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default Projects;
