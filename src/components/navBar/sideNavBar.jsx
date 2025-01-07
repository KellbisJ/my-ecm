import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavigatePathElement } from './navigatePathElement';

function SideNavBar({ setOpen }) {
	return (
		<>
			<div
				className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 lg:hidden"
				onClick={() => setOpen(false)}
				style={{ backdropFilter: 'blur(4px)' }}></div>
			<div className="flex flex-col fixed top-0 left-0 w-7/12 h-screen bg-gray-200 z-20 p-4 text-base font-semibold lg:hidden text-black">
				<div className="flex justify-between">
					<h1 className="text-lg font-bold">Shopi</h1>
					<FontAwesomeIcon icon={faTimes} className="cursor-pointer text-xl" onClick={() => setOpen(false)} />
				</div>
				<ul className="mt-4 flex flex-col gap-3 text-wrap overflow-y-auto">
					<li className="text-base font-bold">User</li>
					<hr className="border-t-2 border-gray-300 my-2" />
					<ul className="flex flex-col gap-3">
						<li>
							<NavigatePathElement path={'/my-orders'} sideBarOpen={setOpen}>
								My Orders
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement path={'/my-account'} sideBarOpen={setOpen}>
								My Account
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement path={'/checkout'} sideBarOpen={setOpen}>
								My Cart
							</NavigatePathElement>
							<hr className="border-t-2 border-gray-300 my-2" />
						</li>
					</ul>
					<li className="text-base font-bold">Products</li>
					<hr className="border-t-2 border-gray-300 my-2" />
					<ul className="flex flex-col gap-3">
						<li>
							<NavigatePathElement path={'/home'} sideBarOpen={setOpen}>
								All
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement to={'/home'} sideBarOpen={setOpen}>
								Clothes
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement to={'/home'} sideBarOpen={setOpen}>
								Electronics
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement to={'/home'} sideBarOpen={setOpen}>
								Furnitures
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement to={'/home'} sideBarOpen={setOpen}>
								Toys
							</NavigatePathElement>
						</li>
						<li>
							<NavigatePathElement to={'/home'} sideBarOpen={setOpen}>
								Others
							</NavigatePathElement>
						</li>
					</ul>
				</ul>
			</div>
		</>
	);
}

export { SideNavBar };
