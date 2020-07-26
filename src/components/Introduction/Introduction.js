import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Introduction.css";

const Introduction = (props) => {
	return (
		<Container fluid className="intro-wrapper">
			<div>
				{/* Text hidden only on sm */}
				<h1 className="display-3 d-none d-md-block fugaz-one px-5">I'm a full-stack developer.</h1>
				{/* Text visible only on sm */}
				<h1 className="display-4 d-block d-md-none fugaz-one px-5">I'm a full-stack developer.</h1>
			</div>
		</Container>
	);
};

export default Introduction;
