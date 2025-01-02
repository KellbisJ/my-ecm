import React from 'react';
import { Footer } from '../footer';

const Layout = ({ children }) => {
	return (
		<div className="flex-1 flex flex-col items-center mt-[68px] min-h-screen">
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	);
};

export { Layout };
