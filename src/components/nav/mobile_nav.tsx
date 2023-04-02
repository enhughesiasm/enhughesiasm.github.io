import {
	Arcade,
	BookStack,
	ChatBubble,
	CrackedEgg,
	Mail,
	Menu,
	MultiplePages,
	PeopleTag,
	ShopAlt,
	Treadmill,
	XboxX,
} from 'iconoir-react';
import { useState } from 'react';
import { SITE_BASE_URL } from '../../data/definitions';
import { MobileNavItem } from './mobile_nav_item';

export const MobileNav: React.FC = () => {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<div className='absolute right-6 top-6 cursor-pointer text-white md:hidden'>
				{!opened && (
					<a onClick={() => setOpened(!opened)}>
						<Menu className='' />
					</a>
				)}
				{opened && (
					<a onClick={() => setOpened(!opened)}>
						<XboxX className='' />
					</a>
				)}
			</div>
			<nav className='flex w-full flex-col items-center justify-end pb-3 md:hidden'>
				{opened && (
					<ul>
						<MobileNavItem text='who?!' link={`${SITE_BASE_URL}`}>
							<PeopleTag />
						</MobileNavItem>
						<MobileNavItem
							text='articles'
							link={`${SITE_BASE_URL}articles`}>
							<MultiplePages />
						</MobileNavItem>
						<MobileNavItem
							text='anxiety'
							link={`${SITE_BASE_URL}anxiety`}>
							<Treadmill />
						</MobileNavItem>
						<MobileNavItem
							text='books'
							link={`${SITE_BASE_URL}books`}>
							<BookStack />
						</MobileNavItem>
						<MobileNavItem
							indent
							text='walking on custard'
							link={`${SITE_BASE_URL}books/walking-on-custard`}>
							<CrackedEgg />
						</MobileNavItem>
						<MobileNavItem
							indent
							text='the shop before life'
							link={`${SITE_BASE_URL}books/shop-before-life`}>
							<ShopAlt />
						</MobileNavItem>
						<MobileNavItem
							text='games'
							link={`${SITE_BASE_URL}games`}>
							<Arcade />
						</MobileNavItem>
						<MobileNavItem
							text='speaking'
							link={`${SITE_BASE_URL}speaking`}>
							<ChatBubble />
						</MobileNavItem>
						<MobileNavItem
							text='occasional email experience'
							link={`${SITE_BASE_URL}occasional-email-experience`}>
							<Mail />
						</MobileNavItem>
					</ul>
				)}
			</nav>
		</>
	);
};
