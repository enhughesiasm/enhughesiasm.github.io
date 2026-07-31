import type React from 'react';

export const MobileNavItem: React.FC<{
	text: string;
	link: string;
	indent?: boolean;
	children: React.ReactNode;
	currentPath: string;
}> = ({ text, link, children, currentPath, indent = false }) => {
	const isHome = link === import.meta.env.BASE_URL;
	const isActive = isHome ? currentPath === link : currentPath.startsWith(link);

	return (
		<li
			className={`${
				indent === true ? 'pl-6' : ''
			} relative flex w-full items-center rounded-lg ${isActive ? 'bg-zinc-800 text-yellow-300' : 'text-zinc-100 hover:bg-zinc-900 hover:text-yellow-300'}`}
		>
			<a
				aria-current={isActive ? 'page' : undefined}
				className="flex min-h-11 w-full items-center gap-3 px-3 text-base no-underline"
				href={link}
			>
				<span className="mr-2 text-sm">{children}</span>
				<span>{text}</span>
			</a>
		</li>
	);
};
