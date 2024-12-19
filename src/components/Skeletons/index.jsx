import React from 'react';

const CardSkeleton = () => {
	const count = 20;
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full justify-items-center mx-auto my-4 p-3.5">
			{Array.from({ length: count }, (_, index) => (
				<div
					key={index}
					className="bg-white cursor-pointer w-36 sm:w-48 lg:w-44 xl:w-52 h-56 sm:h-96 rounded-lg shadow-lg transition-transform transform hover:scale-105">
					<figure className="relative mb-2 w-full h-4/6 overflow-hidden rounded-t-lg">
						<div className="loading-placeholder h-full w-full bg-gray-300 rounded-t-lg animate-pulse"></div>
						<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
							<div className="loading-placeholder h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
						</figcaption>
						<button className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-md">
							<div className="loading-placeholder h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
						</button>
					</figure>
					<div className="px-2">
						<div className="loading-placeholder h-4 w-full bg-gray-300 rounded animate-pulse mb-1"></div>
						<div className="loading-placeholder h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export { CardSkeleton };
