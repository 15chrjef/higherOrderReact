import React from 'react';

const List = (props) => {
	let values = props.values;
	let listElements = values.map((value, index) => <li key={index}>{value}</li> )

	return (

		<ul>{listElements}</ul>
	)
}

const ContentBox = (props) => {
	return (
		<p>{props.content}</p>
	)
}

const TitledComponent = (WrappedComponent) => {
	return (props) => {
		return (
			<div>
				<h3>{props.title}</h3>
				<WrappedComponent {...props} />
			</div>
		)
	}
}

const TitledList = TitledComponent(List);
const TitledContentBox = TitledComponent(ContentBox)

module.exports = {
	TitledList,
	TitledContentBox
}



