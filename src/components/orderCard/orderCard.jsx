import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const OrderCard = ({ title, imageUrl, price }) => {
	return (
		<div className="bg-white rounded-lg shadow-md mb-4 p-4 max-w-sm">
			<div className="flex justify-center mb-4">
				<img src={imageUrl} alt={title} className="w-24 h-24 object-contain object-center rounded-lg" />
			</div>
			<div className="text-center">
				<h2 className="text-sm md:text-base 2xl:text-lg font-medium mb-2">{title}</h2>
				<span className="flex items-center justify-center text-sm font-medium">
					<FontAwesomeIcon className="text-green-500" icon={faDollarSign} />
					<p className="pl-1">{price}</p>
				</span>
			</div>
		</div>
	);
};

export { OrderCard };
