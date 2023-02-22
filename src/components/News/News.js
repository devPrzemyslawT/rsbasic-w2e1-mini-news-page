import React from "react";

import "./News.css";

const News = props => {
	const { header, text } = props;
	return (
		<div className='news'>
			<h2>{header}</h2>
			<p>{text}</p>
		</div>
	);
};

export default News;
