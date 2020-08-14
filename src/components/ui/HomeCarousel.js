import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

import bloodDrive from "../../assets/img/carousel/blooddrive-hero.png";
import test2 from "../../assets/img/carousel/test2.png";

const Styles = styled.div`
	.carousel {
		width: 100%;
	}
`;

export const HomeCarousel = () => {
	return (
		<React.Fragment>
			<Styles>
				<Carousel pause={false}>
					<Carousel.Item>
						<img className="d-block w-100" src={bloodDrive} alt="First slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={test2} alt="Third slide" />
					</Carousel.Item>
				</Carousel>
			</Styles>
		</React.Fragment>
	);
};
