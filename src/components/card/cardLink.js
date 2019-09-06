import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardLink = props => {
	return (
		<>
			<style jsx>{`
				a {
					text-decoration: none;
					color: #32518B;
				}
				a:hover {
					color: #982c61;
					border-bottom: 2px solid #4a4a4a;
				}
			`}</style>
			<Link href={props.href}>
				<a className="link__body" title={props.text}>
					{props.text} <FontAwesomeIcon icon={faArrowRight} />
				</a>
			</Link>
		</>
	);
};

export default CardLink;
