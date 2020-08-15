import React from "react";

import { Container } from "reactstrap";
import "./Introduction.css";

const Introduction = (props) => {
	return (
		<Container fluid className="intro-wrapper">
			<h1 className="display-3 d-none d-md-block fugaz-one px-5">I'm a full-stack developer.</h1>
			<h1 className="display-4 d-block d-md-none fugaz-one px-5">I'm a full-stack developer.</h1>
		</Container>
	);
};

export default Introduction;
