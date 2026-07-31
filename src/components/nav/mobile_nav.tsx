import {
	Arcade,
	BookStack,
	ChatBubble,
	CrackedEgg,
	Mail,
	Menu,
	MessageText,
	MultiplePages,
	PeopleTag,
	ShopFourTiles,
	Treadmill,
	XboxX,
} from 'iconoir-react';
import { useState } from 'react';
import { MobileNavItem } from './mobile_nav_item';

export const MobileNav: React.FC<{ currentPath: string }> = ({
	currentPath,
}) => {
	const [opened, setOpened] = useState(false);
	const itemProps = { currentPath };

	return (
		<>
			<button
				type="button"
				aria-expanded={opened}
				aria-controls="mobile-navigation"
				aria-label={opened ? 'Close menu' : 'Open menu'}
				className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-zinc-800 md:hidden"
				onClick={() => setOpened(!opened)}
			>
				{opened ? <XboxX /> : <Menu />}
			</button>
			{opened && (
				<nav
					id="mobile-navigation"
					aria-label="Mobile navigation"
					className="absolute top-20 right-0 left-0 z-30 bg-zinc-950 px-4 pb-4 shadow-xl md:hidden"
				>
					<ul className="mx-auto max-w-md py-2">
						<MobileNavItem
							{...itemProps}
							text="home"
							link={`${import.meta.env.BASE_URL}`}
						>
							<PeopleTag />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="articles"
							link={`${import.meta.env.BASE_URL}articles`}
						>
							<MultiplePages />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="anxiety"
							link={`${import.meta.env.BASE_URL}anxiety`}
						>
							<Treadmill />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="books"
							link={`${import.meta.env.BASE_URL}books`}
						>
							<BookStack />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							indent
							text="walking on custard"
							link={`${import.meta.env.BASE_URL}books/walking-on-custard`}
						>
							<CrackedEgg />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							indent
							text="the shop before life"
							link={`${import.meta.env.BASE_URL}books/shop-before-life`}
						>
							<ShopFourTiles />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="games"
							link={`${import.meta.env.BASE_URL}games`}
						>
							<Arcade />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							indent
							text="the supplier's complex"
							link="https://walkingoncustard.com/complex"
						>
							<ShopFourTiles />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="speaking"
							link={`${import.meta.env.BASE_URL}speaking`}
						>
							<ChatBubble />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="emails"
							link={`${import.meta.env.BASE_URL}occasional-email-experience`}
						>
							<Mail />
						</MobileNavItem>
						<MobileNavItem
							{...itemProps}
							text="contact"
							link={`${import.meta.env.BASE_URL}contact`}
						>
							<MessageText />
						</MobileNavItem>
					</ul>
				</nav>
			)}
		</>
	);
};
