import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaBeer } from "react-icons/fa";
import "./Contact.css";

const Contact = (props) => {
	return (
		<Container fluid id="contacxt" className="contact-wrapper">
			<Row>
				<Col sm="6" className="text-center align-middle">
					<h1 className="display-5 fugaz-one">Contact</h1>
				</Col>
				<Col sm="6" className="contact-icons-wrapper">
					<Row className="text-center p-5">
						{/*<Col xs="12">
							<h1 className="display-5 fugaz-one">Contact</h1>
						</Col>*/}
						<Col xs="6">
							<h1 className="display-1 pb-5">
								<FaBeer />
							</h1>
						</Col>
						<Col xs="6">
							<h1 className="display-1 pb-5">
								<FaBeer />
							</h1>
						</Col>
						<Col xs="6">
							<h1 className="display-1">
								<FaBeer />
							</h1>
						</Col>
						<Col xs="6">
							<h1 className="display-1">
								<FaBeer />
							</h1>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
