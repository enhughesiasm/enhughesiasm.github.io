import { getTraitName } from '../../../data/sbl/trait_names';
import { useEffect, useState } from 'react';

const MIN_DISPLAY_TIME = 1800;
const MAX_DISPLAY_TIME = 3000;

export const TraitName: React.FC = () => {
	const [name, setName] = useState(getTraitName().toLowerCase());
	const sizeClass =
		name.length > 34
			? 'text-[0.68rem]'
			: name.length > 24
				? 'text-xs'
				: 'text-sm';

	useEffect(() => {
		const updateEvery = Math.max(
			MIN_DISPLAY_TIME,
			MAX_DISPLAY_TIME * Math.random(),
		);
		const refresh = () => {
			setName(getTraitName().toLowerCase());
		};

		const timer = setInterval(refresh, updateEvery);
		return () => clearInterval(timer);
	}, []);

	return (
		<span
			suppressHydrationWarning
			className={`${sizeClass} min-w-0 text-center font-serif leading-[1.05] font-bold break-words text-zinc-600 small-caps`}
		>
			{name}
		</span>
	);
};
