import React from 'react';
import './App.css';

import certificateImg from './certificate_img.png';

const App = ({ name, course, date }) => {
	console.log(name, course, date);

	return (
		<section className="certificate-home">
			<div className="certificate">
				<div className="gold-plate">
					<img src={certificateImg} alt="gold plated seal" />

					<h2>
						CERTIFICATE <br /> OF COMPLETION
					</h2>
				</div>

				<div className="name-and-course">
					<h5>this is to certify that</h5>
					<h1>{name}.</h1>
					<p>
						Has sucessfully completed the <span>{course}</span> Course <br /> Authorised by ilearn Cloud{' '}
					</p>
				</div>

				<footer>
					<h6>
						i<span>LEARN</span> CLOUD
					</h6>

					<div className="signatories">
						<div>
							<hr />
							<p>Head of Training</p>
						</div>

						<div>
							<hr />
							<p>Head of Training</p>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default App;
