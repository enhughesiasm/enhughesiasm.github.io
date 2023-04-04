import { Pacman } from 'iconoir-react';
import type React from 'react';

export const MobileNavItem: React.FC<{
	text: string;
	link: string;
	indent?: boolean;
	children: React.ReactNode;
}> = ({ text, link, children, indent = false }) => {
	const isActive = false;
	// (link === import.meta.env.BASE_URL && url.pathname === import.meta.env.BASE_URL) ||
	// (link !== import.meta.env.BASE_URL && url.pathname.startsWith(link));

	return (
		<li
			className={`${
				indent === true ? 'pl-6' : ''
			} group relative flex w-full items-center justify-center py-2 hover:text-yellow-400
				${isActive ? 'border-b-4 border-rose-500 pt-2 xl:border-b-8' : ''}`}>
			<a
				className='flex h-full w-full flex-grow items-center space-x-1 px-2 text-sm lg:space-x-3 lg:px-6 lg:text-base xl:text-lg'
				href={link}>
				<span className='mr-2 text-sm'>{children}</span>
				<span className={`${isActive ? 'text-emerald-300' : ''}`}>
					{text}
				</span>
			</a>
		</li>
	);
};
