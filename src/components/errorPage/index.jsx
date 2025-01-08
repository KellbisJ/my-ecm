import React from 'react';

const ErrorPage = ({ errMsg }) => {
	return (
		<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-red-500">Error</p>
				<h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">An error occurred</h1>
				<p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
					{errMsg || 'Sorry, we encountered an error while trying to load the page.'}
				</p>
				<p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">If the error persists, try again later.</p>
			</div>
		</main>
	);
};

export { ErrorPage };
