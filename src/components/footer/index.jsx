import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className="bg-teal-300 text-black p-4 flex flex-col items-center justify-between w-full h-auto">
			<p>
				This website was created using{' '}
				<a href="https://fakestoreapi.com" target="_blank" rel="noopener noreferrer" className="text-gray-950 hover:text-slate-200">
					Fake Store API
				</a>
			</p>
			<div className="flex flex-wrap justify-center md:justify-end">
				<a href="https://instagram.com/salazarkellbis/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagram} size="lg" className="mx-2" />
				</a>
				<a href="https://github.com/KellbisJ/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" />
				</a>
				<a href="https://www.linkedin.com/in/kellbis-salazar-arnaez-3a844833a/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} size="lg" className="mx-2" />
				</a>
				<a
					className="flex justify-center items-center"
					href="https://www.workana.com/freelancer/e072aa54f79255ba72152fc89c698d31"
					target="_blank"
					rel="noopener noreferrer">
					<img src="https://wkncdn.com/newx/assets/build/img/logos/mobile_logo.16f3a81b5.svg" alt="Workana" className="w-5 h-5 mx-2 " />
				</a>
			</div>
			<p className="md:mt-0 mt-4">Kellbis Salazar</p>
		</footer>
	);
};

export { Footer };
