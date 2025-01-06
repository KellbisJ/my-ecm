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

const CardDetailSkeleton = () => {
	return (
		<div className="flex flex-col p-4 overflow-auto animate-pulse">
			<p className="text-sm font-medium text-wrap mb-4 h-4 bg-gray-300 rounded"></p>
			<figure className="relative mb-2 w-full h-56 rounded-lg overflow-visible">
				<div className="h-full w-full bg-gray-300 rounded-lg animate-pulse"></div>
				<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded h-5"></figcaption>
			</figure>
			<span className="h-4 w-4 bg-gray-300 rounded-full flex items-center">
				<span className="mr-1">
					<div className="w-4 h-4 bg-gray-300 rounded-full overflow-hidden animate-pulse"></div>
				</span>
				<span>
					<div className="w-8 h-4 bg-gray-300 rounded animate-pulse"></div>
				</span>
			</span>
			<p className="mt-2 h-8 bg-gray-300 rounded animate-pulse"></p>
		</div>
	);
};

const CardOrderDetailSkeleton = () => {
	return (
		<div className="bg-white rounded-lg shadow-md mb-4 p-4 max-w-sm relative">
			<div className="absolute top-0 left-0 text-gray-500 hover:text-gray-900 transition duration-300 p-2">
				<div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
			</div>
			<div className="flex justify-center mb-4">
				<div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse"></div>
			</div>
			<div className="text-center">
				<h2 className="text-sm md:text-base 2xl:text-lg font-medium mb-4 animate-pulse bg-gray-200 w-6 mx-auto h-4 rounded"></h2>
				<div className="flex items-center justify-center mb-2">
					<div className="text-gray-500 hover:text-gray-900 transition duration-300">
						<div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
					</div>
					<div className="text-gray-500 hover:text-gray-900 transition duration-300">
						<div className="w-4 h-4 bg-gray-200 rounded ml-2 animate-pulse"></div>
					</div>
				</div>
				<span className="flex items-center justify-center text-sm font-medium mt-4">
					<div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
					<p className="pl-1 ml-2 animate-pulse bg-gray-200 w-8 h-4 rounded"></p>
				</span>
			</div>
		</div>
	);
};

const CardCheckoutCartSkeleton = () => {
	return (
		<div className="flex justify-start items-center gap-4 bg-white rounded-lg shadow-md mb-4 relative animate-pulse w-full">
			<div className="w-20 md:w-32 h-24 md:h-32 p-3">
				<div className="w-full h-full bg-gray-300 rounded-lg"></div>
			</div>
			<div className="flex-1">
				<h2 className="h-6 bg-gray-300 rounded-lg mb-2 w-9/12 sm:w-4/5 md:w-11/12 p-3"></h2>
				<div className="flex items-center justify-between">
					<div className="flex items-center p-3">
						<div className="bg-gray-300 rounded-full w-7 sm:w-8 h-7 sm:h-8"></div>
						<span className="mx-2 h-6 w-6 bg-gray-300 rounded-lg"></span>
						<div className="bg-gray-300 rounded-full w-7 sm:w-8 h-7 sm:h-8"></div>
					</div>
				</div>
			</div>
			<div className="absolute top-2 right-2 bg-gray-300 rounded-full w-8 h-8"></div>
		</div>
	);
};

const CardContinueShoppingInCart = () => {
	return (
		<>
			<div className="hidden lg:flex flex-col justify-start gap-2 p-4 text-start bg-gray-200 rounded h-80 w-1/4 animate-pulse">
				<div className="bg-gray-300 h-6 rounded w-2/3"></div>
				<div className="bg-gray-300 h-10 rounded w-full mb-2"></div>
				<div className="flex w-full justify-between">
					<div className="bg-gray-300 h-6 rounded w-1/3"></div>
					<div className="bg-gray-300 h-6 rounded w-1/3"></div>
				</div>
				<div className="bg-gray-300 h-6 rounded w-1/4"></div>
				<div className="bg-gray-300 h-10 rounded w-1/2"></div>
			</div>

			<div className="flex lg:hidden flex-col justify-center gap-2 text-start bg-gray-200 rounded fixed bottom-0 left-0 w-full min-h-40 max-h-40 overflow-y-auto animate-pulse">
				<div className="m-auto w-9/12">
					<div className="h-6 bg-gray-300 rounded mb-2"></div>

					<div className="flex justify-between text-wrap break-all mb-2">
						<div className="h-4 bg-gray-300 rounded w-1/3"></div>
						<div className="h-4 bg-gray-300 rounded w-1/4"></div>
					</div>

					<div className="flex justify-between w-full text-wrap break-all items-center mb-4">
						<div className="h-4 bg-gray-300 rounded w-1/4"></div>
						<div className="h-8 bg-gray-300 rounded w-1/3"></div>
					</div>

					<div className="w-full">
						<div className="h-10 bg-gray-300 rounded-lg"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export { CardSkeleton, CardDetailSkeleton, CardOrderDetailSkeleton, CardCheckoutCartSkeleton, CardContinueShoppingInCart };
