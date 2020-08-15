import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardTitle,
	CardSubtitle,
	CardBody,
	CardText,
	Button,
	CardImg,
} from "reactstrap";

import data from "../../data";

import "./Projects.css";

const Projects = (props) => {
	return (
		<Container fluid id="projects" className="projects-wrapper">
			<Row>
				<Col xs="12" className="text-center p-5">
					<h1 className="display-4 fugaz-one px-5">Projects</h1>
					<p>These are some highlighted projects I have worked on.</p>
				</Col>
				{data.Projects.map((project, i) => {
					return (
						<Col sm="6" lg="4" key={i} className="d-flex align-items-stretch">
							<Card className="mb-4">
								<CardImg
									top
									width="100%"
									src={process.env.PUBLIC_URL + project.media}
									alt="project"
								/>
								<CardBody lassName="d-flex align-items-baseline">
									<h5>{project.title}</h5>
									<hr />
									<CardText>{project.summary}</CardText>
									<div>
										{project.links.map(function (link, i) {
											return (
												<div key={i}>
													<a class="btn btn-block btn-secondary" href={link.github} target="blank">
														GitHub Repository
													</a>
													<a
														class="btn btn-block btn-outline-success"
														href={link.demo}
														target="blank"
													>
														Deployed App
													</a>
												</div>
											);
										})}
									</div>
								</CardBody>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Projects;
