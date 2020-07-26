import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css";

const Projects = (props) => {
	return (
		<Container fluid id="projects" className="projects-wrapper">
			<Row>
				<Col className="text-center p-5">
					<h1 className="display-2 fugaz-one">Projects</h1>
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
