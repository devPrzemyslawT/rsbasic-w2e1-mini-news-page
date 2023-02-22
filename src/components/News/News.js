import React from "react";

import "./News.css";

const News = props => {
	const { header, text } = props;
	const textLenght = text.length > 35 ? `${text.slice(0, 34)}...` : text;
	return (
		<div className='news'>
			<h2>{header}</h2>
			<p>{textLenght}</p>
		</div>
	);
};

export default News;
