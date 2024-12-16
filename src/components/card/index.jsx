const Card = () => {
	return (
		<div className="bg-white cursor-pointer w-40 h-80 rounded-lg shadow-lg transition-transform transform hover:scale-105">
			<figure className="relative mb-2 w-full h-4/5 overflow-hidden rounded-t-lg">
				<img
					src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png"
					alt="product"
					className="w-full h-full object-cover"
				/>
				<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">Electronics</figcaption>
				<button className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-md">
					<span className="text-lg text-green-500 text-center">+</span>
				</button>
			</figure>
			<div className="px-2">
				<p className="text-sm font-medium">Product</p>
				<p className="text-sm text-gray-600">$200</p>
			</div>
		</div>
	);
};

export { Card };
