import React from 'react';
import { Footer } from '../footer';

const Layout = ({ children }) => {
	return (
		<div className="flex-1 flex flex-col h-full items-center mt-20 ">
			<div className="flex-1 my-6">{children}</div>
			<Footer />
		</div>
	);
};

export { Layout };
