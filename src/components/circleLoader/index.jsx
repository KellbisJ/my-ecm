import React from 'react';

function CircleLoader() {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-[90vh]">
			<div className="w-24 h-24 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}

export { CircleLoader };
