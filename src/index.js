import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App.defaultProps = {
	name: 'Chimezie Innocent',
	course: 'Big data with Apache Spark',
	date: 'May 30 2022'
};

ReactDOM.render(
	<React.StrictMode>
		<App {...window.templateProps} />
	</React.StrictMode>,
	document.getElementById('root')
);
